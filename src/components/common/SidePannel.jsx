import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SidePannel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const dashboardicon = (
    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z" />
    </svg>
  );

  const siteEngg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6" />
      <path d="M16 11h6" />
    </svg>
  );

  const createNewProject = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke="currentColor" strokeWidth="2" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v1M12 11v6m3-3H9m-6 7h18a2 2 0 002-2V9a2 2 0 00-2-2H3v12a2 2 0 002 2z" />
    </svg>
  );

  const notification = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M15 17h5l-1.5-1.5A2 2 0 0 1 18 14v-3a6 6 0 1 0-12 0v3a2 2 0 0 1-.5 1.5L4 17h5m0 0v1a3 3 0 0 0 6 0v-1m-6 0h6" />
    </svg>
  );

  const settings = (
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
    >
      <circle cx="12" cy="12" r="3" />
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65
    1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65
    1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1
    1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
    0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65
    1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65
    1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1
    4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2
    2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0
    .66.26 1.3.73 1.77.47.47 1.11.73 1.77.73h.09a2 2 0 1 1 0
    4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      />
    </svg>

  );

  const logout = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24"
      height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );

  const sidebarLinks = [
    { name: "Dashboard", path: "/contractorDashboard", icon: dashboardicon },
    { name: "Add Site Engineer", path: "/add-site-engg", icon: siteEngg },
    { name: "Create New Project", path: "/create-new-project", icon: createNewProject },
    { name: "Notification", path: "/notifications", icon: notification },
    { name: "Settings", path: "/settings", icon: settings },
    { name: "Logout", path: "/", icon: logout },
  ];

  // 🔹 Sync active link with URL path
  useEffect(() => {
    const currentIndex = sidebarLinks.findIndex(item => location.pathname === item.path);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname]);

  const handleItemClick = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <div className="fixed top-25 md:w-64 w-16 border-r border-gray-300 bg-white min-h-screen">
      <div className="pt-4 flex flex-col">
        {sidebarLinks.map((item, index) => (
          <button
            key={index}
            onClick={() => handleItemClick(index, item.path)}
            className={`flex items-center py-3 px-4 gap-3 transition-colors duration-200 w-full text-left cursor-pointer
              ${activeIndex === index
                ? "border-r-4 md:border-r-[6px] bg-[#ffbe00]/10 border-[#ffbe00] text-[#ffbe00]"
                : "hover:bg-gray-100/90 border-white text-gray-700"
              }`}
          >
            {item.icon}
            <p className="md:block hidden">{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SidePannel;
