import React, { useState } from "react";

function Card({ title, imageSrc, description, onSeeMoreClick }) {
  // State to track whether the modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle the "See More" button click
  const handleSeeMoreClick = () => {
    setIsModalOpen(true); // Open the modal
    onSeeMoreClick(); // Trigger the parent component's function
  };

  // State to track whether the card is hovered
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle mouse enter event (hover)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Function to handle mouse leave event (hover out)
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 bg-gray-800 ${
        isHovered ? "hover-description" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-96 w-72">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <div className="title-container h-16 overflow-hidden">
          <h1 className="font-dmserif text-3xl font-bold text-white overflow-hidden overflow-ellipsis whitespace-nowrap">
            {title}
          </h1>
        </div>
        <p
          className={`mb-3 text-lg italic text-white opacity-5 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {description}
        </p>

        <button
          className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
          onClick={handleSeeMoreClick}
        >
          See More
        </button>
      </div>
    </div>
  );
}

export default Card;
