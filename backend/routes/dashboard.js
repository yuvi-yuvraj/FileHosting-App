const MediaFile = require("../models/MediaFile"); 
const { Config } = require("../config"); 

const dashboard = async (req, res) => {
  const { username, password } = req.body;
  if (username === Config.ADMIN_USER && password === Config.ADMIN_PASS) {
    console.log(username, password);

    try {
      const page = parseInt(req.query.page) || 1; 
      const pageSize = 4; 

      const totalDocuments = await MediaFile.countDocuments();

      const totalPages = Math.ceil(totalDocuments / pageSize);

      const mediaFiles = await MediaFile.find()
        .sort({ createdAt: -1 }) // Sort by descending createdAt
        .skip((page - 1) * pageSize) // Calculate the offset
        .limit(pageSize); // Limit results per page

      res.json({
        mediaFiles,
        currentPage: page,
        totalPages,
      });
    } catch (error) {
      console.error("Error fetching media files:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching media files" });
    }
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};

module.exports = dashboard;