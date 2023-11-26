"use client";

import { useState, createContext } from "react";

const PractiseContext = createContext({
  currentQNo: 0,
  nextQuestion: (currentQ) => {},
  prevQuestion: (currentQ) => {},
  questionResponse: {},
  saveQuestionResponses: (currentQ, response) => {},
});

export const PractiseContextProvider = (props) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [questionResponses, setQuestionResponses] = useState({});

  const nextQuestionHandler = (currentQ) => {
    if (currentQ === 24) {
      return setCurrentQ(0);
    }
    setCurrentQ(currentQ + 1);
  };

  const previousQuestionHandler = (currentQ) => {
    if (currentQ === 0) {
      return;
    }
    setCurrentQ(currentQ - 1);
  };

  const questionResponseHandler = (currentQ, response) => {
    if (+currentQ in questionResponses === true) {
      return;
    }
    questionResponses[currentQ] = response;
    setQuestionResponses({
      ...questionResponses,
    });
  };

  return (
    <PractiseContext.Provider
      value={{
        currentQNo: currentQ,
        nextQuestion: nextQuestionHandler,
        prevQuestion: previousQuestionHandler,
        questionResponse: questionResponses,
        saveQuestionResponses: questionResponseHandler,
      }}
    >
      {props.children}
    </PractiseContext.Provider>
  );
};

export default PractiseContext;
