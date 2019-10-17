import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './stepStyles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';

const weightUseStyles = makeStyles( theme => ( {
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: 240
	}
} ) );

function GetSenderAddress ( props ) {
	const {
		onAction,
		wizardContext
	} = props;
	const onClickPrevious = () => {
		onAction( 1 );
	};
	const onClickNext = () => {
		onAction( 2 );
	};
	const [ localWeight, setLocalWeight ] = useState( wizardContext.weight );
	const onChange = event => {
		const { target: { name, value } } = event;
		wizardContext[ name ] = value;

		setLocalWeight( value );
	};
	const classes = useStyles();
	const weightClasses = weightUseStyles();

	return (
		<>
			<Typography variant="h3" component="h1" align='center'>
				Shipping weight
			</Typography>
			<form className={ weightClasses.container }>
				<TextField
					type='number'
					id='weight'
					label='Weight'
					value={ localWeight }
					onChange={ onChange }
					margin='normal'
					className={ classes.textField }
					name='weight'
					inputProps={ {
						min: 0
					} }
					InputProps={ {
						endAdornment:
							<InputAdornment position='end'>Kg</InputAdornment>
					} }
				/>
			</form>
			<div className={ classes.buttonGroup }>
				<Button
					onClick={ onClickPrevious }
					variant='contained'
					color='secondary'
					className={ classes.button }
				>
					Previous
				</Button>
				<Button
					onClick={ onClickNext }
					variant='contained'
					color='primary'
					className={ classes.button }
				>
					Next
				</Button>
			</div>
		</>
	);
}

GetSenderAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default GetSenderAddress;