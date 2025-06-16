import { Link } from "react-router-dom";

const Navbar = () => {

    return (
    <header className="bg-black border-b border-orange-200 fixed w-full top-0 z-40 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all text-white">
            <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <img src="file.png" alt="chat" className="w-8 h-8 text-primary"/>
              </div>
              <h1 className="text-lg font-bold text-white">File Hosting</h1>
          </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <Link className="flex items-center gap-2.5 hover:opacity-80 transition-all text-white" to="/">
              Home
            </Link>
            <Link className="flex items-center gap-2.5 hover:opacity-80 transition-all text-white" to="/upload">
              Upload
            </Link>

            <Link className="flex items-center gap-2.5 hover:opacity-80 transition-all text-white" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;