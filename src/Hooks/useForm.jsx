import React from 'react';

function useForm() {
  const [value, setValue] = React.useState('');

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    setValue,
  };
}

export default useForm;
