import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : 100));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <div className="progress-bar-container co">
      <div
        className="progress-bar bar-co"
        style={{
          width: `${progress}%`,
          height: "30px",
          backgroundColor: "green", 
          
          position: 'relative',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: progress <= 50 ? 'black' : 'white',
            fontWeight: 'bold',
          }}
        >
          {progress}%
        </span>
      </div>
     </div>
     <div className="loading-texts" style={{ padding: '10px', textAlign: 'center' }}>
        {progress < 100 ? 'Loading.....' : 'Complete'}
      </div>
      </>
  );
};

export default ProgressBar;
