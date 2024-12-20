import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide"
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);

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
                <a href="#about" className="text-gray-400 hover:text-marvel-red transition-colors">
                  About Game
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-400 hover:text-marvel-red transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#shop" className="text-gray-400 hover:text-marvel-red transition-colors">
                  Shop
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/marvelrivals" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-marvel-red transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com/MarvelRivals" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-marvel-red transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.instagram.com/marvelrivals/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-marvel-red transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://discord.gg/marvelrivals" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-marvel-red transition-colors">
                <DiscordIcon />
              </a>
              <a href="https://www.youtube.com/@MarvelRivals" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-marvel-red transition-colors">
                <Youtube size={24} />
              </a>
            </div>
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