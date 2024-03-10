import { useState } from 'react';

const useControlledComponent = <T>(initialValue: T) => {
  console.log('initialValue: ', initialValue);
  const [value, setValue] = useState<T>(initialValue);

  const onChangeText = (newValue: T) => {
    setValue(newValue);
  };

  return {
    value,
    onChangeText,
  };
};

export default useControlledComponent;
