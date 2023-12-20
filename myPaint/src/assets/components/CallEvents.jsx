import GlobalMouseMoveComponent from "./Events/MouseMoveEvent";
import GlobalMouseClickComponent from "./Events/MouseClickEvent";
import GlobalMouseDownComponent from "./Events/MouseDownEvent";
import GlobalMouseUpComponent from "./Events/MouseUpEvent";
import GlobalMouseContextComponent from "./Events/MouseContextMenuEvent";
import GlobalMouseWheelComponent from "./Events/MouseWheelEvent";

function CallAllEvents(){
    return (<>
        <GlobalMouseMoveComponent/>
        <GlobalMouseClickComponent/>
        <GlobalMouseDownComponent/>
        <GlobalMouseUpComponent/>
        <GlobalMouseContextComponent/>
        <GlobalMouseWheelComponent/>
    </>)
}
export default CallAllEvents;