import React from 'react';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { Person } from '../typing';

export interface ISelectionProps {
  value?: string;
  className?: string;
  onChange: (person: Person) => void;
}

export default function SelectPerson({
  value,
  className,
  onChange,
}: ISelectionProps) {
  const declarant = useSelector((state) => state.declarant);
  const familyMembers = [declarant];

  const dependants = useSelector((state) => state.declarant.dependants);
  if (dependants) {
    for (const person of dependants) {
      familyMembers.push(person);
    }
  }

  const partner = useSelector((state) => state.partner);
  if (partner) {
    familyMembers.push(partner);
  }

  const options = familyMembers.map((person) => ({
    value: person.uuid,
    label: person.nickName ?? person.name,
  }));

  const person = familyMembers.find((p) => p.uuid === value);
  const currentValue = person
    ? { value: person.uuid, label: person.nickName ?? person.name }
    : null;

  return (
    <Select
      name="personUuid"
      value={currentValue}
      onChange={(person) => {
        const selected = familyMembers.find((p) => person.value === p.uuid);
        onChange(selected);
      }}
      className="slct Nucleo ctb required"
      options={options}
    />
  );
}
