import React from 'react';
import { TouchableHighlight } from 'react-native';




const Toolbar = ({ MovieData, extraData }) => (
	<View>
		<TouchableHighlight>
			style={styles.toolbarAction}
			onPress={id => navigate('UpcomingMovieView')}
		</TouchableHighlight>
	</View>
)
export default Toolbar;