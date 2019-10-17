import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ErrorNotifier from '../../../core/components/error-toast/ErrorNotifier';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		flexGrow: 1
	},
	buttonGroup:{
		margin: '2em',
		textAlign: 'center'
	}
}));

function GetReceiverAddress ( props ){
	const {
		onAction,
		wizardContext: { to }
	} = props;
	
	const classes = useStyles();
	const [ localTo, setLocalTo ] = useState( to );
		
	const [ open, setOpen ] = useState( false );
	const [ errorMessage, setErrorMessage ] = useState( '' );	
	const [ errors, setErrors ] = useState( {} );
	const onClickPrevious =()=> {
		onAction( 1 );
	};
	const onClickNext =()=> {
		const errorMessage = errorHandler();
		if ( errorMessage ){
			setErrorMessage( errorMessage );
			return handleOpen();
		}
		onAction( 2 );
	};
	const onChange = event => {
		const { target: { name, value } } = event;
		to[ name ] = value;

		setLocalTo( { ...to } );
		setErrors( { ...errors, [ name ]: !value } );
	};
	const handleClose =()=> setOpen( false );
	const handleOpen =()=> setOpen( true );
	const errorHandler =()=> {
		let errorMessage
		if ( Object.values( to ).includes( '' ) ){
			errorMessage = 'Please fill in the information before continuing.';
		}
		return errorMessage;
	};
	const onBlur = event => {
		const { target: { name, value } } = event;

		setErrors( { ...errors, [ name ]: !value } );
	};
	return (
		<>
			<ErrorNotifier
				open={ open }
				handleClose={ handleClose }
				errorMessage={ errorMessage }
			/>
			<Typography variant="h3" component="h1" align='center'>
				Receiver address
			</Typography>
			<form className={ classes.container }>
				<TextField
					error={ errors.name }
					id='receiver-name'
					label='Name'
					value={ localTo.name }
					onChange={ onChange }
					onBlur={ onBlur }
					margin='normal'
					className={ classes.textField }
					fullWidth
					name='name'
				/>
				<TextField
					error={ errors.street }
					id='receiver-street'
					label='Street'
					value={ localTo.street }
					onChange={ onChange }
					onBlur={ onBlur }
					margin='normal'
					className={ classes.textField }
					fullWidth
					name='street'
				/>
				<TextField
					error={ errors.city }
					id='receiver-city'
					label='City'
					value={ localTo.city }
					onChange={ onChange }
					onBlur={ onBlur }
					margin='normal'
					className={ classes.textField }
					name='city'
				/>
				<TextField
					error={ errors.state }
					id='receiver-state'
					label='State'
					value={ localTo.state }
					onChange={ onChange }
					onBlur={ onBlur }
					margin='normal'
					className={ classes.textField }
					name='state'
				/>
				<TextField
					onBlur={ onBlur }
					error={ errors.zip }
					type='number'
					id='receiver-zip'
					label='Zip'
					value={ localTo.zip }
					onChange={ onChange }
					margin='normal'
					className={ classes.textField }
					name='zip'
					inputProps={ {
						min: 0
					} }
				/>
			</form>
			<div className={ classes.buttonGroup }>
				<Button
					onClick={ onClickPrevious }
					variant="contained"
					color='secondary'
					className={ classes.button }
				>
					Previous
				</Button>
				<Button
					onClick={ onClickNext }
					variant='contained'
					color="primary"
					className={ classes.button }
				>
					Next
				</Button>
			</div>
		</>
	);
}

GetReceiverAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default GetReceiverAddress;