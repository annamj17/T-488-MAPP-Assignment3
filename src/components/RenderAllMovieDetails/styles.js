import { StyleSheet, Platform, TextComponent } from 'react-native';

export default StyleSheet.create({
	content: {
	},
	header: {
		height: 60,
		fontSize: 35,
		color: "#696969",
		fontWeight: "600",
		alignSelf: 'center',
		justifyContent: 'center'
	},
	info: {
		fontWeight: 'bold'
	},
	rating: {
		flexDirection: "row"
	},
	ratingText: {
		textAlign: 'left',
		fontWeight: 'bold'
	},
	ratingNumbers: {
		color: "#696969",
		fontSize: 12,
		fontWeight: '100',
		paddingTop: 2
	},
	ratingStars: {
		paddingVertical: 5
	},
	textContent: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 5,
		paddingBottom: 5,
		fontWeight: 'bold'
	}
});