import Settings from "./DefaultSetting";

//draw mouse Pointer
function CreatePointer() {
  return (
    <span
      style={{
        display: "block",
        width: "30px",
        height: "30px",
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 5,
        pointerEvents: "none",
        lineHeight: 0,
        marginTop: "-30px",
        color: Settings.erasor.pick
          ? Settings.colorPicker.bgColor
          : Settings.colorPicker.color,
        "--size": Settings.colorPicker.brushSize.current + "px",
        transform: `translate(${Settings.x}px, ${Settings.y}px)`,
      }}
      className="canvas_cursor"
    >
      <img
        src={
          Settings.erasor.pick
            ? Settings.ui.icons.erasor
            : Settings.colorPicker.brushSize.current >
              Settings.colorPicker.brushSize.max / 2
            ? Settings.ui.icons.brush
            : Settings.ui.icons.pen
        }
        style={{ height: "30px", width: "30px" }}
        alt=""
      />
    </span>
  );
}
export default CreatePointer;
