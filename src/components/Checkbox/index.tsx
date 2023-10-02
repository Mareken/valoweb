import React from 'react';
import * as S from './styles';

interface ICheckbox {
  id: string;
  label?: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Checkbox({
  id,
  label = 'Checkbox label',
  checked = false,
  onChange = () => {}
}: ICheckbox) {
  return (
    <S.Checkbox htmlFor={id} tabIndex={0}>
      <S.CheckboxInput
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <S.CheckboxBox />
      {label && <S.CheckboxLabel>{label}</S.CheckboxLabel>}
    </S.Checkbox>
  );
}

export default Checkbox;
