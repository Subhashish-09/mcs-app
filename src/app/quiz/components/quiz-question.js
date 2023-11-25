import { Card, CardBody } from "@nextui-org/react";

const QuizQuestion = ({ question_no, question }) => {
  return (
    <>
      <Card className="m-4 p-4">
        <CardBody>
          <p className="text-lg font-bold mb-4">Question No: {question_no}</p>
          <p dangerouslySetInnerHTML={{ __html: question }} />
        </CardBody>
      </Card>
    </>
  );
};

export default QuizQuestion;
