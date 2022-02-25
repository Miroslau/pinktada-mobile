import { useState, useEffect, useCallback } from 'react';

const useUserForm = (callback, validateErrors, callBackFunction) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((text, name) => {
    setUser({ ...user, [name]: text });
  }, [user]);

  const handleClear = () => {
    setUser({
      email: '',
      password: '',
    });
    callBackFunction();
  };

  const handleSubmit = useCallback(() => {
    setErrors(validateErrors(user));
    setIsSubmitting(true);
  }, [user]);

  const clearError = () => {
    setErrors({});
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback(user);
      }
    },
    [errors],
  );

  return {
    handleChange, handleSubmit, user, errors, clearError, handleClear,
  };
};

export default useUserForm;
