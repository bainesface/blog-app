import {createAppContainer } from 'react-navigation';
import{ createStackNavigator} from 'react-navigation-stack',
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    InitialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

export default createAppContainer(navigator);
