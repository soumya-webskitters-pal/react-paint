import React, { useEffect } from "react";
import Settings from "./DefaultSetting";

function BrushInfo() {
  useEffect(() => {
    const ctx = Settings.canvas.getContext("2d", { willReadFrequently: true });
    
    let pos = {
        x: Settings.ui.offset.x,
        y: Settings.ui.offset.y * 3 + Settings.ui.offset.h * 2,
        w: Settings.ui.offset.w,
        h: Settings.ui.offset.h,
      };
      ctx.clearRect(pos.x, pos.y, pos.w, pos.h);

    ctx.beginPath();
// outline box - (brush info )
ctx.lineWidth = "1";
ctx.fillStyle = Settings.ui.bgColor;
ctx.strokeStyle = Settings.ui.strokeColor;
ctx.roundRect(pos.x, pos.y, pos.w, pos.h, 5);
ctx.fill();
ctx.stroke();

// title  - (brush info )
ctx.font =
  Settings.ui.text.info3.h + "px " + Settings.ui.text.info3.family;
ctx.textAlign = "start";
ctx.textBaseline = "middle";
ctx.fillStyle = Settings.ui.bgColor;
Settings.ui.text.info3.w = ctx.measureText(
  Settings.ui.text.info3.title
).width;
ctx.lineWidth = "1";
ctx.fillStyle = "none";
ctx.strokeStyle = Settings.ui.strokeColor;
ctx.roundRect(
  pos.x + Settings.ui.offset.x - 5,
  pos.y - Settings.ui.text.info3.h,
  Settings.ui.text.info3.w + Settings.ui.offset.x,
  Settings.ui.offset.y,
  5
);
ctx.stroke();
ctx.clearRect(
  pos.x + Settings.ui.offset.x - 5 + 1,
  pos.y - Settings.ui.text.info3.h - 1,
  Settings.ui.text.info3.w + Settings.ui.offset.x - 2,
  Settings.ui.offset.y
);
ctx.clearRect(
  pos.x + Settings.ui.offset.x - 5 - 1,
  pos.y - Settings.ui.text.info3.h - 1,
  Settings.ui.text.info3.w + Settings.ui.offset.x + 5,
  Settings.ui.offset.y - Settings.ui.text.info3.h + 3
);
ctx.fillStyle = Settings.ui.color;
ctx.fillText(
  Settings.ui.text.info3.title,
  Settings.ui.offset.x * 2,
  pos.y + Settings.ui.text.info3.h - Settings.ui.offset.y / 2
);

//line 1 - mode
pos.x = Settings.ui.offset.x * 2;
pos.y = pos.y + Settings.ui.text.info3.h * 2 + 3;
pos.h = Settings.ui.text.info3.h;
ctx.fillStyle = Settings.ui.color;
ctx.fillText(
  "Mode : " +
    (!Settings.erasor.pick
      ? "Paint" +
        (Settings.colorPicker.brushSize.current <
        Settings.colorPicker.brushSize.max / 2
          ? " (Pen)"
          : " (Brush)")
      : "erasor"),
  pos.x,
  pos.y
);

//line 2 - size
pos.y = pos.y + pos.h * 2 - 3;
ctx.fillStyle = Settings.ui.color;
ctx.fillText(
  "Size : " + Settings.colorPicker.brushSize.current,
  pos.x,
  pos.y
);

//line 3 - brush type
pos.y = pos.y + pos.h * 2 - 3;
ctx.fillText(
  "Brush type : " + Settings.colorPicker.brushType,
  pos.x,
  pos.y
);

//line 4 - color
pos.y = pos.y + pos.h * 2 - 3;
ctx.fillText("Color (Hex code):", pos.x, pos.y);
ctx.fillText(
  !Settings.erasor.pick
    ? Settings.colorPicker.color
    : Settings.colorPicker.bgColor,
  pos.x,
  pos.y + pos.h
);
ctx.closePath();
   

    // You might want to handle the cleanup here if needed
    // return () => {
    //   // Cleanup logic
    // };
  }, []);

  return null; // You don't need to render anything in this component
}

export default BrushInfo;
