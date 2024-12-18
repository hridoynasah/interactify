"use client";
import { useAuth } from "@/context/AuthContext";
import { BookmarkIcon, LogOut, Settings, Upload, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ProfileMenu = () => {
  const { authData, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast.success("Logout successful!");
  };

  const menuItems = [
    {
      icon: BookmarkIcon,
      text: "My Courses",
      action: () => router.push(`/my-courses/${authData?._id}`),
    },
    {
      icon: Upload,
      text: "Create Courses",
      action: () => router.push("/create-course"),
    },
    {
      icon: Users,
      text: "Community",
      action: () => router.push("/community"),
    },
    {
      icon: Settings,
      text: "Settings",
      action: () => console.log("Settings clicked"),
    },
    {
      icon: LogOut,
      text: "Logout",
      action: () => handleLogout(),
    },
  ];

  return (
    <div className="absolute right-0 mt-2 w-56 bg-black rounded-lg shadow-lg py-2 z-50">
      <div className="px-4 py-3 border-b border-gray-800">
        <p className="text-sm font-semibold text-gray-200">
          {authData.firstName} {authData.lastName}
        </p>
        <p className="text-sm text-gray-400">{authData.email}</p>
      </div>
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={item.action}
          className="w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-800 flex items-center space-x-2"
        >
          <item.icon className="h-5 w-5 text-gray-300" />
          <span>{item.text}</span>
        </button>
      ))}
    </div>
  );
};

export default ProfileMenu;
