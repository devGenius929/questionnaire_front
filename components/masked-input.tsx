import React from 'react';

interface IMaskedInputProps {
  id: string;
  name: string;
  value: string;
  className: string;
  mask: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function clear(value: string): string {
  return value && value.replace(/[^0-9]/g, '');
}

function applyMask(value: string, mask: string): string {
  let result = '';

  let inc = 0;
  Array.from(value.substring(0, mask.length)).forEach((letter, index) => {
    if (mask[index + inc]) {
      if (!mask[index + inc].match(/[0-9]/)) {
        result += mask[index + inc];
        inc++;
      }
      result += letter;
    }
  });
  return result;
}

export default function MaskedInput({
  id,
  mask,
  name,
  className,
  value,
  onChange,
  placeholder,
  type,
}: IMaskedInputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type ?? 'text'}
      className={className}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        let value = clear(e.target.value);
        const nextLength = value.length;
        if (nextLength > mask.length) return;
        value = applyMask(value, mask);
        e.target.value = value;
        onChange(e);
      }}
    />
  );
}
