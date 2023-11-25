import { Button } from "@nextui-org/react";

const QuizNavigation = ({
  quizQBank,
  nextQuestion,
  previousQuestion,
  clearResponse,
}) => {
  return (
    <>
      <Button
        fullWidth
        type="button"
        disabled={quizQBank["question_no"] === 1}
        onClick={previousQuestion}
      >
        Previous
      </Button>

      <Button fullWidth type="button" onClick={clearResponse}>
        Reset
      </Button>

      <Button fullWidth type="button" onClick={nextQuestion}>
        Save&Next
      </Button>
    </>
  );
};

export default QuizNavigation;
