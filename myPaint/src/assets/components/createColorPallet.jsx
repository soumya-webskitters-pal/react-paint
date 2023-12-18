import React, { useEffect } from "react";
import Settings from "./DefaultSetting";

function CreateColorPallet() {
  useEffect(() => {
    const ctx = Settings.canvas.getContext("2d", { willReadFrequently: true });

    ctx.beginPath();

    // outline of box - (pick a color)
    ctx.lineWidth = "1";
    ctx.fillStyle = Settings.ui.bgColor;
    ctx.strokeStyle = Settings.ui.strokeColor;
    ctx.roundRect(
      Settings.ui.offset.x,
      Settings.ui.offset.y,
      Settings.ui.offset.w,
      Settings.ui.offset.h,
      5
    );
    ctx.fill();
    ctx.stroke();

    // title - (pick a color)
    ctx.font =
      Settings.ui.text.info1.h + "px " + Settings.ui.text.info1.family;
    ctx.textAlign = "start";
    ctx.textBaseline = "middle";
    ctx.fillStyle = Settings.ui.color;
    Settings.ui.text.info1.w = ctx.measureText(
      Settings.ui.text.info1.title
    ).width;
    ctx.lineWidth = "1";
    ctx.fillStyle = "none";
    ctx.strokeStyle = Settings.ui.strokeColor;
    ctx.roundRect(
      Settings.ui.offset.x * 2 - 5,
      Settings.ui.offset.y - Settings.ui.text.info1.h,
      Settings.ui.text.info1.w + Settings.ui.offset.x,
      Settings.ui.offset.y,
      5
    );
    ctx.stroke();
    ctx.clearRect(
      Settings.ui.offset.x * 2 - 5 + 1,
      Settings.ui.offset.y - Settings.ui.text.info1.h - 1,
      Settings.ui.text.info1.w + Settings.ui.offset.x - 2,
      Settings.ui.offset.y
    );
    ctx.clearRect(
      Settings.ui.offset.x * 2 - 5 - 1,
      Settings.ui.offset.y - Settings.ui.text.info1.h - 1,
      Settings.ui.text.info1.w + Settings.ui.offset.x + 5,
      Settings.ui.offset.y - Settings.ui.text.info1.h + 3
    );
    ctx.fillStyle = Settings.ui.color;
    ctx.fillText(
      Settings.ui.text.info1.title,
      Settings.ui.offset.x * 2,
      Settings.ui.offset.y
    );

    // Create color gradient - (pick a color)
    Settings.colorPicker.x = Settings.ui.offset.x * 2 - 5;
    Settings.colorPicker.y =
      Settings.ui.offset.y +
      Settings.ui.text.info1.h +
      Settings.ui.offset.x -
      5;
    Settings.colorPicker.w =
      Settings.ui.offset.w - Settings.ui.offset.x - 5;
    Settings.colorPicker.h =
      Settings.ui.offset.h -
      Settings.ui.offset.y -
      Settings.ui.offset.x +
      5;
    var gradient = ctx.createLinearGradient(
      Settings.colorPicker.x - 5,
      0,
      Settings.ui.offset.w + 5,
      0
    );
    gradient.addColorStop(0, "rgb(255,0,0)");
    gradient.addColorStop(0.15, "rgb(255,0,255)");
    gradient.addColorStop(0.33, "rgb(0,0,255)");
    gradient.addColorStop(0.49, "rgb(0,255,255)");
    gradient.addColorStop(0.67, "rgb(0,255,0)");
    gradient.addColorStop(0.84, "rgb(255,255,0)");
    gradient.addColorStop(1, "rgb(255,0,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(
      Settings.colorPicker.x,
      Settings.colorPicker.y,
      Settings.colorPicker.w,
      Settings.colorPicker.h
    );

    // Create semi transparent gradient (white -> trans. -> black)
    gradient = ctx.createLinearGradient(
      0,
      Settings.colorPicker.y + 5,
      0,
      Settings.ui.offset.h + Settings.ui.offset.x - 5
    );
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.5, "rgba(255,255,255,0)");
    gradient.addColorStop(0.5, "rgba(0,0,0,0)");
    gradient.addColorStop(1, "rgba(0,0,0,1)");
    ctx.fillStyle = gradient;
    ctx.fillRect(
      Settings.colorPicker.x,
      Settings.colorPicker.y,
      Settings.colorPicker.w,
      Settings.colorPicker.h
    );
    ctx.closePath();

    // You might want to handle the cleanup here if needed
    // return () => {
    //   // Cleanup logic
    // };
  }, []);

  return null; // You don't need to render anything in this component
}

export default CreateColorPallet;
