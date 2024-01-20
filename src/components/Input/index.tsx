import React, {
  InputHTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  value?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

import { Eye, EyeOff } from 'lucide-react';
import * as S from './styles';

function Input({
  type = 'text',
  disabled = false,
  placeholder = '',
  label = 'Input label',
  value = '',
  onFocus,
  onBlur,
  onChange,
  ...props
}: InputProps) {
  const inputRef = useRef(null);
  const [labelShouldGoUp, setLabelShouldGoUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isPasswordField = useMemo(() => type === 'password', []);

  function handleFocus(evt: React.FocusEvent<HTMLInputElement>) {
    if (onFocus) onFocus(evt);
    setLabelShouldGoUp(true);
    setIsFocused(true);
  }

  useEffect(() => {
    if ((value?.trim() === '' || value == null) && !isFocused) {
      setLabelShouldGoUp(false);
    } else {
      setLabelShouldGoUp(true);
    }
  }, [value]);

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) onChange(evt);
  }

  function handleBlur(evt: React.FocusEvent<HTMLInputElement>) {
    if (onBlur) onBlur(evt);

    if (evt.target.value.trim() === '') {
      setIsFocused(false);
      setLabelShouldGoUp(false);
      inputRef.current.value = '';
    }
  }

  const togglePasswordVisibility = (evt) => {
    evt.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  const inputType = useMemo(() => {
    if (isPasswordField) {
      if (showPassword) {
        return 'text';
      }
      return 'password';
    }

    return type;
  }, [showPassword]);

  return (
    <S.Wrapper>
      <S.Input
        ref={inputRef}
        type={inputType}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        {...props}
      />

      <S.Label className="no-select" shouldGoUp={labelShouldGoUp}>
        {label}
      </S.Label>

      {isPasswordField && (
        <S.ButtonTogglePasswordVisibility
          onClick={togglePasswordVisibility}
          aria-hidden
          tabIndex={0}
        >
          {showPassword ? (
            <Eye size={24} color="#191307" />
          ) : (
            <EyeOff size={24} color="#191307" />
          )}
        </S.ButtonTogglePasswordVisibility>
      )}
    </S.Wrapper>
  );
}

export default Input;
