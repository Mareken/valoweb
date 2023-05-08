import React, { InputHTMLAttributes, useState, useRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

import * as S from './styles';

function Input({
  type = 'text',
  disabled = false,
  placeholder = '',
  label = 'Input label',
  onFocus,
  onBlur,
	onChange,
  ...props
}: InputProps) {
	const [labelShouldGoUp, setLabelShouldGoUp] = useState(false);
	const inputRef = useRef(null);

 	function handleFocus(evt: React.FocusEvent<HTMLInputElement>) {
    if (onFocus) onFocus(evt);

		setLabelShouldGoUp(true);
  }

	function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
		if (onChange) onChange(evt);
	}

  function handleBlur(evt: React.FocusEvent<HTMLInputElement>) {
    if (onBlur) onBlur(evt);

		if (evt.target.value.trim() === '') {
			setLabelShouldGoUp(false);

			inputRef.current.value = '';
		}
  }

  return (
    <S.Wrapper>
      <S.Input
				ref={inputRef}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={handleFocus}
				onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />

      <S.Label className="no-select" shouldGoUp={labelShouldGoUp}>{label}</S.Label>
    </S.Wrapper>
  );
}

export default Input;
