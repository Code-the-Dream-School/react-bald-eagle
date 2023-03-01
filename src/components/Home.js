import React from "react";
import style from "./Home.module.css";

const Home = ({ todoList, isLoading }) => {
  return (
    <div className={style.Box}>
      <div className={style.Container}>
        <span className={style.WelcomeTitle}>
          <h1>Welcome to my Todo App Project!</h1>
        </span>

        <div className={style.TodoCircleContainer}>
          <a href="/todoapp">
            <h1>Add</h1>
            <h1>Todo</h1>
          </a>
        </div>

        <div className={style.TitleLine}></div>

        {!isLoading && (
          <div className={style.TodoBgImg}>
            <ul className={style.Todos}>
              {todoList.map((todo) => (
                <li
                  key={todo.id}
                  className={todo.fields.IsComplete ? style.Complete : null}
                >
                  {todo.fields.Title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
