import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	color: {
		primary: '#757575',
		secondarys: '#CDDC39',
		three: '#757575',
		error: '#212121',
	},
	typography: {
		fontFamily: 'Roboto',
	},
	shape: {
		backgroundColor: 'purple',
		color: 'black',
		borderRadius: 4,
	},
});
export default theme;
