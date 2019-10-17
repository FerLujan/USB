import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';

const useStylesSnackbar = makeStyles( theme => ( {
	error: {
		backgroundColor: theme.palette.error.dark
	},
	icon: {
		fontSize: 20
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing( 1 )
	},
	message: {
		display: 'flex',
		alignItems: 'center'
	}
} ) );
const SnackBarWrapper = ( props ) => {
	const classes = useStylesSnackbar();
	const { className, message, onClose, variant, ...other } = props;
	return (
		<SnackbarContent
			className={ clsx( classes.error, className ) }
			aria-describedby='wizard-snackbar'
			message={
				<span id='wizard-snackbar' className={ classes.message }>
					<ErrorIcon
						className={ clsx( classes.icon, classes.iconVariant ) }
					/>
					{ message }
				</span>
			}
			action={ [
				<IconButton
					key='close'
					aria-label='close'
					color='inherit'
					onClick={ onClose }
				>
					<CloseIcon className={ classes.icon } />
				</IconButton>
			] }
			{ ...other }
		/>
	);
};

const ErrorNotifier = ( props ) => {
	const {
		handleClose,
		errorMessage,
		open,
		horizontal = 'left'
	} = props;
	return (
		<Snackbar
			anchorOrigin={ {
				vertical: 'top',
				horizontal: 'center'
			} }
			open={ open }
			autoHideDuration={ 3000 }
			onClose={ handleClose }
		>
			<SnackBarWrapper
				message={ errorMessage }
				onClose={ handleClose }
		/>
		</Snackbar>
	) };

ErrorNotifier.propTypes = {
	handleClose: PropTypes.func.isRequired,
	errorMessage: PropTypes.string.isRequired
};

export default ErrorNotifier;