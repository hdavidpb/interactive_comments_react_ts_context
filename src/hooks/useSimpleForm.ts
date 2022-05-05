import React, { useState } from "react";

const useSimpleForm = () => {
  const [formValues, setFormValues] = useState({
    textArea: "",
  });

  const handleFormValues = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleClearValues = () => {
    setFormValues({ textArea: "" });
  };

  return {
    formValues,
    handleFormValues,
    handleClearValues,
  };
};

export default useSimpleForm;
