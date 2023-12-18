import React, { useEffect } from "react";
import Settings from "./DefaultSetting";

function CreateDrawingBox() {
  useEffect(() => {
    const ctx = Settings.canvas.getContext("2d", { willReadFrequently: true });

    ctx.beginPath();

    //init artboard boundary - universal
    Settings.drawBox.x =
      Settings.ui.offset.x +
      Settings.ui.offset.w +
      Settings.ui.offset.x;
    Settings.drawBox.y = Settings.ui.offset.y;
    Settings.drawBox.w =
      Settings.w -
      Settings.ui.offset.x -
      Settings.ui.offset.w -
      Settings.ui.offset.x * 3 -
      Settings.ui.tips.w;
    Settings.drawBox.h = Settings.h - Settings.ui.offset.y * 2;

    //init dynamic artboard boundary - based on brush size
    Settings.drawBox.boundary.x = Settings.drawBox.x;
    Settings.drawBox.boundary.y = Settings.drawBox.y;
    Settings.drawBox.boundary.w = Settings.drawBox.w;
    Settings.drawBox.boundary.h = Settings.drawBox.h;

    //draw artboard
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.fillStyle = Settings.colorPicker.bgColor;
    ctx.strokeStyle = Settings.ui.strokeColor;
    ctx.roundRect(
      Settings.drawBox.x - 1,
      Settings.drawBox.y - 1,
      Settings.drawBox.w + 2,
      Settings.drawBox.h + 2,
      5
    );
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // You might want to handle the cleanup here if needed
    // return () => {
    //   // Cleanup logic
    // };
  }, []);

  return null; // You don't need to render anything in this component
}

export default CreateDrawingBox;
