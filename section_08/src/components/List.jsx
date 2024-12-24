import "./List.scss";
import Todoitem from "./Todoitem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredTodos = getFilteredData();
  return (
    <div className="list">
      <h4>Todo List 👍</h4>
      <input
        onChange={onChangeSearch}
        type="text"
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <Todoitem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            ></Todoitem>
          );
        })}
      </div>
    </div>
  );
};

export default List;
