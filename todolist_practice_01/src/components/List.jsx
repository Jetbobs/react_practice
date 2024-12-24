import Todoitem from "./Todoitem";

const List = () => {
  return (
    <div className="List flex flex-col gap-[20px]">
      <h4>Todo List</h4>
      <input
        className="w-[100%] py-[15px] px-[0px] border-b-[1px] border-[rgb(220,220,220)] focus:outline-none focus:border-b-[1px] focus: border-solid focus:border-[rgb(37,147,255)]"
        placeholder="검색어를 입력해주세요"
        type="text"
      />
      <div className="todos_wrapper flex flex-col gap-[20px]">
        <Todoitem></Todoitem>
      </div>
    </div>
  );
};

export default List;
