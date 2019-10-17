import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ErrorNotifier from '../../../core/components/error-toast/ErrorNotifier';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	container:{
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField:{
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		flexGrow: 1
	},
	buttonGroup:{
		margin: '2em',
		textAlign: 'center'
	}
}));

function GetSenderAddress ( props ) {
	const {
		onAction,
		wizardContext:{ from }
	} = props;
	const classes = useStyles();
	const nextHandler = () => {
		let errorMessage;

		// validate form errors.
		if ( Object.values( from ).includes( '' ) ){
			errorMessage = 'Please fill the information required.'
		}
		if ( errorMessage ) {
			setErrorMessage( errorMessage );
			return handleOpen();
		}
		onAction( 2 );
	};
	const handleClose = () => setOpen( false );
	const handleOpen = () => setOpen( true );
	const [ localFrom, setLocalFrom ] = useState( from );
	const [ errors, setErrors ] = useState( {} );
	const [ errorMessage, setErrorMessage ] = useState( '' );
	const [ open, setOpen ] = useState( false );
	const onBlur = event => {
		const { target:{ name, value } } = event;

		setErrors( { ...errors, [ name ]: !value } )
	};
	const onChange = event => {
		const { target:{ name, value } } = event;
		from[ name ] = value;

		setLocalFrom( { ...from } );
		setErrors( { ...errors, [ name ]: !value } )
	};
	return (
		<>
			<ErrorNotifier
				handleClose={ handleClose }
				open={ open }
				errorMessage={ errorMessage }
			/>
			<Typography variant="h3" component="h1" align='center'>
				Sender address
			</Typography>
			<form className={ classes.container }>
				<TextField
					error={ errors.name }
					id='sender-name'
					label='Name'
					value={ localFrom.name }
					onChange={ onChange }
					onBlur={ onBlur }
					margin='normal'
					className={ classes.textField }
					fullWidth
					name='name'
				/>
				<TextField
					error={ errors.street }
					id='sender-street'
					label='Street'
					value={ localFrom.street }
					onChange={ onChange }
					onBlur={ onBlur }
					margin='normal'
					className={ classes.textField }
					fullWidth
					name='street'
				/>
				<TextField
					error={ errors.city }
					id='sender-city'
					label='City'
					value={ localFrom.city }
					onBlur={ onBlur }
					onChange={ onChange }
					className={ classes.textField }
					margin='normal'
					name='city'
				/>
				<TextField
					error={ errors.state }
					onBlur={ onBlur }
					id='sender-state'
					label='State'
					value={ localFrom.state }
					onChange={ onChange }
					className={ classes.textField }
					margin='normal'
					name='state'
				/>
				<TextField
					type='number'
					error={ errors.zip }
					onBlur={ onBlur }
					id='sender-zip'
					label='Zip'
					value={ localFrom.zip }
					onChange={ onChange }
					className={ classes.textField }
					margin='normal'
					name='zip'
					inputProps={ {
						min: 0
					} }
				/>
			</form>
			<div className={ classes.buttonGroup }>
				<Button
					onClick={ nextHandler }
					variant="contained"
					color="primary"
					className={classes.button}
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