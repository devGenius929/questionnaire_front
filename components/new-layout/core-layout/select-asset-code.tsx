import React from 'react';
import Select from 'react-select';
import { useIntl } from 'react-intl';

interface SelectAssetCodeArgs {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SelectAssetCode({ onChange }: SelectAssetCodeArgs) {
  const intl = useIntl();
  const options = [
    {
      value: '6323',
      label: intl.formatMessage({ id: 'assets.code.residential-building' }),
    },
    {
      value: '6324',
      label: intl.formatMessage({ id: 'assets.code.office-building' }),
    },
    { value: '6325', label: intl.formatMessage({ id: 'assets.code.shed' }) },
    {
      value: '6326',
      label: intl.formatMessage({ id: 'assets.code.apartment' }),
    },
    { value: '6327', label: intl.formatMessage({ id: 'assets.code.house' }) },
    { value: '6328', label: intl.formatMessage({ id: 'assets.code.land' }) },
    { value: '6329', label: intl.formatMessage({ id: 'assets.code.terrain' }) },
    { value: '6330', label: intl.formatMessage({ id: 'assets.code.office' }) },
    {
      value: '6331',
      label: intl.formatMessage({ id: 'assets.code.construction' }),
    },
    { value: '6332', label: intl.formatMessage({ id: 'assets.code.profit' }) },
    { value: '6333', label: intl.formatMessage({ id: 'assets.code.store' }) },
    {
      value: '6334',
      label: intl.formatMessage({ id: 'assets.code.other-real-estate' }),
    },
    {
      value: '8104',
      label: intl.formatMessage({ id: 'assets.code.capital-share' }),
    },
    {
      value: '8105',
      label: intl.formatMessage({ id: 'assets.code.other-shares' }),
    },
    { value: '8106', label: intl.formatMessage({ id: 'assets.code.vehicle' }) },
    {
      value: '8107',
      label: intl.formatMessage({ id: 'assets.code.aircraft' }),
    },
    { value: '8108', label: intl.formatMessage({ id: 'assets.code.vessel' }) },
    {
      value: '8109',
      label: intl.formatMessage({ id: 'assets.code.freelance-assets' }),
    },
    { value: '8110', label: intl.formatMessage({ id: 'assets.code.jewelry' }) },
    {
      value: '8111',
      label: intl.formatMessage({ id: 'assets.code.landline' }),
    },
    { value: '8112', label: intl.formatMessage({ id: 'assets.code.other' }) },
    { value: '8113', label: intl.formatMessage({ id: 'assets.code.license' }) },
    {
      value: '8114',
      label: intl.formatMessage({ id: 'assets.code.club-title' }),
    },
    {
      value: '8115',
      label: intl.formatMessage({ id: 'assets.code.copyright' }),
    },
    {
      value: '8116',
      label: intl.formatMessage({ id: 'assets.code.mining-right' }),
    },
    {
      value: '8117',
      label: intl.formatMessage({
        id: 'assets.code.consortium-not-contemplated',
      }),
    },
    { value: '8118', label: intl.formatMessage({ id: 'assets.code.leasing' }) },
    {
      value: '8119',
      label: intl.formatMessage({ id: 'assets.code.other-general-assets' }),
    },
  ];

  return <Select options={options} onChange={onChange} />;
}
