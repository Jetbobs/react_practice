const Editor = () => {
  return (
    <div className="Editor flex gap-[10px] ">
      <input
        type="text"
        className="rounded-[5px] p-[15px] border border-solid border-rgb[220,220,220] flex-1"
      />
      <button className="w-[80px] border-none bg-[rgb(37,147,255)] text-white rounded-[5px] cursor-pointer">
        추가
      </button>
    </div>
  );
};

export default Editor;
