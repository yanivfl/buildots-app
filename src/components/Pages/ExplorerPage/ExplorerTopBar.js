import {
  Button, Form, Select,
} from 'antd';
import React from 'react';
import { FullSizeBox } from '../../Core';
import './ExplorerPage.css';
import { LATEST_DATE } from '../../../constants';

// TODO format date
const formatDate = (date) => date;
const LATEST_DATE_OPTION = [{ value: LATEST_DATE, label: 'Latest Date' }];
const getDateOptions = ({
  apartments,
  apartmentName,
}) => {
  // eslint-disable-next-line max-len
  const apartment = apartments.find((_apartment) => _apartment.name === apartmentName);
  if (!apartment) {
    return LATEST_DATE_OPTION;
  }
  const dates = apartment.images.map(({ date }) => date);
  const uniqueDates = [...new Set(dates)];
  const dateOptions = uniqueDates.map((date) => ({ value: date, label: formatDate(date) }));
  return [...LATEST_DATE_OPTION, ...dateOptions];
};

const getApartmentOptions = ({ apartments }) => apartments.map(({ name }) => ({
  value: name, label: name,
}));

const ExplorerSelector = ({
  label, name, options, formProps,
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Form.Item label={label} name={name} style={{ padding: '0 2px' }} {...formProps}>
    <Select
      placeholder="Choose date"
      style={{ width: 120 }}
      options={options}
      size="small"
    />
  </Form.Item>
);

const ExplorerTopBar = ({ form, apartments = [] }) => {
  const apartmentName = form.getFieldValue('apartmentName');
  const apartmentNamesOptions = getApartmentOptions({ apartments });
  const dateOptions = getDateOptions({ apartments, apartmentName });
  return (
    <FullSizeBox className="explorerTopBar">
      <Form
        layout="inline"
        form={form}
        initialValues={{
          // date: LATEST_DATE,
          apartmentName: apartmentNamesOptions[0]?.value,
          room: 'Living room',
          floor: 1,
        }}
        className="explorerForm"
      >
        <ExplorerSelector label="floor" name="floor" options={[{ value: '1', label: '1' }]} />
        <ExplorerSelector label="apartment" name="apartmentName" options={apartmentNamesOptions} />
        <ExplorerSelector label="room" name="room" options={[{ value: 'living room', label: 'Living room' }]} />
        <ExplorerSelector label="date" name="date" options={dateOptions} />
        <div style={{ flex: 1 }} />
        <Form.Item>
          <Button type="primary" disabled size="small">go</Button>
        </Form.Item>
      </Form>
    </FullSizeBox>
  );
};

export { ExplorerTopBar };
