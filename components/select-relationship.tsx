import React from 'react';
import Select from 'react-select';
import { useIntl } from 'react-intl';

interface RelationshipOption {
  label: string;
  value: string;
}
export interface ISelectionProps {
  value?: string;
  className?: string;
  onChange: (option: RelationshipOption, isPartner: boolean) => void;
}

export default function SelectRelationship({
  value,
  className,
  onChange,
}: ISelectionProps) {
  const intl = useIntl();
  const options = [
    {
      label: intl.formatMessage({ id: 'family.relationship-11-1' }),
      value:
        '11 - Companheiro(a) com o(a) qual o(a) contribuinte tenha filho ou viva há mais de 5 (cinco) anos, ou cônjuge.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-11-2' }),
      value:
        '11 - Companheiro(a) com o(a) qual o(a) contribuinte tenha filho ou viva há mais de 5 (cinco) anos, ou cônjuge.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-11-3' }),
      value:
        '11 - Companheiro(a) com o(a) qual o(a) contribuinte tenha filho ou viva há mais de 5 (cinco) anos, ou cônjuge.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-11-4' }),
      value:
        '11 - Companheiro(a) com o(a) qual o(a) contribuinte tenha filho ou viva há mais de 5 (cinco) anos, ou cônjuge.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-21-1' }),
      value: '21 - Filho(a) ou enteado(a) até 21 (vinte e um) anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-21-2' }),
      value: '21 - Filho(a) ou enteado(a) até 21 (vinte e um) anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-22-1' }),
      value:
        '22 - Filho(a) ou enteado(a) cursando estabelecimento de nível superior ou escola técnica de 2º grau, até 24 (vinte e quatro) anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-22-2' }),
      value:
        '22 - Filho(a) ou enteado(a) cursando estabelecimento de nível superior ou escola técnica de 2º grau, até 24 (vinte e quatro) anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-22-3' }),
      value:
        '22 - Filho(a) ou enteado(a) cursando estabelecimento de nível superior ou escola técnica de 2º grau, até 24 (vinte e quatro) anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-22-4' }),
      value:
        '22 - Filho(a) ou enteado(a) cursando estabelecimento de nível superior ou escola técnica de 2º grau, até 24 (vinte e quatro) anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-23-1' }),
      value:
        '23 - Filho(a) ou enteado(a) em qualquer idade, quando incapacitado física e/ou mentalmente para o trabalho.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-23-2' }),
      value:
        '23 - Filho(a) ou enteado(a) em qualquer idade, quando incapacitado física e/ou mentalmente para o trabalho.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-24-1' }),
      value:
        '24 - Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, do(a) qual o contribuinte detém a guarda judicial, até 21 (vinte e um) anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-24-2' }),
      value:
        '24 - Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, do(a) qual o contribuinte detém a guarda judicial, até 21 (vinte e um) anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-24-3' }),
      value:
        '24 - Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, do(a) qual o contribuinte detém a guarda judicial, até 21 (vinte e um) anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-25-1' }),
      value:
        '25 - Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, com idade até 24 anos, se ainda estiver cursando estabelecimento de nível superior ou escola técnica de 2º grau, desde que o contribuinte tenha detido sua guarda judicial até os 21 anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-25-2' }),
      value:
        '25 - Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, com idade até 24 anos, se ainda estiver cursando estabelecimento de nível superior ou escola técnica de 2º grau, desde que o contribuinte tenha detido sua guarda judicial até os 21 anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-25-3' }),
      value:
        '25 - Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, com idade até 24 anos, se ainda estiver cursando estabelecimento de nível superior ou escola técnica de 2º grau, desde que o contribuinte tenha detido sua guarda judicial até os 21 anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-25-4' }),
      value:
        '25 - Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, com idade até 24 anos, se ainda estiver cursando estabelecimento de nível superior ou escola técnica de 2º grau, desde que o contribuinte tenha detido sua guarda judicial até os 21 anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-25-5' }),
      value:
        '25 - Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, com idade até 24 anos, se ainda estiver cursando estabelecimento de nível superior ou escola técnica de 2º grau, desde que o contribuinte tenha detido sua guarda judicial até os 21 anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-25-6' }),
      value:
        '25 - Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, com idade até 24 anos, se ainda estiver cursando estabelecimento de nível superior ou escola técnica de 2º grau, desde que o contribuinte tenha detido sua guarda judicial até os 21 anos.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-26-1' }),
      value:
        '26 - Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, do(a) qual o contribuinte detém a guarda judicial, em qualquer idade, quando incapacitado física e/ou mentalmente para o trabalho.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-26-2' }),
      value:
        '26 - Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, do(a) qual o contribuinte detém a guarda judicial, em qualquer idade, quando incapacitado física e/ou mentalmente para o trabalho.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-26-3' }),
      value:
        '26 - Irmão(ã), neto(a) ou bisneto(a) sem arrimo dos pais, do(a) qual o contribuinte detém a guarda judicial, em qualquer idade, quando incapacitado física e/ou mentalmente para o trabalho.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-31-1' }),
      value:
        '31 - Pais, avós e bisavós que, em 2020, receberam rendimentos, tributáveis ou não, até R$ 22.847,76.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-31-2' }),
      value:
        '31 - Pais, avós e bisavós que, em 2020, receberam rendimentos, tributáveis ou não, até R$ 22.847,76.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-31-3' }),
      value:
        '31 - Pais, avós e bisavós que, em 2020, receberam rendimentos, tributáveis ou não, até R$ 22.847,76.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-41-1' }),
      value:
        '41 - Menor pobre, até 21 (vinte e um) anos, que o contribuinte crie e eduque e do qual detenha a guarda judicial.',
    },
    {
      label: intl.formatMessage({ id: 'family.relationship-51-1' }),
      value:
        '51 - A pessoa absolutamente incapaz, da qual o contribuinte seja tutor ou curador.',
    },
  ];
  return (
    <Select
      options={options}
      value={options.find((o) => o.value === value)}
      onChange={(v: RelationshipOption) =>
        onChange(v, v.value.includes('Companheiro(a)'))
      }
      className={className ?? 'slct Nucleo ctb required'}
    />
  );
}
