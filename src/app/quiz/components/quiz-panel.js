"use client";

import { useState } from "react";
import QuizNavigation from "./quiz-navigation";
import QuizOptions from "./quiz-options";
import QuizQuestion from "./quiz-question";
import { loadQuestion } from "../actions/quiz-functions";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import styles from "../styles/Quiz.module.css";
import QuizQuestionButtons from "./quiz-question-buttons";

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
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
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
        <div className="flex flex-nowrap flex-col gap-4 h-screen  col-span-8 p-4">
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
          <div className={styles["quizQuestionHeight"]}>
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
          <div
            className={
              styles["quizButtonsHeight"] + " p-5 border-2 border-blue-900"
            }
          >
            <QuizQuestionButtons
              currentSubject={currentSubject}
              loadQuestionByNumber={loadQuestionByNumber}
              questionButtons={questionButtons}
              questionNo={questionNo}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPanel;
