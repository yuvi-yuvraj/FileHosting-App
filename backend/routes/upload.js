const express = require("express");
const MediaFile = require("../models/MediaFile"); 
const { Config } = require("../config");

const UploadRoute = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    const uploadedFile = req.files.file; 

    const uniqueFileName = Date.now() + "-" + uploadedFile.name;

    const uploadPath = Config.BASE_DIR + "/uploads/" + uniqueFileName;
    await uploadedFile.mv(uploadPath);

    const mediaFile = new MediaFile({
      filename: uploadedFile.name,
      filesize: uploadedFile.size,
      path: uniqueFileName,
      visitcount: 0,
    });

    let f = await mediaFile.save();

    res.json({ fileId: f._id });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("An error occurred while uploading the file.");
  }
};

module.exports = UploadRoute;