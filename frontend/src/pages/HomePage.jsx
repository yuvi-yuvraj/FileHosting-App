import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-black">
      <div className="text-center max-w-[1024px] p-8 bg-[#1e1e1e] rounded-[10px] border border-orange-400 shadow-2xl shadow-orange-200">
        <h1 className="text-[2.5rem] mb-4 text-white">Welcome to My File Sharing</h1>
        <p className="text-[1.2rem] text-[#777] mb-8">Share your files securely and easily with our file hosting service.</p>
        <Link to="/upload" className="btn-glow-gradient mx-auto">
          Upload Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;