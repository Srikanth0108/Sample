import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "./ShopkeeperProfileDropdown.css"; // New CSS file for Shopkeeper dropdown
import logoImage from "./logo1.png"; // Profile image/logo

const ShopkeeperProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleDropdownToggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    navigate("/"); // Navigate to the login page
  };

  const handleProfile = () => {
    navigate("/shopkeeper-profile"); // Navigate to the Shopkeeper Profile page
  };

  const handleDashboard = () => {
    navigate("/dashboard"); // Navigate to the Dashboard page
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector(".shopkeeper-profile-dropdown");
      if (dropdown && !dropdown.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="shopkeeper-profile-dropdown">
      <div className="shopkeeper-profile-icon" onClick={handleDropdownToggle}>
        <img
          src={logoImage} // Replace with the actual path to your profile image/logo
          alt="Shopkeeper Profile"
          className="shopkeeper-profile-image"
        />
      </div>
      {isOpen && (
        <div className={`shopkeeper-dropdown-menu ${isOpen ? "show" : ""}`}>
          <button
            className="shopkeeper-dropdown-button"
            onClick={handleProfile}
          >
            Profile
          </button>
          <button
            className="shopkeeper-dropdown-button"
            onClick={handleDashboard}
          >
            Dashboard
          </button>
          <button className="shopkeeper-dropdown-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopkeeperProfileDropdown;