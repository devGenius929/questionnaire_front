import React, { ChangeEvent } from 'react';
import { SelectionOption } from '../typing';

export interface ISelectionProps {
  label: string;
  value: string;
  options: SelectionOption[];
  className?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Selection({
  label,
  value,
  options,
  className,
  onChange,
}: ISelectionProps) {
  return (
    <div className={className ? className : 'formcel1col'}>
      <label>{label}</label>
      <select
        id="dadosbasicos-titular-naturezaocupacao"
        name="campo-983"
        value={value}
        onChange={onChange}
        className="slct"
      >
        {options.map((op) => (
          <option key={op.id} value={op.id}>
            {op.value}
          </option>
        ))}
      </select>
    </div>
  );
}
