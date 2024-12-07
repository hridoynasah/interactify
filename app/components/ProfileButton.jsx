"use client";
import { useAuth } from "@/context/AuthContext";

const ProfileButton = ({ onClick }) => {
  const { authData } = useAuth();

  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName[0].toUpperCase() : "";
    const lastInitial = lastName ? lastName[0].toUpperCase() : "";
    return firstInitial + lastInitial;
  };

  const initials = authData
    ? getInitials(authData.firstName, authData.lastName)
    : "";

  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 focus:outline-none"
    >
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 text-white font-bold text-lg border-2 border-white">
        {initials || "?"}
      </div>
    </button>
  );
};

export default ProfileButton;
