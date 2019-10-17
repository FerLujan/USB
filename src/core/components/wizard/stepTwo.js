import React from 'react';

export default props => {
	return (
		<div>
			<p>Step 2</p>
			<button
				id='prev'
				onClick={ () => props.onAction( 1 ) }
			>
				Previous
			</button>
			<button
				id='next'
				onClick={ () => props.onAction( 2 ) }
			>
				Next
			</button>
		</div>
	);
}