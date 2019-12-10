import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getAuthenticatoin } from '../../services/Authentication';
import { getCinemas } from '../../actions/cinemaActions';
import RenderAllCinemas from '../../components/RenderAllCinemas/RenderAllCinemas';

class CinemasDetailView extends React.Component {

    static navigationOptions = {
        headerTitle: 'Cinema Details',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
        },
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        // getAuthenticatoin();
        this.props.getCinemas();
    };

    render() {
        return (
            <View style={styles.screens}>
                <Text>Whhhooooop!</Text>
                {/* <RenderAllCinemas
                    cinemasData={this.props.cinemas}
                    onPress={id => navigate('CinemasDetailView', { id: id })}
                /> */}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    screens: {
        flex: 1
    }
});

// const mapStateToProps = (reduxStoreState) => {
//     return {
//         cinemas: reduxStoreState.cinema,
//     }
// };

export default connect(null, { getCinemas })(CinemasDetailView);