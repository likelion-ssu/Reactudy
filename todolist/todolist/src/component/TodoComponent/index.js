import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { makeTodo, todoState } from "../../recoil";
import { BoxLayout, TodoLayout } from "./styles";
import "./todo.css";
const TodoComponent = ({ id, todo, isChecked, clickHandler }) => {
    return (
        <>
            <div
                style={{
                    width: "fit-content",
                    left: "0",
                    top: "0",
                }}
            >
                <TodoLayout>
                    <BoxLayout>
                        <input
                            type="checkbox"
                            id={id}
                            checked={isChecked}
                            onChange={clickHandler}
                        />
                        <label htmlFor={id}>
                            <div className="tick"></div>
                        </label>
                    </BoxLayout>
                    <BoxLayout>{todo.type}</BoxLayout>
                    <BoxLayout>{todo.content}</BoxLayout>
                </TodoLayout>
            </div>
        </>
    );
};

export default TodoComponent;
