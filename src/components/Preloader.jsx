import React, { useEffect, useState } from 'react';
import "../css/preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  if (!loading) {
    return null; 
  }

  return (
    <div id="preloader">
      <div className="loader">
        <h1>
          <span className="let let1">H</span>  
          <span className="let let2">O</span>  
          <span className="let let3">U</span>  
          <span className="let let4">S</span>  
          <span className="let let5">E</span>  
          <span className="let let6">-</span>  
          <span className="let let7">O</span>  
          <span className="let let4">F</span>  
          <span className="let let5">-</span>  
          <span className="let let1">M</span>  
          <span className="let let2">A</span>  
          <span className="let let3">T</span>  
          <span className="let let4">H</span>  
          <span className="let let5">E</span>  
          <span className="let let6">M</span>  
          <span className="let let7">A</span>  
          <span className="let let4">T</span>  
          <span className="let let4">I</span>  
          <span className="let let4">C</span>  
          <span className="let let4">S</span>  

        </h1>
      </div>
    </div>
  );
};

export default Preloader;
