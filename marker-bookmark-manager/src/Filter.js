import React from 'react';
import PropTypes from 'prop-types';
import { Button, Select } from 'antd';
import './Filter.css';

const { Option } = Select;

const Filter = ({ getResults, setFilter }) => (
  <div>
    <span>Show me my bookmarks</span>
    <Select className="SelectAge" defaultValue="0" onChange={val => setFilter(val)}>
      {/* Value is numeric: older than n days */}
      <Option value="0">since the beginning of time</Option>
      <Option value="365">older than 1 year</Option>
      <Option value="730">older than 2 years</Option>
    </Select>
    <Button onClick={getResults}>Show Results</Button>
  </div>
);

Filter.propTypes = {
  getResults: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
