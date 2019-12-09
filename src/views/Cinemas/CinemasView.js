import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getAuthenticatoin } from '../../services/Authentication';
import { getCinemas } from '../../actions/cinemaActions';
import RenderAllCinemas from '../../components/RenderAllCinemas/RenderAllCinemas';

// function mapStateToProps(state) {
//     return { getCinemas: state.getCinemas }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         updateGetCinemas: () => {
//             dispatch(updateGetCinemas());
            
//         }
//     };
// };

class CinemasView extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() { 
        // getAuthenticatoin();
        this.props.getCinemas();
    };
    
    render () {
        return (
            <View style={styles.screens}>
                <Text>Whhhooooop!</Text>
                {/* <RenderAllCinemas
                    cinemas={filteredData}
                    onPress={name => navigate('ContactDetailView', { name: name })}
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

export default connect(null, { getCinemas })(CinemasView);