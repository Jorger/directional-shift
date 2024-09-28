import "./styles.css";
import { Arrival, Arrow, Line, Stopper } from "../uiGame";
import { useState } from "react";
import ImageUploader from "./imageLoader";
import { LINE_SIZE, STOPPER_SIZE } from "../../utils/constants";
// ARROW_SIZE

const TYPE_ELEMENTS = ["Arrow", "Line", "Arrival", "Stopper"];

interface RenderSelectElementsProps {
  disabled: boolean;
  handleAction: (action: string, type?: number, image?: string) => void;
}

const RenderSelectElements = ({
  disabled = false,
  handleAction,
}: RenderSelectElementsProps) => (
  <div className="editor-btns">
    <select onChange={(e) => handleAction("select", +e.target.value)}>
      <option value="-1">Select</option>
      {TYPE_ELEMENTS.map((type, index) => (
        <option key={index} value={index}>
          {type}
        </option>
      ))}
    </select>
    <button disabled={disabled} onClick={() => handleAction("add")}>
      Add
    </button>
    <button disabled={disabled} onClick={() => handleAction("remove")}>
      Remove
    </button>
    <button disabled={disabled} onClick={() => handleAction("clone")}>
      Clone
    </button>
    <ImageUploader handleImage={(image) => handleAction("image", 0, image)} />
  </div>
);

const Editor = () => {
  const [imageURL, setImageURL] = useState("");

  const handleAction = (action = "", type = 0, image = "") => {
    console.log({ action, type });

    if (action === "select" && type >= 0) {
      console.log(TYPE_ELEMENTS[type]);
    }

    if (action === "image") {
      setImageURL(image);
    }
  };

  return (
    <div className="editor">
      {imageURL !== "" && (
        <img className="editor-container-image" src={imageURL} alt="Base" />
      )}
      <RenderSelectElements handleAction={handleAction} disabled />

      <Line
        index={0}
        coordinate={{ x: 160, y: 317 }}
        height={LINE_SIZE}
        width={93}
        value={1}
        transform={{
          scale: "scaleX",
          origin: "left",
        }}
        isEditor
        isSelected
        onSelect={(value) => console.log({ value })}
      />

      <Line
        index={0}
        coordinate={{ x: 253, y: 317 }}
        height={93}
        width={LINE_SIZE}
        value={1}
        transform={{
          scale: "scaleY",
          origin: "top",
        }}
        isEditor
        isSelected
        onSelect={(value) => console.log({ value })}
      />

      <Stopper coordinate={{ x: 253 - STOPPER_SIZE / 3, y: 410 }} />

      <Arrow
        index={0}
        state="MOVEMENT"
        orientation="RIGHT"
        coordinate={{ x: 134, y: 293 }}
        onSelect={(value) => console.log({ value })}
        rotation={0}
      />

      <Arrival coordinate={{ x: 227, y: 293 }} isEditor />
    </div>
  );
};

export default Editor;
