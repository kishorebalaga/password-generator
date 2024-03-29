import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  passwordGenerator,
  lowercaseChange,
  upperCaseChange,
  numbersChange,
  specialCharChange,
  setPassWordLength,
  setCopyText,
} from "./passwordSlice";
import password from "../../assets/gif/password.gif";
import restart from "../../assets/icons/refresh.svg";
import copy from "../../assets/icons/copy.svg";
import CheckBox from "../checkbox/Checkbox";

const PasswordGen = () => {
  //const [passwordLength, setPassWordLength] = useState();

  const passwordNewlyGenerated = useSelector(
    (state) => state?.password?.passwordNew
  );
  const lowerCaseChecked = useSelector((state) => state?.password?.lowercase);

  const upperCaseChecked = useSelector((state) => state?.password?.uppercase);

  const numbersChecked = useSelector((state) => state?.password?.numbers);
  const copyText = useSelector((state) => state?.password?.copy);

  const specialCharChecked = useSelector(
    (state) => state?.password?.specialChar
  );

  const passwordLength = useSelector(
    (state) => state?.password?.passwordLength
  );

  const dispatch = useDispatch();

  function log(value) {
    dispatch(setPassWordLength(value));
  }

  useEffect(() => {
    dispatch(upperCaseChange());
    dispatch(lowercaseChange());
    dispatch(numbersChange());
    dispatch(specialCharChange());
    dispatch(passwordGenerator());
  }, []);

  return (
    <div className=" flex flex-col my-auto justify-center items-center h-screen">
      <div className=" w-[1/3] bg-white flex flex-col justify-center items-center rounded-2xl p-10">
        <img
          src={password}
          alt="password gif"
          className=" object-fill h-32 w-32"
        />
        <div className="font-bold text-2xl">PASSWORD GENERATOR</div>
        <div>
          Ensure online account safety by creating strong and secure passwords
        </div>
        <div className=" flex flex-row mt-2 w-full">
          <div className="flex flex-row justify-between border-solid border-[1px] border-zinc-950 rounded-xl p-2 w-full">
            <div>
              <input
                type="text"
                placeholder="password generator"
                className=" outline-none h-full w-80"
                value={passwordNewlyGenerated}
              />
            </div>
            <div>
              <button
                onClick={() => {
                  dispatch(passwordGenerator());
                  dispatch(setCopyText("Copy"));
                }}
              >
                {" "}
                <img src={restart} />
              </button>
            </div>
          </div>
          <div className=" flex flex-row border-solid border-[1px] items-center border-zinc-950 rounded-2xl p-2 ml-2 bg-[#33cccc]">
            <div>
              <img src={copy} alt="Copy" className=" h-8 w-8 pr-[1px]" />
            </div>
            <div
              onClick={() => {
                navigator.clipboard.writeText(passwordNewlyGenerated);
                dispatch(setCopyText("Copied"));
              }}
            >
              <button>{copyText}</button>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start w-full mt-8">
          <div>Password Length:</div>&nbsp;
          <div>{passwordLength}</div>
        </div>
        <div className="flex flex-row w-full mt-8 mb-8">
          <Slider
            max={30}
            step={1}
            onChange={log}
            trackStyle={{
              backgroundColor: "#33cccc",
              height: 10,
            }}
            railStyle={{
              height: 10,
              border: "solid 1px black",
              backgroundColor: "white",
            }}
            handleStyle={{
              borderColor: "black",
              height: 20,
              width: 20,
              backgroundColor: "#33cccc",
              opacity: "1",
              borderWidth: "1px",
            }}
            value={passwordLength}
          />
        </div>
        <CheckBox
          name="Uppercase"
          onChange={() => {
            dispatch(upperCaseChange());
          }}
          id={"uppercase"}
          checked={upperCaseChecked}
        />
        <CheckBox
          name="Lowercase"
          onChange={() => {
            dispatch(lowercaseChange());
          }}
          id={"lowercase"}
          checked={lowerCaseChecked}
        />
        <CheckBox
          name="Numbers"
          onChange={() => {
            dispatch(numbersChange());
          }}
          checked={numbersChecked}
          id={"numbers"}
        />
        <CheckBox
          name="Special Characters"
          onChange={() => {
            dispatch(specialCharChange());
          }}
          id={"specialchar"}
          checked={specialCharChecked}
        />
      </div>
    </div>
  );
};

export default PasswordGen;
