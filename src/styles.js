import {StyleSheet,Platform} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5ffff'
	},
	avatar:{
		width: '100%',
		height: 400
	},
	supertext: {
		...Platform.select({
			ios:{
				textAlign: 'left',
				backgroundColor: 'blue',
				fontSize: 20,
				color: 'white',
				padding: 10,
				width: 300
			},
			android:{
				textAlign: 'right',
				backgroundColor: 'blue',
				fontSize: 20,
				color: 'white',
				padding: 10,
				width: 300
			}
		})
	}
});