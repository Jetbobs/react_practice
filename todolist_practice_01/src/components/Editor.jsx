import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor flex gap-[10px] ">
      <input
        type="text"
        value={content}
        onChange={onChangeContent}
        className="rounded-[5px] p-[15px] border border-solid border-rgb[220,220,220] flex-1"
      />
      <button
        onClick={onSubmit}
        className="w-[80px] border-none bg-[rgb(37,147,255)] text-white rounded-[5px] cursor-pointer"
      >
        추가
      </button>
    </div>
  );
};

export default Editor;
