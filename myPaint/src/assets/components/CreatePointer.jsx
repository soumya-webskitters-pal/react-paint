import Settings from "./DefaultSetting";

 //draw mouse Pointer
 function DrawPointer() {
/*
    em.style.cursor = "none";
    let crs = document.querySelector(".canvas_cursor");
    if (crs != undefined || crs != null) {
    //   crs.classList.add("active");
    //   crs.style.color = Settings.erasor.pick
    //     ? Settings.colorPicker.bgColor
    //     : Settings.colorPicker.color;
    //   crs.style.setProperty(
    //     "--size",
    //     Settings.colorPicker.brushSize.current + "px"
    //   );
    //   let crs_img = crs.querySelector("img");
    //   if (Settings.erasor.pick) {
    //     crs_img.src = Settings.ui.icons.erasor;
    //   } else {
    //     if (
    //       Settings.colorPicker.brushSize.current <
    //       Settings.colorPicker.brushSize.max / 2
    //     ) {
    //       crs_img.src = Settings.ui.icons.pen;
    //     } else {
    //       crs_img.src = Settings.ui.icons.brush;
    //     }
    //   }
    //   if (Settings.drawBox.isDrawn) {
    //     crs.style.transform = `translate(${Settings.x}px, ${Settings.y}px)`;
    //   } else {
    //     if (Settings.colorPicker.pick) {
    //       em.style.cursor = "crosshair";
    //     } else {
    //       em.style.cursor = "default";
    //     }
    //   }
    return null;
    } else {*/
    return(<span style={{display:"block", width:"30px", height: "30px", position:"absolute", left:0, top:0, zIndex:5,pointerEvents:"none",lineHeight:0,marginTop:"-30px",color:(Settings.erasor.pick
        ? Settings.colorPicker.bgColor
        : Settings.colorPicker.color),
        "--size": Settings.colorPicker.brushSize.current+"px",
        transform: `translate(${window.innerWidth / 2}px, ${
            window.innerHeight / 2
          }px)`
        }} className="canvas_cursor"><img src={Settings.erasor.pick?Settings.ui.icons.erasor:(Settings.colorPicker.brushSize.current>Settings.colorPicker.brushSize.max/2?Settings.ui.icons.brush:Settings.ui.icons.pen)} style={{height: "30px",width:"30px"}} alt=""/></span>
      );
    // }
    // return null

  }
  export default DrawPointer;