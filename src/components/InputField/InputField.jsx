import React, { useEffect, useState, useRef } from "react";

import InputMask from "react-input-mask";

import phoneMaskArray from "./phoneMaskArray.json";

import * as S from "./styled";

const InputField = (props) => {
  // const [placeholder, setPlaceholder] = useState("+55(##)#####-####");
  const [currentCountry, setCurrentCountry] = useState("");
  const [currentDDD, setCurrentDDD] = useState("+55");
  const [input, setInput] = useState("");
  const [inputField, setInputField] = useState("");
  const [inputMask, setInputMask] = useState("(99) 99999-9999");

  const handleCountryChange = (e) => {
    const valuesArr = e.target.value.split(","); //transforma a string em um array a partir da vírgula
    setInputField("");
    setCurrentDDD(valuesArr[0]);
    setInputMask(valuesArr[1]);
    setCurrentCountry(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    setInput(
      "+" + currentDDD.replace(/\D/g, "") + inputField.replace(/\D/g, "")
    );
  };

  // useEffect(() => {
  //   setInput(currentDDD + inputField.replace(/\D/g, ""));
  // }, [inputField]);

  return (
    <div>
      <S.FormContainer>
        <select value={currentCountry} onChange={handleCountryChange}>
          {phoneMaskArray.map((country, index) => (
            <option
              key={country.id}
              // value={[country.ddd]}
              value={[country.ddd, country.mask]}
              // value={[country.ddd, country.mask]}
            >
              {country.emoji} {country.initials} {country.ddd}
            </option>
          ))}
        </select>
        <InputMask
          mask={inputMask}
          value={inputField}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>submit</button>
      </S.FormContainer>
      <S.TrueInput>{"input resultante:"} {input}</S.TrueInput>
    </div>
  );
};

export default InputField;
