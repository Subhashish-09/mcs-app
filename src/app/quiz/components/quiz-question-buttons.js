import { Button } from "@nextui-org/react";

const QuizQuestionButtons = ({
  questionButtons,
  currentSubject,
  questionNo,
  loadQuestionByNumber,
}) => {
  return (
    <div className="grid grid-cols-5 gap-3">
      {questionButtons
        .filter((e) => e["question_sub_category"] === currentSubject)
        .map((e) => (
          <Button
            size="sm"
            id={"QNO_" + e["question_no"]}
            color={e["question_no"] === questionNo ? "primary" : "default"}
            onClick={() => loadQuestionByNumber(e["question_no"])}
          >
            {e["question_no"]}
          </Button>
        ))}
    </div>
  );
};

export default QuizQuestionButtons;
