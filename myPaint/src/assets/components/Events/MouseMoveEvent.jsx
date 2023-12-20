import React, { useState, useEffect } from "react";
import Settings from "../DefaultSetting";

function GlobalMouseMoveComponent() {
  const [coordinates, setCoordinates] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCoordinates({
        x: event.clientX - Settings.canvas.offsetLeft,
        y: event.clientY - Settings.canvas.offsetTop,
      });
      Settings.x = event.clientX - Settings.canvas.offsetLeft;
      Settings.y = event.clientY - Settings.canvas.offsetTop;
      // Settings.x = coordinates.x;
      // Settings.y = coordinates.y;
      // console.log(coordinates);
      // console.log(Settings.x, Settings.y);
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  // console.log(Settings);
  return null;
}
export default GlobalMouseMoveComponent;
