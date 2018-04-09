import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

import Label from './Label';

const Select = ({
  label = '',
  emptyText = '',
  emptyValue = '',
  options = [],
  onChange = () => {},
  value = '',
  isLarge = false,
  darkLabel = false,
}) => {
  const classes = cc(['Select__El', { Select__Large: isLarge }]);
  let optionEl = [];

  if (emptyText.length) {
    optionEl.push({ id: emptyValue || '', name: emptyText });
  }

  var optionValues = [...optionEl, ...options];

  return (
    <div className="Select">
      <Label darkLabel={darkLabel}>{label}</Label>
      <select
        className={classes}
        value={value}
        onChange={onChange}
        onBlur={onChange}
      >
        {optionValues.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  emptyText: PropTypes.string,
  emptyValue: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  isLarge: PropTypes.bool,
  darkLabel: PropTypes.bool,
};

export default Select;
