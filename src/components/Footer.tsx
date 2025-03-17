const Footer = () => {
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            {/* Logo & Description */}
            <div>
              <h3 className="text-2xl font-semibold text-[#0ea5e9] hover:text-blue-600 dark:text-[#0ea5e9] dark:hover:text-blue-400 transition-all duration-300 cursor-pointer">
                Petzliva
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Bringing love and care to your pets.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200 hover:text-[#0ea5e9] transition-all duration-200 cursor-pointer">
                Quick Links
              </h4>
              <ul className="mt-3 space-y-2">
                {["Home", "About", "Services", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-block text-gray-700 dark:text-gray-300 hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9] transition-all duration-200 hover:-translate-x-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200 hover:text-[#0ea5e9] transition-all duration-200 cursor-pointer">
                Follow Us
              </h4>
              <div className="flex space-x-4 mt-3">
                {["Facebook", "Twitter", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-[#0ea5e9] transition-colors duration-200"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="border-t border-gray-300 dark:border-gray-700 pt-8 mt-8 mb text-center text-gray-700 dark:text-gray-300">
            <p className="hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9] transition-colors pb-3 duration-200 cursor-pointer">
              &copy; {new Date().getFullYear()} Petzliva. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  