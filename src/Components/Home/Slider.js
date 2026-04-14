import React, { useState, useEffect } from "react";
import "../Styles/home.css";
import { useNavigate, Link } from "react-router-dom";

function Slider() {
  const navigate = useNavigate();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="home" className="events-section">
      <div className="container mx-auto px-4">
        {/* RECENT ACTIVITIES HEADER */}
        <div className="events-header text-center mb-12" data-aos="fade-down">
          <span className="events-tag text-blue-600 font-semibold uppercase tracking-wider">Departmental Culture</span>
          <h1 className="text-4xl font-bold mt-2">
            Recent <span className="text-blue-600">Activities</span>
          </h1>
        </div>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto pb-16" data-aos="fade-up">
          <div className="bg-white rounded-[2.5rem] shadow-lg p-12 flex flex-col items-center text-center border border-gray-100 transition-transform hover:scale-[1.01]">
            <div className="mb-4">
              <Link to="/events" className="text-blue-600 font-bold text-2xl underline decoration-2 underline-offset-4">Click Here</Link>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Events</h2>
            <p className="text-gray-600 leading-relaxed text-lg flex-grow">
              The society organizes a wide range of activities for the benefit of the Civil Engineering department community at IITK.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-lg p-12 flex flex-col items-center text-center border border-gray-100 transition-transform hover:scale-[1.01]">
            <div className="mb-4">
              <Link to="/strengths" className="text-blue-600 font-bold text-2xl underline decoration-2 underline-offset-4">Our Strengths</Link>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Strengths</h2>
            <p className="text-gray-600 leading-relaxed text-lg flex-grow">
              We leverage our network of alumni and industry connections to provide career guidance and technical mentorship.
            </p>
          </div>
        </div>

        {/* INFORMAL FAREWELL SECTION */}
        <div className="bg-[#f0f7ff] py-16 px-8 my-16 rounded-[3rem] shadow-sm border border-blue-50" data-aos="zoom-in">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-white text-blue-600 text-xs font-bold px-4 py-2 rounded-full shadow-sm flex items-center gap-2 border border-blue-100">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  UPCOMING EVENT
                </span>
                <span className="text-gray-700 font-bold text-xl ml-2">Friday, April 17, 2026</span>
              </div>
              <h1 className="text-gray-900 text-5xl md:text-6xl font-black mb-2 uppercase">Informal Farewell</h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-500">Graduating Batch of 2026</h2>
              <div className="border-l-4 border-blue-500 pl-6 mb-10">
                <p className="text-gray-600 text-xl italic leading-relaxed">
                  "Let’s celebrate a remarkable college life and new beginnings ahead!"
                </p>
              </div>
              <div className="border-t border-blue-100 pt-8 mt-10 space-y-4 text-gray-600 text-base">
                <p>Join us for an evening dedicated to celebrating our graduating civil engineers. Reflect on the past and prepare for the journey ahead with friends and mentors.</p>
                <p className="font-semibold italic">Join us and make it memorable.</p>
              </div>
            </div>

            <div className="w-full md:w-[450px] shrink-0">
              <div className="bg-white p-4 rounded-[2.5rem] shadow-xl border border-blue-100 overflow-hidden">
                <img 
                  src="/Gallery/Informal poster.jpeg" 
                  alt="Farewell Poster" 
                  className="w-full h-auto rounded-[2rem] object-contain shadow-inner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-banner relative py-20 overflow-hidden" data-aos="zoom-in">
        <div className="contact-overlay text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">Get in touch with any questions, ideas, or feedback</h2>
          <button className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold" onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </div>
      
      {showTopBtn && (
        <button className="fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center" onClick={goToTop}>↑</button>
      )}
    </section>
  );
}

// THIS LINE RESOLVES THE ERROR
export default Slider;