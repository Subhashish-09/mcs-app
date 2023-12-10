import { Button } from "@nextui-org/react";
import Link from "next/link";

const PractiseAllQuestions = ({ questions, user }) => {
  if (user === "admin")
    return (
      <>
        {questions.map((question) => (
          <div>
            <p>Question No {question.question_no}</p>
            <p>{question.question}</p>
            <div>
              {Array.from(Array(question.options_length).keys()).map(
                (i, index) => (
                  <div
                    className={
                      index + 1 === question.correct_option["correct"] &&
                      "bg-green-500"
                    }
                    dangerouslySetInnerHTML={{
                      __html: question["option_" + Number(i + 1)],
                    }}
                  ></div>
                )
              )}
            </div>
          </div>
        ))}
      </>
    );
  else if (user === "instructor")
    return (
      <>
        {questions.map((question) => (
          <div>
            <p>Question No {question.question_no}</p>
            <p>{question.question}</p>
            <div>
              {Array.from(Array(question.options_length).keys()).map(
                (i, index) => (
                  <div
                    className={
                      index + 1 === question.correct_option["correct"] &&
                      "bg-green-500"
                    }
                    dangerouslySetInnerHTML={{
                      __html: question["option_" + Number(i + 1)],
                    }}
                  />
                )
              )}
            </div>
            <Button
              as={Link}
              href={
                "/instructor/practise/question?type=single-edit&qid=" +
                question.question_id +
                "&pid=" +
                question.practise_id
              }
            >
              Edit
            </Button>
          </div>
        ))}
      </>
    );
};

export default PractiseAllQuestions;
