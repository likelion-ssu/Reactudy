import React, { useState, useEffect } from "react";
import Tab from "../Tab";
import AddButton from "../AddButton";
import { ListLayout, StyledLayout } from "./styles";
import CreateComponent from "../CreateComponent";
import { useRecoilState, useRecoilValue } from "recoil";
import {
    makeTodo,
    todaySelector,
    todoState,
    todoTabState,
    weekSelector,
} from "../../recoil";
import TodoComponent from "../TodoComponent";

const ListComponent = () => {
    const [tabState, setTabState] = useRecoilState(todoTabState);
    const [createState, setCreateState] = useState(false);
    const [todos, setTodos] = useRecoilState(todoState);
    const todays = useRecoilValue(todaySelector);
    const weeks = useRecoilValue(weekSelector);

    let content = "";
    let type = "";
    const onClickAdd = () => {
        if (createState && type !== "" && content !== "") {
            const todo = makeTodo(
                todos.length,
                content,
                tabState === "Today",
                type,
                false
            );
            const newTodo = Object.assign([], todos);
            newTodo.push(todo);
            setTodos(newTodo);
            setCreateState((prev) => !prev);
        } else {
            if (createState) alert("입력내용을 확인해주세요!");
        }
        if (!createState) setCreateState((prev) => !prev);
    };

    useEffect(() => {}, [todos]);

    const getTodoData = (content_, type_) => {
        content = content_;
        type = type_;
    };

    const onChangeInput = (e) => {
        const todoId = e.target.id;
        const newTodo = Object.assign([], todos);
        newTodo[todoId] = makeTodo(
            todos[todoId].id,
            todos[todoId].content,
            tabState === "Today",
            todos[todoId].type,
            !todos[todoId].isDone
        );
        setTodos(newTodo);
    };

    return (
        <ListLayout>
            <Tab></Tab>
            <StyledLayout>
                <CreateComponent
                    isVisible={createState}
                    addHandler={getTodoData}
                />
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "1rem",
                        top: "8rem",
                    }}
                >
                    {createState
                        ? null
                        : tabState === "Today"
                        ? todays.map((t, index) => {
                              return (
                                  <TodoComponent
                                      key={index}
                                      id={t.id}
                                      todo={t}
                                      isChecked={t.isDone}
                                      clickHandler={onChangeInput}
                                  ></TodoComponent>
                              );
                          })
                        : weeks.map((t, index) => {
                              return (
                                  <TodoComponent
                                      key={index}
                                      id={t.id}
                                      todo={t}
                                      isChecked={t.isDone}
                                      clickHandler={onChangeInput}
                                  ></TodoComponent>
                              );
                          })}
                </div>
            </StyledLayout>
            <AddButton onClick={onClickAdd} />
        </ListLayout>
    );
};

export default ListComponent;
