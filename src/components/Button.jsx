import React, { useState } from 'react';
import "../styles/add.css";

const ResumeDownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Simulate download completion (you can adjust timing as needed)
    setTimeout(() => {
      setIsDownloading(false);
      setIsComplete(true);
      
      // Reset after 2 seconds
      setTimeout(() => {
        setIsComplete(false);
      }, 2000);
    }, 3000);
  };

  return (
    <div className="button-container">
      <button
        className={`resume-download-btn ${isDownloading ? 'downloading' : ''} ${isComplete ? 'complete' : ''}`}
        onClick={handleDownload}
        disabled={isDownloading || isComplete}
      >
        <span className="button-text">
          {isComplete ? 'Download Complete!' : '📄 Download Resume'}
        </span>
        <span className="button-icon">
          <svg className="download-arrow" viewBox="0 0 24 24">
            <path d="M5 12h14M12 19l7-7-7-7"/>
          </svg>
          <svg className="checkmark" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7"/>
          </svg>
        </span>
        <span className="progress-bar"></span>
        <span className="progress-dots">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="dot"></span>
          ))}
        </span>
      </button>
      <div className="shadow"></div>
    </div>
  );
};

export default ResumeDownloadButton;