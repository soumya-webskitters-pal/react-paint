import CreateColorPallet from "./createColorPallet";
import CreateDrawingBox from "./CreateDrawingBox";
import BrushInfo from "./BrushInfo";
import CreateResetCanvas from "./CreateResetCanvas";
import CreateSaveAs from "./CreateSaveAs";
import CreateTips from "./CreateTips";
import CreatePointer from "./CreatePointer";
import CallAllEvents from "./CallEvents";

function CreateTools() {
  return (<>
    <CreateColorPallet/>
    <CreateDrawingBox/>
    <BrushInfo/>
    <CreateResetCanvas/>
    <CreateSaveAs/>
    <CreateTips/>
    <CreatePointer/>
    <CallAllEvents/>
  </>)
}
export default CreateTools;
