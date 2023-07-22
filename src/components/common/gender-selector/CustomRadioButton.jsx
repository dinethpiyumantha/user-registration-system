import React from 'react';

const CustomRadioButton = ({ field, form, label, ...rest }) => {
  return (
    <label>
      <input
        type="radio"
        {...field}
        {...rest}
        checked={field.value === rest.value}
        onChange={() => form.setFieldValue(field.name, rest.value)}
      />
      {label}
    </label>
  );
};

export default CustomRadioButton;
