const Todoitem = () => {
  return (
    <div className="todoitem flex items-center gap-[20px] pb-[20px] border-b-[1px] border-solid border-[rgb(240,240,240)]">
      <input className="w-[20px]" type="checkbox" />
      <div className="content flex-1">{"test"}</div>
      <div className="date text-[14px] text-slate-400">
        {new Date().toLocaleDateString()}
      </div>
      <button className="cursor-pointer text-slate-400 text-[14px] border-none p-[5px]">
        삭제
      </button>
    </div>
  );
};
export default Todoitem;
