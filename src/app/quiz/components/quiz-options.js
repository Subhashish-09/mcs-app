import { Radio, RadioGroup, cn } from "@nextui-org/react";
import { useEffect } from "react";

const QuizOptions = ({
  options,
  questionNo,
  saveCheckedOption,
  checkedOption,
  responseValue,
}) => {
  useEffect(() => {
    saveCheckedOption(responseValue);
  }, [questionNo]);

  useEffect(() => {
    if (checkedOption !== responseValue) {
      saveCheckedOption(responseValue);
    }
  }, [questionNo, responseValue]);

  return (
    <div className="p-4">
      <RadioGroup value={checkedOption} onValueChange={saveCheckedOption}>
        {options.map((option, index) => (
          <Radio
            key={option}
            value={index + 1}
            classNames={{
              base: cn(
                "inline-flex m-0 bg-content1 hover:bg-content2 items-center",
                "flex-row max-w-full w-screen cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
                "data-[selected=true]:border-primary mb-4"
              ),
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: option }} />
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
};

export default QuizOptions;
