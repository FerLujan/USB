import React from 'react';
import PropTypes from 'prop-types';
//Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles( theme => ( {
	root: {
		justifyContent: 'center',
		padding: theme.spacing( 2, 3 )
	},
	cardContainer:{
		width: '90%',
		margin: '5em auto',
		padding: '1em',
		border: '.1em solid #2c2c2c',
		boxShadow: '5px 5px 2px #2c2c2c',
		borderRadius: '2PX',
		textAlign: 'center',
		justifyContent: 'Center',
	},
	card: {
		border: '1px solid #2c2c2c',
		maxWidth: 400
	}
} ) );

export default function ShippingLabel ( props ) {
	const classes = useStyles();
	const {
		onComplete,
		wizardContext: { to, from, weight, shippingOption },
		shippingCost
	} = props;
	const shippingValue =
		+shippingOption === 1 ? 'Ground' : +shippingOption === 2 ? 'Priority' : '';
	return (
		<div className={ classes.root }>
			<Grid container spacing={3} className={classes.cardContainer}>
				<Grid item xs>
					<Card className={ classes.card }>
						<CardContent>
							<Typography variant='h5' component='h3'>
								Sender Information
							</Typography>
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
				</Grid>
				<Grid item xs>
					<Card className={ classes.card }>
						<CardContent>
							<Typography variant='h5' component='h3'>
								Receiver Information
							</Typography>
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
				</Grid>
				<Grid container spacing={3}>
					<Grid item xs>
						<Card className={ classes.card }>
							<CardContent>
								<Typography variant='h5' component='h3'>
									Weight:
								</Typography>
								<Typography component='p'>
									{ weight } kg
								</Typography>
								</CardContent>
						</Card>
						</Grid>
						<Grid item xs>
						<Card className={ classes.card }>
							<CardContent>
								<Typography variant='h5' component='h3'>
									Shipping Option:
								</Typography>
								<Typography component='p'>
									{ shippingValue }
								</Typography>
								</CardContent>
						</Card>
					</Grid>
					<Grid item xs>
						<Card className={ classes.card }>
							<CardContent>
								<Typography variant='h5' component='h3'>
									Total:
								</Typography>
								<Typography component='p'>
									${ shippingCost }
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				<Button
					variant='contained'
					color='primary'
					className={ classes.button }
					onClick={ onComplete }
				>
					Print
				</Button>
			</Grid>
		</div>
	);
};

ShippingLabel.propTypes = {
	onComplete: PropTypes.func.isRequired,
	wizardContext: PropTypes.object.isRequired,
	shippingCost: PropTypes.number.isRequired
};