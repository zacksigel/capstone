import React, { useRef, useEffect } from 'react';
import BioText from './Bio'
import ResumeText from './Resume'

const Popup = ({ isOpen, onClose, component }) => {
  const popupRef = useRef();

const displayPopup = () => {
if (component === "Bio") {
    return <BioText />
} else if (component === "Resume") {
    return <ResumeText />
}}

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup" ref={popupRef}>
            <button className="popup-close" onClick={onClose}>
              &times;
            </button>
            {displayPopup()}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
