import React from 'react';

interface InputProps {
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

import * as S from './styles';

function Input({
  type = 'text',
  disabled = false,
  placeholder = '',
  label = 'Input label',
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  function handleFocus() {
    if (onFocus) onFocus();
  }

  function handleBlur() {
    if (onBlur) onBlur();
  }

  return (
    <S.Wrapper>
      <S.Input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />

      <S.Label className="no-select">{label}</S.Label>
    </S.Wrapper>
  );
}

export default Input;
