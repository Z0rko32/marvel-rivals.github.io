import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-marvel-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Marvel Rivals</h3>
            <p className="text-gray-400">
              Experience the ultimate superhero battle arena where Marvel's greatest heroes and villains clash!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-marvel-red transition-colors">
                  About Game
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-marvel-red transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-marvel-red transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-marvel-red transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-marvel-red transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-marvel-red transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Marvel Rivals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;