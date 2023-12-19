import React, { useEffect } from "react";
import Settings from "./DefaultSetting";
import CreateColorPallet from "./createColorPallet";
import CreateDrawingBox from "./CreateDrawingBox";
import BrushInfo from "./BrushInfo";
import CreateResetCanvas from "./CreateResetCanvas";
import CreateSaveAs from "./CreateSaveAs";
import CreateTips from "./CreateTips";
import DrawPointer from "./CreatePointer";

function CreateTools() {
  return <><CreateColorPallet/><CreateDrawingBox/><BrushInfo/><CreateResetCanvas/><CreateSaveAs/><CreateTips/><DrawPointer/></>
}

export default CreateTools;
