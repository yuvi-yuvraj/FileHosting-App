import { useState, useRef } from "react";
import axios from "axios";
import { Config } from "../config";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const history = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const inputFileRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 100 * 1024 * 1024) {
      setSelectedFile(file);
      setUploadError(null);
    } else {
      setSelectedFile(null);
      setUploadError("File size must be less than 100MB");
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      axios
        .post(`${Config.API_URL}/upload`, formData)
        .then((response) => {
          const fileId = response.data.fileId;
          history(`/view/${fileId}`);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          setUploadError("Upload failed. Please try again.");
        });
    }
  };

  const handleChooseFileClick = () => {
    inputFileRef.current.click();
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-black">
      <div className="text-center max-w-[1024px] p-8 bg-[#1e1e1e] rounded-[10px] border border-orange-400 shadow-2xl shadow-orange-200">
        <h1 className="text-[2.5rem] mb-4 text-white">Upload Your File</h1>
        <p className="text-[1.2rem] text-[#777] mb-8">
          Select a file to upload (less than 100MB).
        </p>
        <div className="mb-4 flex flex-col items-center">
          <input
            type="file"
            id="fileInput"
            accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            ref={inputFileRef}
            className="hidden"
          />
          <button
            className="btn-glow-gradient mx-auto inline-block px-5 py-2.5 text-[1.2rem]"
            onClick={handleChooseFileClick}
          >
            <span className="pointer-events-none">Choose File</span>
          </button>
        </div>
        {selectedFile && (
          <div className="mb-4 text-white">
            Selected file: {selectedFile.name}
          </div>
        )}
        {uploadError && <div className="text-red-500 mt-4">{uploadError}</div>}
        <button
          className="btn-glow-gradient mx-auto block w-full px-5 py-2.5 text-[1.2rem]"
          onClick={handleUpload}
          disabled={!selectedFile || uploadError}
        >
          Upload Now
        </button>
      </div>
    </div>
  );
};

export default Upload;