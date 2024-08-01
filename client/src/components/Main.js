import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";
import { Navigate } from "react-router-dom";
import "../styles/Main.css";
import Menu from "./Years";
export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz() {
    return <Navigate to={"/"} replace={true}></Navigate>;
  }

  return (
    <div className="container">
      <Menu />
    </div>
  );
}
