import React, { useState } from 'react';

import Wizard from '../../core/components/wizard/Wizard';
import GetSenderAddress from './steps/getSenderAddress';
import GetReceiverAddress from './steps/getReceiverAddress.js';
import GetWeight from './steps/getWeight';
import Confirm from './steps/Confirm';
import GetShippingOption from './steps/getShippingOption';
import Header from './Header';
import ShippingLabel from './ShippingLabel'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const shippingRate = 0.4;
const ShippingOption = {
	ground: 1,
	priority: 2
};

let ShippingInfo = {
	from: {
		name: '',
		street: '',
		city: '',
		state: '',
		zip: ''
	},
	to: {
		name: '',
		street: '',
		city: '',
		state: '',
		zip: ''
	},
	weight: '',
	shippingOption: ''
};

const useStyles = makeStyles( theme => ({
	root: {
		display: 'flex'
	},
	title: {
		flexGrow: 1
	},
}));

const initializeShippingInfoObject = () => {
	ShippingInfo = {
		from: {
			name: '',
			street: '',
			city: '',
			state: '',
			zip: ''
		},
		to: {
			name: '',
			street: '',
			city: '',
			state: '',
			zip: ''
		},
		weight: '',
		shippingOption: ''
	};
};

function ShippingLabelMaker () {
	const classes = useStyles();
	
	const onComplete = () => {
		setOpenWizard( false );
		setLabelDone( true );
	};

	const getShippingCost = () => {
		const {
			weight,
			shippingOption
		} = ShippingInfo;
		return +(
			weight * shippingRate *
			( shippingOption === ShippingOption.ground ? 1 : 1.5 )
		).toFixed( 2 ); 
	};
	const shippingLabelOnComplete = () => {
		setLabelDone( false );
		initializeShippingInfoObject();
	};
	// state definitions
	const [ labelDone, setLabelDone ] = useState( false );
	const [ openWizard, setOpenWizard ] = useState( false );
	const [ open, setOpen ] = useState( false );
	if ( labelDone ) {
		return (
			<ShippingLabel
				wizardContext={ ShippingInfo }
				onComplete={ shippingLabelOnComplete }
				shippingCost= { getShippingCost() }
			/>
		);
	}
	return (
		<div className={ classes.root }>
			<Container fixed>
				<Wizard
						steps={ [
							GetSenderAddress,
							GetReceiverAddress,
							GetWeight,
							GetShippingOption,
							Confirm
						] }
						wizardContext={ ShippingInfo }
						onComplete={ onComplete }
						header={ Header }
					/> 
			</Container>
		</div>
	);
}

export default ShippingLabelMaker;