import React from 'react';

export default props => {
	return (
		<div>
			<p>Step 3</p>
			<button
				id='prev'
				onClick={ () => props.onAction( 1 ) }
			>
				Previous
			</button>
			<button
				id='end'
				onClick={ () => props.onAction( 3 ) }
			>
				End
			</button>
		</div>
	);
}