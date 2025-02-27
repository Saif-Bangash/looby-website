const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Footer content layout */}
          <div className="flex flex-col lg:flex-row justify-around items-center">
     
              <h1 className="text-3xl font-bold text-blue-400">Logo</h1>
              <ul className="flex space-x-6 mt-4 text-sm">
                <li>
                  <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
                </li>
              </ul>
            </div>
  
            {/* Copyright Section */}
            <div className="text-center lg:text-right py-10 lg:mt-0">
              <p className="text-sm text-center text-gray-400">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </div>
          </div>
      
      </footer>
    );
  };
  
  export default Footer;
  