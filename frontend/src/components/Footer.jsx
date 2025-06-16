
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-orange-200 fixed w-full bottom-0 text-gray-400 backdrop-blur-lg flex justify-center">
      &copy; {currentYear} File Hosting. All rights reserved.
    </footer>
  );
};

export default Footer;