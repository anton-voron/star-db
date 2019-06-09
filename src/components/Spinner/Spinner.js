import React from 'react';

import './Spinner.css';

const Spinner = () => {

	return (
		<div className="lds-css ng-scope">
			<div className="lds-double-ring">
				<div></div>
				<div></div>
			</div>
			<style type="text/css"></style>
		</div>
	);
};
export default Spinner;
