import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#0c1e3f',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
