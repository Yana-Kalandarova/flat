import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {getFormattedDate} from './helpers';

const propTypes = {
	historyList: PropTypes.array.isRequired,
};

const PriceHistory = ({historyList}) => (
	<Fragment>
		<h3>Price History:</h3>
		<dl>
			{
				historyList.map((item, index) => {
				const [date, price] = Object.entries(item)[0];
				const formattedDate = getFormattedDate(date);

				return (
					<div key={index} className="apartment-item--price-item">
						<dt>{formattedDate}:</dt>
						<dd>{price}</dd>
					</div>
				)})
			}
		</dl>
	</Fragment>
);

PriceHistory.propTypes = propTypes;

export default PriceHistory;
