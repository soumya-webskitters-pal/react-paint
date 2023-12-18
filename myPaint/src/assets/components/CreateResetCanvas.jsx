import React, { useEffect } from "react";
import Settings from "./DefaultSetting";

function CreateResetCanvas() {
  useEffect(() => {
    const ctx = Settings.canvas.getContext("2d", { willReadFrequently: true });

    Settings.resetCanvas.pick ? (this.elem.style.cursor = "pointer") : null;
    let pos = {
      x: Settings.ui.offset.x,
      y:
        Settings.drawBox.y +
        Settings.drawBox.h -
        Settings.ui.offset.y -
        80,
      w: Settings.ui.offset.w,
      h: 40,
    };
    ctx.clearRect(pos.x, pos.y, pos.w, pos.h);
    Settings.resetCanvas.boundary.x = pos.x;
    Settings.resetCanvas.boundary.y = pos.y;
    Settings.resetCanvas.boundary.w = pos.w;
    Settings.resetCanvas.boundary.h = pos.h;
    ctx.beginPath();
    //box - (clear canvas)
    ctx.lineWidth = "1";
    ctx.fillStyle =
      Settings.resetCanvas.pick && val ? "#ffffff" : "#f95e34";
    ctx.strokeStyle = "#ffffff";
    ctx.roundRect(pos.x, pos.y, pos.w, pos.h, 5);
    ctx.fill();
    ctx.stroke();
    //text - (clear canvas)
    ctx.fillStyle =
      Settings.resetCanvas.pick && val ? "#000000" : "#ffffff";
    ctx.font = "20px " + Settings.ui.text.info1.family;
    ctx.textAlign = "start";
    ctx.textBaseline = "middle";
    let tw = ctx.measureText("Clear Canvas").width;
    ctx.fillText("Clear Canvas", pos.x + (tw / 2 - 15), pos.y + 20);
    ctx.closePath();
    // if (
    //   Settings.resetCanvas.pick &&
    //   val.type == "click" &&
    //   val.target == this.canvas
    // ) {
    //   ctx.clearRect(
    //     Settings.drawBox.x,
    //     Settings.drawBox.y,
    //     Settings.drawBox.w,
    //     Settings.drawBox.h
    //   );
    //   ctx.beginPath();
    //   ctx.lineWidth = "1";
    //   ctx.fillStyle = Settings.colorPicker.bgColor;
    //   ctx.strokeStyle = Settings.ui.strokeColor;
    //   ctx.roundRect(
    //     Settings.drawBox.x - 1,
    //     Settings.drawBox.y - 1,
    //     Settings.drawBox.w + 2,
    //     Settings.drawBox.h + 2,
    //     5
    //   );
    //   ctx.fill();
    //   ctx.stroke();
    //   ctx.closePath();
    // }

    // You might want to handle the cleanup here if needed
    // return () => {
    //   // Cleanup logic
    // };
  }, []);

  return null; // You don't need to render anything in this component
}

export default CreateResetCanvas;