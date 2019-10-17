import React, { useState } from 'react';
import PropTypes from 'prop-types';

const divStyle = {
	width: '90%',
	margin: '5em auto',
	padding: '1em',
	border: '.1em solid #2c2c2c',
	boxShadow: '5px 5px 2px #2c2c2c',
	borderRadius: '1em'
}

const WizardAction = {
	prev: 1,
	next: 2,
	end: 3
};

function Wizard ( props ) {
	const {
		steps,
		wizardContext,
		onComplete,
		header: Header
	} = props;

	const lastStep = steps.length - 1;
	const [ step, setStep ] = useState( 0 );
	const onAction = action => {
		let newStep;
		switch ( action ) {
			case WizardAction.prev:
				if ( step === 0 ) {
					return;
				} else {
					newStep = step - 1;
				}
				break;
			case WizardAction.next:
				if ( step === lastStep ) {
					return;
				} else {
					newStep = step + 1;
				}
				break;
			case WizardAction.end:
				return onComplete();
			default:
				throw new Error( `Invalid option: ${ action }` );
		}

		setStep( newStep );
	};
	const Step = steps[ step ];
	return (
		<div style={divStyle}>
			<Header
				title="Shipping Label Maker"
				step={ step + 1 }
			/>
			<Step
				onAction={ onAction }
				wizardContext={ wizardContext }
			/>
		</div>
	);
}

Wizard.propTypes = {
	header: PropTypes.func.isRequired,
	steps: PropTypes.array.isRequired,
	wizardContext: PropTypes.object.isRequired,
	onComplete: PropTypes.func.isRequired
};

export default Wizard;