import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({ });
  const [loading, setLoading] = useState(false);

  const onChangeInput = (e) => {
    const auxValues = { ...values };
    auxValues[e.target.name] = e.target.value;
    setValues(auxValues);
  };

  const enviaMail = callback => e => {
    e.preventDefault();
    setLoading(true);
    callback();
    setLoading(false);
  };

  return [{ values, loading }, onChangeInput, enviaMail];
};

export default useForm;
