import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles( theme => ( {
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		height: 240
	},
	textField: {
		marginLeft: theme.spacing( 1 ),
		marginRight: theme.spacing( 1 )
	},
	buttonGroup: {
		display: 'flex',
		justifyContent: 'center'
	},
	button: {
		margin: theme.spacing( 1 )
	}
} ) );