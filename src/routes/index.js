import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CinemasView from '../views/Cinemas/CinemasView';


const StackNavigator = createStackNavigator({
    CinemasView: CinemasView,
}, {

    defaultNavigationOptions: {
        headerTitle: "Dr.Cinema",
        headerStyle: {
            height: 70,
            backgroundColor: 'gray',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
        },
        headerBackTitle: "contacts",
        headerTintColor: '#fff',
    }
}

);

export default createAppContainer(StackNavigator);