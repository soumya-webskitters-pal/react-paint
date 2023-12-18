import React, { useRef, useEffect } from "react";
import Settings from "./DefaultSetting";

// init call
function CreateCanvas() {
  // Create a ref for the canvas element
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set canvas size
    Settings.w = window.innerWidth;
    Settings.h = window.innerHeight;
    Settings.canvas = canvasRef.current;
  }, []);

  return (
    <div style={{ position: "relative", height: Settings.h + "px", width: "100%" }} className={Settings.container.substring(1)}>
      <canvas
        ref={canvasRef}
        id="paintcanvas"
        width={Settings.w}
        height={Settings.h}
      />
    </div>
  );
}

export default CreateCanvas;
