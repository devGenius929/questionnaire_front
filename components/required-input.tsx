import React, { useState } from 'react';
import MaskedInput from './masked-input';
import isBlank from '../utils/blank';

interface IRequiredInputProps {
  id: string;
  name: string;
  value: string;
  className: string;
  label?: string;
  mask?: string;
  placeholder?: string;
  validation?: (value: string) => boolean;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function validate(value: string, validation?: (x: string) => boolean): boolean {
  // does not validate server side.
  if (typeof validation === 'undefined') return !isBlank(value);

  return validation(value);
}

export default function RequiredInput({
  id,
  name,
  className,
  value,
  label,
  mask,
  validation,
  onChange,
  placeholder,
  type,
}: IRequiredInputProps) {
  const [valid, setValid] = useState(validate(value, validation));

  return (
    <div className="formcel1col">
      {label && (
        <label className={valid ? className : className + ' error'}>
          {label}
        </label>
      )}
      {!mask?.trim() && (
        <input
          id={id}
          name={name}
          type={type ?? 'text'}
          className={valid ? `${className}` : `${className} error`}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            setValid(validate(e.target.value, validation));
            onChange(e);
          }}
        />
      )}
      {mask && (
        <MaskedInput
          id={id}
          name={name}
          type={type ?? 'text'}
          className={valid ? `${className}` : `${className} error`}
          value={value}
          mask={mask}
          placeholder={placeholder}
          onChange={(e) => {
            setValid(validate(e.target.value, validation));
            onChange(e);
          }}
        />
      )}
    </div>
  );
}
