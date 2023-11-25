"use client";

import { useState } from "react";
import QuizNavigation from "./quiz-navigation";
import QuizOptions from "./quiz-options";
import QuizQuestion from "./quiz-question";
import { loadQuestion } from "../actions/quiz-functions";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const QuizPanel = ({ quizQBank, quiz, questionButtons, quizSubjects }) => {
  const [question, setQuestion] = useState(quizQBank);
  const [questionNo, setQuestionNo] = useState(quizQBank["questionNo"]);
  const [quizId, setQuizId] = useState(quiz["quiz_id"]);
  const [currentSubject, setCurrentSubject] = useState(quizSubjects[0]["name"]);
  const [checkedOption, setCheckedOption] = useState(0);
  const [responseValue, setResponseValue] = useState(0);

  const nextQuestion = async () => {
    const nextQuestionNo = questionNo === 100 ? 1 : questionNo + 1;
    setQuestionNo(nextQuestionNo);
    document
      .getElementById("QNO_" + nextQuestionNo)
      ?.scrollIntoView({ behavior: "smooth", block: "top" });
    const question = await loadQuestion(nextQuestionNo, quizId);
    setQuestion(question);
    setCurrentSubject(question["subject"]);
  };

  const previousQuestion = async () => {
    const previousQuestionNo = questionNo === 1 ? 1 : questionNo - 1;
    setQuestionNo(previousQuestionNo);
    const question = await loadQuestion(previousQuestionNo, quizId);
    setQuestion(question);
    setCurrentSubject(question["subject"]);
  };

  const loadQuestionBySubject = async (subject_name, question_no) => {
    setCurrentSubject(subject_name);
    setQuestionNo(question_no);
    const question = await loadQuestion(question_no, quizId);
    setQuestion(question);
  };

  const loadQuestionByNumber = async (question_no) => {
    setQuestionNo(question_no);
    const question = await loadQuestion(question_no, quizId);
    setQuestion(question);
    setCurrentSubject(question["subject"]);
  };

  const saveCheckedOption = (value) => {
    setCheckedOption(value);
  };

  const clearResponse = () => {
    if (checkedOption === 0) {
      return;
    }
    setCheckedOption([]);
  };

  return (
    <>
      <div className="md:grid md:grid-cols-12 gap-3 px-4">
        <div className="flex flex-nowrap flex-col gap-4 h-screen bg-[#e9e9e9] col-span-8 p-4">
          <div className="h-16 flex justify-between">
            <Image
              src={"https://via.placeholder.com/200x65"}
              width={200}
              height={65}
            />
            <Image
              src={
                "https://www.wpbeginner.com/wp-content/uploads/2020/02/evergreen-countdown-timer-example.png"
              }
              width={200}
              height={65}
            />
          </div>
          <div className="flex justify-center gap-5">
            {quizSubjects.map((subject) => (
              <Button
                fullWidth
                color={
                  subject["name"] === currentSubject ? "primary" : "secondary"
                }
                onClick={() =>
                  loadQuestionBySubject(
                    subject["name"],
                    subject["initialQuestionNo"]
                  )
                }
              >
                {subject["name"]}
              </Button>
            ))}
          </div>
          <div className="quizQuestionHeight">
            <QuizQuestion
              question_no={question["questionNo"]}
              question={question["question"]}
            />
            <QuizOptions
              options={question["options"]}
              questionNo={questionNo}
              checkedOption={checkedOption}
              responseValue={responseValue}
              saveCheckedOption={saveCheckedOption}
            />
          </div>
          <div className="flex gap-5 justify-center">
            <QuizNavigation
              quizQBank={question}
              nextQuestion={nextQuestion}
              previousQuestion={previousQuestion}
              clearResponse={clearResponse}
            />
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-3 pt-4 h-screen">
          <div className="h-12 justify-between flex">
            <div></div>
            <Button variant="bordered" color="success" size="lg">
              Submit
            </Button>
          </div>
          <div className="quizButtonsHeight p-5 border-2 border-blue-900">
            <div className="grid grid-cols-5 gap-3">
              {questionButtons
                .filter((e) => e["question_sub_category"] === currentSubject)
                .map((e) => (
                  <Button
                    size="sm"
                    id={"QNO_" + e["question_no"]}
                    color={
                      e["question_no"] === questionNo ? "primary" : "default"
                    }
                    onClick={() => loadQuestionByNumber(e["question_no"])}
                  >
                    {e["question_no"]}
                  </Button>
                ))}
            </div>
          </div>
          <div className="h-56 mb-5 p-5 border-2 border-blue-900">
            <div className="pb-5 text-xl">
              <p>{currentSubject} Overview</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button disabled color={"primary"}>
                X Attempted
              </Button>
              <Button disabled color={"primary"}>
                X Visited
              </Button>
              <Button disabled color={"primary"}>
                X Unseen
              </Button>
              <Button disabled color={"primary"}>
                X Skipped
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPanel;
