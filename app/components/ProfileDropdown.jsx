"use client";
import { useState, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import ProfileButton from "./ProfileButton";
import ProfileMenu from "./ProfileMenu";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <ProfileButton onClick={toggleDropdown} />
      {isOpen && <ProfileMenu />}
    </div>
  );
};

export default ProfileDropdown;
