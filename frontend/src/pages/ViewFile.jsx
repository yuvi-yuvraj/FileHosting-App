import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { Config } from "../config";

const ViewFile = () => {
  const { id } = useParams();
  const [fileInfo, setFileInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${Config.API_URL}/view/${id}`)
      .then((response) => {
        setFileInfo(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError("File not found");
        } else {
          setError("An error occurred while fetching file data");
        }
      });
  }, [id]);

  const handleDownload = () => {
    if (fileInfo) {
      window.open(fileInfo.path, "_blank");
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-black">
      <div className="text-center max-w-[1024px] p-8 bg-[#1e1e1e] rounded-[10px] border border-orange-400 shadow-2xl shadow-orange-200">
        {fileInfo ? (
          <div className="flex flex-col items-start mb-4">
            <div className="text-[1.2rem] text-[#999]">Name:</div>
            <div className="text-[1.8rem] font-bold mb-2 text-white">{fileInfo.filename}</div>
            <div className="text-[1.2rem] text-[#999]">Size:</div>
            <div className="text-[1.8rem] font-bold mb-2 text-white">{fileInfo.filesize}</div>
            <div className="text-[1.2rem] text-[#999]">Total Downloads:</div>
            <div className="text-[1.8rem] font-bold mb-2 text-white">{fileInfo.visits}</div>
          </div>
        ) : (
          <div className="mt-8 text-[1.4rem] text-red-500">{error || "Loading..."}</div>
        )}
        {fileInfo && (
          <div className="flex justify-center mt-8">
            <button className="btn-glow-gradient mx-auto px-5 py-2.5 text-[1.4rem]" onClick={handleDownload}>
              <FaDownload className="mr-2 text-[1.2rem]" />
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewFile;