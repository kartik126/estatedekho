import { ChangeEvent, FormEvent, useState } from 'react';

export const validateFormRules = (data, validations) => {
  let valid = true;
  const newErrors = {};
  for (const key in validations) {
    const value = data[key];
    const validation = validations[key];
    const errorFieldKey = validation?.errorFieldKey || key;

    // Required
    if (validation?.required?.value && !value) {
      valid = false;
      newErrors[errorFieldKey] = validation?.required?.message;
    }

    // Pattern
    const pattern = validation?.pattern;
    if (
      !newErrors[errorFieldKey] &&
      pattern?.value &&
      !RegExp(pattern.value).test(value)
    ) {
      valid = false;
      newErrors[errorFieldKey] =
        typeof pattern.message === 'function'
          ? pattern.message(value, data)
          : pattern.message;
    }

    // Custom
    const custom = validation?.custom;
    if (
      !newErrors[errorFieldKey] &&
      custom?.isValid &&
      !custom.isValid(value, data)
    ) {
      valid = false;
      newErrors[errorFieldKey] =
        typeof custom.message === 'function'
          ? custom.message(value, data)
          : custom.message;
    }
  }
  return {
    valid,
    errors: newErrors,
  };
};

export const useForm = (options) => {
  const [data, setData] = useState < Partial >>> (options?.initialValues || {});
  const [errors, setErrors] = useState > {};

  const preFillFormData = (values) => {
    setData({
      ...options.initialValues,
      ...values,
    });
  };

  const setFieldErrors = (key, value) => {
    setErrors((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const validateFieldOnChange = (key, changedData) => {
    const { errors } = validateFormRules(changedData, options?.validations);
    const updateErrors = { [key]: errors[key] };
    // clear those errors which have been resolved
    Object.keys(options?.validations || {})
      .filter((fieldKey) => !errors[fieldKey])
      .forEach((fieldKey) => {
        updateErrors[fieldKey] = '';
      });
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...updateErrors,
    }));
  };

  // Needs to extend unknown so we can add a generic to an arrow function
  const handleChange = (key, sanitizeFn) => (e) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    const change = {
      ...data,
      [key]: value,
    };
    setData(change);
    if (options?.validateFieldOnKeyStorke) {
      validateFieldOnChange(key, change);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validations = options?.validations;
    if (validations) {
      const { valid, errors } = validateFormRules(data, validations);
      if (!valid) {
        setErrors(errors);
        return;
      }
    }
    setErrors({});
    if (options?.onSubmit) {
      options.onSubmit();
    }
  };

  const resetForm = () => {
    setData(options?.initialValues || {});
    setErrors({});
  };

  return {
    data,
    preFillFormData,
    setFieldErrors,
    handleChange,
    handleSubmit,
    resetForm,
    errors,
  };
};
