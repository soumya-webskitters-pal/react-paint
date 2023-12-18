import React, { useEffect } from "react";
import Settings from "./DefaultSetting";

export function PrintAtWordWrap(text, x, y, lineHeight, fitWidth) {
    fitWidth = fitWidth || 0;

    if (fitWidth <= 0) {
      this.ctx.fillText(text, x, y);
      return;
    }
    let words = text.split(" "),
      currentLine = 0,
      idx = 1;
    let totY = y + lineHeight * currentLine;
    while (words.length > 0 && idx <= words.length) {
      var str = words.slice(0, idx).join(" ");
      var w = this.ctx.measureText(str).width;
      if (w > fitWidth) {
        if (idx == 1) {
          idx = 2;
        }
        totY = y + lineHeight * currentLine;
        this.ctx.fillText(words.slice(0, idx - 1).join(" "), x, totY);
        currentLine++;
        words = words.splice(idx - 1);
        idx = 1;
      } else {
        idx++;
      }
    }
    if (idx > 0) {
      totY = y + lineHeight * currentLine;
      this.ctx.fillText(words.join(" "), x, totY);
    }

    return totY;
  }
  
function CreateTips() {
    
  useEffect(() => {
    const ctx = Settings.canvas.getContext("2d", { willReadFrequently: true });

    let tls = {
        x:
          Settings.drawBox.x +
          Settings.drawBox.w +
          Settings.ui.offset.x,
        y: Settings.ui.offset.y,
        w: Settings.ui.tips.w,
        h: Settings.drawBox.h,
      };
      ctx.clearRect(tls.x, tls.y, tls.w, tls.h);
      ctx.beginPath();
      // outline box - (Tips)
      ctx.lineWidth = "1";
      ctx.fillStyle = Settings.ui.bgColor;
      ctx.strokeStyle = Settings.ui.strokeColor;
      ctx.roundRect(tls.x, tls.y, tls.w, tls.h, 5);
      ctx.fill();
      ctx.stroke();
  
      // title - (Tips)
      ctx.font =
        Settings.ui.tips.header.h +
        "px " +
        Settings.ui.tips.header.family;
      ctx.textAlign = "start";
      ctx.textBaseline = "middle";
      ctx.fillStyle = Settings.ui.color;
      Settings.ui.tips.header.w = ctx.measureText(
        Settings.ui.tips.header.title
      ).width;
      ctx.lineWidth = "1";
      ctx.fillStyle = "none";
      ctx.strokeStyle = Settings.ui.strokeColor;
      tls.x = tls.x + Settings.ui.offset.x - 5;
      tls.y = tls.y - Settings.ui.tips.header.h;
      ctx.roundRect(
        tls.x,
        tls.y,
        Settings.ui.tips.header.w + Settings.ui.offset.x,
        Settings.ui.offset.y,
        5
      );
      ctx.stroke();
      ctx.clearRect(
        tls.x + 1,
        tls.y - 1,
        Settings.ui.tips.header.w + Settings.ui.offset.x - 2,
        Settings.ui.offset.y
      );
      ctx.clearRect(
        tls.x - 1,
        tls.y - 1,
        Settings.ui.tips.header.w + Settings.ui.offset.x + 5,
        Settings.ui.offset.y - Settings.ui.tips.header.h + 3
      );
      ctx.fillStyle = Settings.ui.color;
      tls.x = tls.x + 5;
      tls.y = tls.y + Settings.ui.tips.header.h * 2;
      ctx.fillText(
        Settings.ui.tips.header.title,
        tls.x,
        tls.y - Settings.ui.offset.y / 2
      );
  
      //info 1
    //   tls.y = tls.y + Settings.ui.offset.y / 2 + 5;
    //   tls.w = Settings.ui.tips.w - Settings.ui.offset.x * 2;
    //   tls.h = Settings.ui.tips.header.h + 3;
    //   let nxtY = this.printAtWordWrap(
    //     Settings.ui.tips.painting,
    //     tls.x,
    //     tls.y,
    //     tls.h,
    //     tls.w
    //   );
  
    //   //info 2
    //   nxtY = this.printAtWordWrap(
    //     Settings.ui.tips.colorchange,
    //     tls.x,
    //     nxtY + Settings.ui.tips.header.h * 2,
    //     tls.h,
    //     tls.w
    //   );
  
    //   //info 3
    //   nxtY = this.printAtWordWrap(
    //     Settings.ui.tips.brushsize,
    //     tls.x,
    //     nxtY + Settings.ui.tips.header.h * 2,
    //     tls.h,
    //     tls.w
    //   );
  
    //   //info 4
    //   nxtY = this.printAtWordWrap(
    //     Settings.ui.tips.erasor,
    //     tls.x,
    //     nxtY + Settings.ui.tips.header.h * 2,
    //     tls.h,
    //     tls.w
    //   );
  
    //   //info 5
    //   nxtY = this.printAtWordWrap(
    //     Settings.ui.tips.clearAll,
    //     tls.x,
    //     nxtY + Settings.ui.tips.header.h * 2,
    //     tls.h,
    //     tls.w
    //   );
  
    //   //info 6
    //   nxtY = this.printAtWordWrap(
    //     Settings.ui.tips.saveImage,
    //     tls.x,
    //     nxtY + Settings.ui.tips.header.h * 2,
    //     tls.h,
    //     tls.w
    //   );
  
      ctx.closePath();

    // You might want to handle the cleanup here if needed
    // return () => {
    //   // Cleanup logic
    // };
  }, []);

  return null; // You don't need to render anything in this component
}



export default CreateTips;