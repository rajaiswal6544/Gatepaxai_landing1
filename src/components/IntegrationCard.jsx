"use client"

import { useSelector, useDispatch } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { toggleIntegration } from "../store/toggleSlice"


function IntegrationCard({ name, icon }) {
  const isEnabled = useSelector((state) => state.toggle[name] || false) // Get toggle state from Redux
  const dispatch = useDispatch()

  // Function to handle toggle
  const handleToggle = () => {
    dispatch(toggleIntegration(name)) // Dispatch Redux action

    // Show toast notification
    toast(isEnabled ? `${(name)} Integration disabled` : `${(name)} Integration enabled`, {
        position: "bottom-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

      });
      
  }

  return (
    <div className="border border-[#424242] rounded-[16px] p-4 flex flex-col shadow-sm">
      {/* Toast Notification */}
      

      {/* Row: Icon & Toggle */}
      <div className="flex items-center justify-between mb-2">
        {/* Company Icon */}
        <div className="w-[60px] h-[54px] rounded-[12px]">{icon}</div>

        {/* Toggle Button */}
        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className="w-[48px] h-[26px] flex items-center focus:outline-none"
          aria-label="Toggle Integration"
        >
          {isEnabled ? (
            <svg width="48" height="26" viewBox="0 0 48 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="26" rx="13" fill="#007AFF" />
              <circle cx="35.2" cy="13" r="9.6" fill="white" />
            </svg>
          ) : (
            <svg width="48" height="26" viewBox="0 0 48 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="26" rx="13" fill="#D8D8D8" />
              <circle cx="12.8" cy="13" r="9.6" fill="white" />
            </svg>
          )}
        </button>

      </div>

      {/* Name and Description */}
      <div className="flex flex-col items-start text-left">
        <h3 className="text-[14px] font-medium leading-[20px] text-black mb-1">{name}</h3>
        <p className="text-[12px] leading-[16px] text-[#5F5F5F] font-normal line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>
    </div>
  )
}

export default IntegrationCard
