const Todoitem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="todoitem flex items-center gap-[20px] pb-[20px] border-b-[1px] border-solid border-[rgb(240,240,240)]">
      <input
        className="w-[20px]"
        type="checkbox"
        checked={isDone}
        readOnly
        onChange={onChangeCheckbox}
      />
      <div className="content flex-1">{content}</div>
      <div className="date text-[14px] text-slate-400">
        {new Date(date).toLocaleDateString()}
      </div>
      <button
        onClick={onClickDeleteButton}
        className="cursor-pointer text-slate-400 text-[14px] border-none p-[5px]"
      >
        삭제
      </button>
    </div>
  );
};
export default Todoitem;
