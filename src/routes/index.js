import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CinemasView from '../views/Cinemas/CinemasView';
import CinemasDetailView from '../views/CinemasDetail/CinemasDetailView';
import movieView from '../views/Movie/movieView';


const StackNavigator = createStackNavigator({
    CinemasView: CinemasView,
    CinemasDetailView: CinemasDetailView,
    movieView: movieView
}, {

    defaultNavigationOptions: {
        headerStyle: {
            height: 70,
            backgroundColor: 'gray',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
        },
        headerBackTitle: "back",
        headerTintColor: '#fff',
    }
}

);

export default createAppContainer(StackNavigator);