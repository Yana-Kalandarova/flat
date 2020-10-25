import React from 'react';
import PropTypes from 'prop-types';

import {ApartmentItem} from '../ApartmentItem';

import './ApartmentList.css';

const propTypes = {
	list: PropTypes.array.isRequired,
};

const ApartmentList = ({list}) => (
	<ul className="container-fluid">
		{
			list.map(item => (
				<ApartmentItem key={item.id} {...item} />
			))
		}
	</ul>
);

ApartmentList.propTypes = propTypes;

export default ApartmentList;