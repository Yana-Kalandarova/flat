import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {ApartmentItem} from '../ApartmentItem';

import './ApartmentList.css';

const propTypes = {
	list: PropTypes.array.isRequired,
};

const ApartmentList = ({list}) => (
	<Fragment>
		<h1 className="container-fluid apartment-list-title">{list.length} apartments found</h1>
		<ul className="container-fluid">
			{
				list.map(item => (
					<ApartmentItem key={item.id} {...item} />
				))
			}
		</ul>
	</Fragment>
);

ApartmentList.propTypes = propTypes;

export default ApartmentList;