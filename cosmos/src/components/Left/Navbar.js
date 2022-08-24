import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import Ana from "./Ana";
import Kayıt from "./Kayıt";
import Ozet from "./Ozet";
import Analiz from "./Analiz";
import Analiz2 from "./Analiz2";

export const Navbar = () => {
  const [isShown, setIsShown] = useState(true);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);

  const handleClick = (event) => {
    setIsShown(true);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);
  };
  const handleClick2 = (event) => {
    setIsShown2(true);
    setIsShown(false);
    setIsShown3(false);
    setIsShown4(false);
  };
  const handleClick3 = (event) => {
    setIsShown3(true);
    setIsShown2(false);
    setIsShown(false);
    setIsShown4(false);
  };
  const handleClick4 = (event) => {
    setIsShown4(true);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown(false);
  };

  return (
    <div>
      <div class="menu">
        <button
          class="btn"
          onClick={handleClick}
          style={{
            backgroundColor: isShown ? "dodgerblue" : "",
            color: isShown ? "white" : "",
            borderColor: isShown ? "transparent" : ""
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-house-door-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
          </svg>
          ANA
        </button>

        <button
          class="btn"
          onClick={handleClick2}
          style={{
            backgroundColor: isShown2 ? "dodgerblue" : "",
            color: isShown2 ? "white" : "",
            borderColor: isShown2 ? "transparent" : ""
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-columns-gap"
            viewBox="0 0 16 16"
          >
            <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
          </svg>
          ÖZET
        </button>

        <button
          class="btn"
          onClick={handleClick3}
          style={{
            backgroundColor: isShown3 ? "dodgerblue" : "",
            color: isShown3 ? "white" : "",
            borderColor: isShown3 ? "transparent" : ""
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-list-check"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
            />
          </svg>
          KAYIT
        </button>
        <button
          class="btn"
          onClick={handleClick4}
          style={{
            backgroundColor: isShown4 ? "dodgerblue" : "",
            color: isShown4 ? "white" : "",
            borderColor: isShown4 ? "transparent" : ""
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-bar-chart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
          </svg>
          ANALİZ
        </button>
      </div>

      {isShown ? (
        <Ana />
      ) : isShown2 ? (
        <Ozet />
      ) : isShown3 ? (
        <Kayıt />
      ) : isShown4 ? (
        <Analiz2 /> /*two design in here, 'Analiz' and 'Analiz2' */
      ) : null}
    </div>
  );
};

export default Navbar;
