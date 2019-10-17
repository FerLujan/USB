import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './stepStyles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

const confirmUseStyles = makeStyles( theme => ( {
	root: {
		flexGrow: 1,
		overflow: 'hidden',
		padding: theme.spacing(0, 3),
	},
	divider:{
		margin:theme.spacing(1)
	},
	card: {
		maxWidth: 400,
		margin: `${theme.spacing(1)}px auto`,
		padding: theme.spacing(1),
		border: '1px solid #2c2c2c',
		boxShadow: '0 0 0 3px #2c2c2c',
	},
} ) );

function Confirm ( props ) {
	const classes = useStyles();
	const confirmClasses = confirmUseStyles();
	const {
		onAction,
		wizardContext: { to, from, weight, shippingOption }
	} = props;
	const onClickPrevious = () => {
		onAction( 1 );
	};
	const onClickEnd = () => {
		onAction( 3 );
	};
	const shippingValue =
		+shippingOption === 1 ? 'Ground' : +shippingOption === 2 ? 'Priority' : '';
	return (
		<>
			<Typography variant="h3" component="h1" align='center'>
				Confirm Information
			</Typography>
			<Divider className={confirmClasses.divider} />
			<div className={ confirmClasses.root }>
				<Card className={confirmClasses.card}>
					<CardHeader title="Sender Information"/>
					<CardContent>
						<Typography component='p'>
							Name: { from.name }
						</Typography>
						<Typography component='p'>
							Street: { from.street }
						</Typography>
						<Typography component='p'>
							City: { from.city }
						</Typography>
						<Typography component='p'>
							State: { from.state }
						</Typography>
						<Typography component='p'>
							zip code: { from.zip }
						</Typography>
					</CardContent>
				</Card>
				<Card className={confirmClasses.card}>
					<CardHeader title="Receiver Information"/>
					<CardContent>
						<Typography component='p'>
							Name: { to.name }
						</Typography>
						<Typography component='p'>
							Street: { to.street }
						</Typography>
						<Typography component='p'>
							City: { to.city }
						</Typography>
						<Typography component='p'>
							State: { to.state }
						</Typography>
						<Typography component='p'>
							zip code: { to.zip }
						</Typography>
					</CardContent>
				</Card>
				<Card className={confirmClasses.card}>
					<CardHeader title="Weight"/>
					<CardContent>
						<Typography component='p'>
							{ weight } kg
						</Typography>
					</CardContent>
				</Card>
				<Card className={confirmClasses.card}>
					<CardHeader title="Shipping Option"/>
					<CardContent>
						<Typography component='p'>
							{ shippingValue }
						</Typography>
					</CardContent>
				</Card>
			</div>
			<div className={ classes.buttonGroup }>
				<Button
					variant='contained'
					color='secondary'
					className={ classes.button }
					onClick={ onClickPrevious }
				>
					Previous
				</Button>
				<Button
					variant='contained'
					color='primary'
					className={ classes.button }
					onClick={ onClickEnd }
				>
					End
				</Button>
			</div>
		</>
	);
}

Confirm.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default Confirm;