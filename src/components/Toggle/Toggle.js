import React from 'react';
import PropTypes from 'prop-types';

import './Toggle.css';

const propTypes = {
	handleChange: PropTypes.func.isRequired,
	selectedValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	list: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string.isRequired,
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]).isRequired,
	})).isRequired,
	name: PropTypes.string.isRequired,
};

const Toggle = ({handleChange, selectedValue, list, name}) => (
	<div className="btn-group">
		{
			list.map(({label, value}) => {
				const isRadioChecked = value === +selectedValue;

				return (
					<label key={label} className={`btn ${isRadioChecked ? 'btn-dark' : 'btn-secondary'}`}>
						{label}
						<input type="radio" onChange={handleChange} value={value} name={name} checked={isRadioChecked} />
					</label>
				)
			})
		}
	</div>
);

Toggle.propTypes = propTypes;

export default Toggle;