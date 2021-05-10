import React from 'react';

interface IDateInputProps {
  id: string;
  name: string;
  value: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DATE = '99/99/9999';

function clear(value: string): string {
  return value && value.replace(/[^0-9]/g, '');
}

function applyMask(value: string, mask: string): string {
  let result = '';

  let inc = 0;
  Array.from(value.substring(0, DATE.length)).forEach((letter, index) => {
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

export default function DateInput({
  id,
  name,
  className,
  value,
  onChange,
}: IDateInputProps) {
  return (
    <input
      id={id}
      name={name}
      type="text"
      className={className}
      value={value}
      onChange={(e) => {
        let value = clear(e.target.value);
        const nextLength = value.length;
        if (nextLength > DATE.length) return;
        value = applyMask(value, DATE);
        e.target.value = value;
        onChange(e);
      }}
    />
  );
}
