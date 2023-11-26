import { useContext } from "react";
import PractiseContext from "../actions/practise-context";
import { Button } from "@nextui-org/react";

const PractiseNavigation = ({ questionNo }) => {
  const practiseCtx = useContext(PractiseContext);
  return (
    <div className="bottom-0 mt-5 mx-5 pb-4.5 flex flex-wrap justify-between px-5">
      <Button
        onPress={() => {
          practiseCtx.prevQuestion(questionNo);
        }}
      >
        Previous
      </Button>
      <Button
        onClick={() => {
          practiseCtx.nextQuestion(questionNo);
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default PractiseNavigation;
