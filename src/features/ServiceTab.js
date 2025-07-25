import React from "react";

export default function ServiceTab({ title, icon, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {if (e.key === "Enter" || e.key === ""){
        onClick();
      }}}
      className={`flex items-center space-x-3 p-4 rounded cursor-pointer 
        ${isActive ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800"}`}
    >
      <span>{icon}</span>
      <span className="font-semibold">{title}</span>
    </div>
  );
}
