import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { Config } from "../config";

const Dashboard = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useNavigate();
  const [totalPages, setTotalPages] = useState(0);

  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

 const fetchData = useCallback(
    async (page) => {
      try {
        const response = await axios.post(
          `${Config.API_URL}/dashboard?page=${page}`,
          {
            username,
            password,
          }
        );
        setMediaFiles(response.data.mediaFiles);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error, display message, etc.
      }
    },
    [username, password]
  );

  useEffect(() => {
    if (!username || !password) {
      history("/adminpanel/login");
    } else {
      fetchData(currentPage);
    }
  }, [currentPage, history, username, password, fetchData]);

  const handleViewFile = (file) => {
    window.open(`/view/${file._id}`, "_blank");
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchData(newPage);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-black">
      <div className="text-center max-w-[1024px] p-8 bg-[#1e1e1e] rounded-[10px] border border-orange-400 shadow-2xl shadow-orange-200 w-[80%]">
        <h2 className="text-white font-bold">Dashboard</h2>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr>
              <th className="bg-orange-400 text-white p-[10px]">Filename</th>
              <th className="bg-orange-400 text-white p-[10px]">Filesize</th>
              <th className="bg-orange-400 text-white p-[10px]">Visit Count</th>
              <th className="bg-orange-400 text-white p-[10px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mediaFiles.map((file) => (
              <tr key={file._id}>
                <td className="p-[10px] border-b border-[#ccc] text-white">{file.filename}</td>
                <td className="p-[10px] border-b border-[#ccc] text-white">{file.filesize}</td>
                <td className="p-[10px] border-b border-[#ccc] text-white">{file.visitcount}</td>
                <td className="p-[10px] border-b border-[#ccc] text-white">
                  <button
                    className="bg-orange-400 text-white border-none rounded-[5px] cursor-pointer"
                    onClick={() => handleViewFile(file)}
                  >
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-center">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="btn-glow-gradient px-4 py-2"
            >
              Previous
            </button>
          )}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 text-white rounded-[5px] border-none cursor-pointer mx-2 ${
    index + 1 === currentPage ? "bg-orange-400" : "bg-[#343a40]"
  }`}
            >
              {index + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="btn-glow-gradient px-4 py-2"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;