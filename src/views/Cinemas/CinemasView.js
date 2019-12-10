import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getAuthenticatoin } from '../../services/Authentication';
import { getCinemas } from '../../actions/cinemaActions';
import RenderAllCinemas from '../../components/RenderAllCinemas/RenderAllCinemas';

class CinemasView extends React.Component {

    static navigationOptions = {
        headerTitle: 'Cinemas',
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

    render () {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.screens}>
            <RenderAllCinemas
                cinemasData={this.props.cinemas}
                onPress={id => navigate('CinemasDetailView', { id: id })}
            />
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    screens: {
        flex: 1
    }
});

const mapStateToProps = (reduxStoreState) => {
    return {
        cinemas: reduxStoreState.cinema,
    }
};

export default connect(mapStateToProps, { getCinemas })(CinemasView);