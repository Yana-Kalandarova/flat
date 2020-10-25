import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	infoList: PropTypes.array.isRequired,
};

const ApartmentInfo = ({infoList}) => (
	<Fragment>
		<h3>Info:</h3>
		<dl>
			{
				infoList.map(([key, value]) => (
					<div key={key} className="apartment-item--info-item">
						<dt>{key}:</dt>
						<dd>{value}</dd>
					</div>
				))
			}
		</dl>
	</Fragment>
);

ApartmentInfo.propTypes = propTypes;

export default ApartmentInfo;