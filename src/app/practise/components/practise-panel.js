"use client";

import { useContext, useEffect, useState } from "react";
import PractiseContext, {
  PractiseContextProvider,
} from "../actions/practise-context";
import PractiseOptions from "./practise-options";
import PractiseQuestion from "./practise-question";
import PractiseNavigation from "./practise-navigation";

const PractisePanel = ({ questions, practise }) => {
  return (
    <PractiseContextProvider>
      <PractiseWithProvider questions={questions} practise={practise} />
    </PractiseContextProvider>
  );
};

export default PractisePanel;

const PractiseWithProvider = ({ questions, practise }) => {
  const [Questions, setQuestions] = useState(questions);
  const practiseCtx = useContext(PractiseContext);
  const [activeQuestion, setActiveQuestion] = useState(
    Questions[practiseCtx.currentQNo]
  );
  const [questionNo, setQNo] = useState(practiseCtx.currentQNo);

  useEffect(() => {
    setQNo(practiseCtx.currentQNo);
    setActiveQuestion(Questions[practiseCtx.currentQNo]);
  }, [practiseCtx.currentQNo]);

  return (
    <div className="md:grid md:grid-cols-12">
      <div className="col-span-2 h-screen"></div>
      <div className="flex flex-nowrap flex-col gap-4 h-screen  col-span-8 p-4">
        <div className="practiseQuestionHeight">
          <PractiseQuestion
            question_no={activeQuestion["question_no"]}
            question={activeQuestion["question"]}
          />

          <PractiseOptions
            questionNo={questionNo}
            correct={activeQuestion["correct_option"]["correct"]}
            options={Array.from(
              Array(activeQuestion.options_length).keys()
            ).map((i) => activeQuestion["option_" + Number(i + 1)])}
            solution={
              activeQuestion["question_solution"] === "undefined"
                ? activeQuestion[
                    "option_" +
                      Number(activeQuestion["correct_option"]["correct"])
                  ]
                : activeQuestion["question_solution"]
            }
          />
        </div>
        <PractiseNavigation questionNo={questionNo} />
      </div>
      <div className="col-span-2 h-screen"></div>
    </div>
  );
};
