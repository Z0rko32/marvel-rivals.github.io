import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 bg-marvel-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 typing-animation relative">
              Welcome to <span className="text-marvel-red">Marvel Rivals</span>
              <span className="cursor"></span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Join the ultimate battle arena where heroes and villains collide!
            </p>
            <Button 
              className="bg-marvel-red hover:bg-red-700 hover:scale-105 transform transition-all duration-200 text-white px-8 py-6 rounded-lg text-lg font-semibold"
              onClick={() => window.open('https://store.steampowered.com/app/2767030/Marvel_Rivals/', '_blank')}
            >
              Play Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-marvel-blue mb-4">
              About The Game
            </h2>
            <p className="text-gray-600 text-lg">
              Experience intense multiplayer battles with your favorite Marvel characters
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Epic Battles",
                description: "Engage in thrilling 3v3 team battles with unique objectives",
              },
              {
                title: "Iconic Heroes",
                description: "Choose from a vast roster of Marvel heroes and villains",
              },
              {
                title: "Strategic Gameplay",
                description: "Master unique abilities and team compositions",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-marvel-gray p-8 rounded-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-marvel-blue mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="bg-marvel-gray py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-marvel-blue mb-4">
              Latest News
            </h2>
            <p className="text-gray-600 text-lg">
              Stay updated with the latest from Marvel Rivals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "New Character Reveal",
                date: "March 15, 2024",
                description: "Discover the latest addition to our hero roster!",
              },
              {
                title: "Season 2 Update",
                date: "March 10, 2024",
                description: "New maps, modes, and balance changes coming soon.",
              },
              {
                title: "Community Event",
                date: "March 5, 2024",
                description: "Join our upcoming tournament with amazing prizes!",
              },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-xl font-bold text-marvel-blue mb-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600">{news.description}</p>
                  <button className="mt-4 text-marvel-red font-semibold hover:text-red-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-marvel-blue mb-4">
              Shop
            </h2>
            <p className="text-gray-600 text-lg">
              Get exclusive in-game items and merchandise
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-marvel-gray py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-marvel-blue mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 text-lg">
              Get in touch with our support team
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-marvel-blue mb-4">
              FAQ
            </h2>
            <p className="text-gray-600 text-lg">
              Frequently Asked Questions
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
