import React, { useEffect } from "react";
import Settings from "./DefaultSetting";

function CreateSaveAs() {
    useEffect(() => {
      const ctx = Settings.canvas.getContext("2d", { willReadFrequently: true });
  
      Settings.saveAs.pick ? (this.elem.style.cursor = "pointer") : null;
    let pos = {
      x: Settings.ui.offset.x,
      y: Settings.drawBox.y + Settings.drawBox.h - 40,
      w: Settings.ui.offset.w,
      h: 40,
    };
    ctx.clearRect(pos.x, pos.y, pos.w, pos.h);
    Settings.saveAs.boundary.x = pos.x;
    Settings.saveAs.boundary.y = pos.y;
    Settings.saveAs.boundary.w = pos.w;
    Settings.saveAs.boundary.h = pos.h;
    ctx.beginPath();
    //box - (clear canvas)
    ctx.lineWidth = "1";
    ctx.fillStyle =
      Settings.saveAs.pick && val ? "#ffffff" : "#34882e";
    ctx.strokeStyle = "#ffffff";
    ctx.roundRect(pos.x, pos.y, pos.w, pos.h, 5);
    ctx.fill();
    ctx.stroke();
    //text - (clear canvas)
    ctx.fillStyle =
      Settings.saveAs.pick && val ? "#000000" : "#ffffff";
    ctx.font = "20px " + Settings.ui.text.info1.family;
    ctx.textAlign = "start";
    ctx.textBaseline = "middle";
    let tw = ctx.measureText("Save as Image").width;
    ctx.fillText("Save as Image", pos.x + (tw / 2 - 20), pos.y + 20);
    ctx.closePath();
    // if (
    //   Settings.saveAs.pick &&
    //   val.type == "click" &&
    //   val.target == this.canvas
    // ) {
    //   const imageContentRaw = ctx.getImageData(
    //     Settings.drawBox.x,
    //     Settings.drawBox.y,
    //     Settings.drawBox.w,
    //     Settings.drawBox.h
    //   );
    //   var fakecanvas = document.createElement("canvas");
    //   fakecanvas.width = window.innerWidth;
    //   fakecanvas.height = window.innerHeight;
    //   this.elem.appendChild(fakecanvas);
    //   fakecanvas.getContext("2d").putImageData(imageContentRaw, 0, 0);
    //   const results = fakecanvas.toDataURL("image/png");
    //   this.elem.removeChild(fakecanvas);
    //   const link = document.createElement("a");
    //   link.href = results;
    //   link.download = `canvas_image_${Date.now()}.png`;
    //   this.elem.appendChild(link);
    //   link.click();
    //   this.elem.removeChild(link);
    // }
  
      // You might want to handle the cleanup here if needed
      // return () => {
      //   // Cleanup logic
      // };
    }, []);
  
    return null; // You don't need to render anything in this component
  }
  
  export default CreateSaveAs;