import React from 'react';
import apartmentsResult from './data/apartments';
import {updateApartmentsResult} from './services';

import {ApartmentList, UpdateButton} from './components';

const App = () => {
	const fullApartmentList = Object.values(apartmentsResult);
	const handleUpdateApartmentsResult = async() => {
		await updateApartmentsResult();
	};

	return (
		<div className="App">
			<UpdateButton handleClick={handleUpdateApartmentsResult} />
			<ApartmentList list={fullApartmentList} />
		</div>
	);
};

export default App;
