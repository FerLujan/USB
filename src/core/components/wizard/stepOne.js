import React from 'react';

export default props => {
	return (
		<div>
			<p>Step 1</p>
			<button
				id='next'
				onClick={ () => props.onAction( 2 ) }
			>
				Next
			</button>
		</div>
	);
}