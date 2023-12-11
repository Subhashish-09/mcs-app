import { Button, CircularProgress } from "@nextui-org/react";

const SubmitButton = ({ isSaving }) => {
  return (
    <>
      {isSaving ? (
        <CircularProgress />
      ) : (
        <Button type={"submit"}>Submit</Button>
      )}
    </>
  );
};

export default SubmitButton;
