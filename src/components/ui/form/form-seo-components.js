import FormInputComponent from "./form-input-component";

const FormSeoComponents = ({
  formik,
  titleLabel,
  titleName,
  titleLength,
  titleValue,
  descriptionLabel,
  descriptionName,
  descriptionLength,
  descriptionValue,
  keywordsLabel,
  keywordsName,
  keywordsLength,
  keywordsValue,
  slugLabel,
  slugName,
  slugLength,
  slugValue,
}) => {
  return (
    <>
      <FormInputComponent
        label={titleLabel}
        name={titleName}
        formik={formik}
        length={titleLength}
        value={titleValue}
      />
      <FormInputComponent
        label={descriptionLabel}
        name={descriptionName}
        formik={formik}
        length={descriptionLength}
        value={descriptionValue}
      />
      <FormInputComponent
        label={keywordsLabel}
        name={keywordsName}
        formik={formik}
        length={keywordsLength}
        value={keywordsValue}
      />
      <FormInputComponent
        label={slugLabel}
        name={slugName}
        formik={formik}
        length={slugLength}
        value={slugValue}
      />
    </>
  );
};

export default FormSeoComponents;
