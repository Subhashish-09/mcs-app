import PractiseContext from "../actions/practise-context";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";

const PractiseOptions = ({ questionNo, correct, options, solution }) => {
  const practiseCtx = useContext(PractiseContext);
  const [correctOption, setCorrectOption] = useState(0);
  const [isAttempted, setIsAttempted] = useState(
    questionNo in practiseCtx.questionResponse
  );
  const [attemptAnswer, setAttemptAnswer] = useState(
    practiseCtx.questionResponse[questionNo]
  );
  const [isCorrect, setIsCorrect] = useState(
    practiseCtx.questionResponse[questionNo] === correct
  );

  const [questionOptions, setQuestionOptions] = useState([]);
  const [questionSolution, setQuestionSolution] = useState();

  useEffect(() => {
    setQuestionOptions(options);
    setIsAttempted(questionNo in practiseCtx.questionResponse);
    setCorrectOption(correct);
    setQuestionSolution(solution);
  }, [questionNo, options, correct, solution]);

  const check = (id) => {
    setIsAttempted(true);
    setAttemptAnswer(id);
    if (+correctOption === +id) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    practiseCtx.saveQuestionResponses(questionNo, id);
  };
  return (
    <div className="m-4">
      {questionOptions.map((option, index) => (
        <Button
          color={"primary"}
          variant={"bordered"}
          key={index + 1}
          className="w-full normal-case my-1 mx-0 mb-3 shadow-[0_2px_4px_0_rgba(0,0,0,.08)] justify-start p-1.25 text-lg p-5 h-16"
          style={{
            whiteSpace: "unset",
            wordBreak: "break-all",
            height: "auto",
            color:
              (isAttempted &&
                isCorrect &&
                attemptAnswer === index + 1 &&
                "green") ||
              (isAttempted &&
                !isCorrect &&
                attemptAnswer === index + 1 &&
                "red") ||
              (isAttempted &&
                isCorrect &&
                +correctOption === +index + 1 &&
                "green") ||
              "black",
            border:
              (isAttempted &&
                isCorrect &&
                attemptAnswer === index + 1 &&
                "1px solid green") ||
              (isAttempted &&
                !isCorrect &&
                attemptAnswer === index + 1 &&
                "1px solid red") ||
              (isAttempted &&
                +correctOption === +index + 1 &&
                "1px solid green") ||
              "1px solid #e6e6e6",
          }}
          onPress={isAttempted ? null : check.bind(null, Number(index + 1))}
        >
          {option}
        </Button>
      ))}

      {isAttempted && (
        <Card
          className="my-2.5 mx-1.25 p-1.25"
          style={{
            border: isCorrect ? "1px solid green" : "1px solid red",
          }}
        >
          <CardBody>
            <p className="px-5 py-3 text-[#68c721]">Solution:</p>
            <p className="p-5">{questionSolution}</p>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default PractiseOptions;
