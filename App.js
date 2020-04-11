import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import LoginScreen from './src/Screen/Auth/LoginScreen';
import PinLoginScreen from './src/Screen/Auth/PinLoginScreen';
import PinRegisterScreen from './src/Screen/Auth/PinRegisterScreen';
import RegisterScreen from './src/Screen/Auth/RegisterScreen';
import HomeScreen from './src/Screen/BottomTabScreen/HomeScreen';
import DealsScreen from './src/Screen/BottomTabScreen/DealsScreen';
import ProfileScreen from './src/Screen/BottomTabScreen/ProfileScreen';
import FinanceScreen from './src/Screen/BottomTabScreen/FinanceScreen';
import ScanScreen from './src/Screen/BottomTabScreen/ScanScreen';
import EditProfileScreen from './src/Component/EditProfileScreen';
import TopUpScreen from './src/Screen/TransactionScreen/TopupScreen';
import TransferScreen from './src/Screen/TransactionScreen/TransferScreen';
import HistoryScreen from './src/Screen/TransactionScreen/HistoryScreen';
import FavoriteScreen from './src/Screen/TransactionScreen/FavoriteScreen';
import DetailHistoryScreen from './src/Screen/TransactionScreen/DetailHistory';

import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

// const navigation = useNavigation();

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Pin: PinRegisterScreen,
    Register: RegisterScreen,
    PinLogin: PinLoginScreen,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const TopTab = createMaterialTopTabNavigator(
  {
    'Penerima Baru': {screen: TransferScreen},
    Favorit: {screen: FavoriteScreen},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#9A97A9',
      style: {
        backgroundColor: '#53338C',
        paddingBottom: -100,
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#11AFB8',
        borderBottomWidth: 3,
      },
    },
  },
);

const ProfileStack = createStackNavigator(
  {
    Profile: {screen: ProfileScreen},
    EditProfile: {screen: EditProfileScreen},
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none',
  },
);
const TransferStack = createStackNavigator({
  TopTab: {
    screen: TopTab,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#53338C',
        elevation: 0,
      },
      headerTintColor: 'white',
      title: 'TRANSFER',
      headerTitleAlign: 'left',

      headerLeft: (
        <TouchableOpacity
          onPress={_ => navigation.navigate('Home')}
          style={{paddingLeft: 25}}>
          {/* <HeaderBackButton onPress={_ => navigation.navigate('Home')}> */}
          <Icon name="arrow-left" size={25} color="white" />
          {/* </HeaderBackButton> */}
        </TouchableOpacity>
      ),
    }),
  },
});


const TransactionStack = createStackNavigator(
  {
    TopUp: {screen: TopUpScreen},
    Transfer: {screen: TransferStack},
    History: {screen: HistoryScreen},
    Detail: {screen: DetailHistoryScreen}
  },
  {
    headerMode: 'none',
  },
);

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="home" size={25} />,
      },
    },
    Deals: {
      screen: DealsScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="tags" size={25} />,
      },
    },
    Scan: {
      screen: ScanScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="qrcode" size={50} style={{marginBottom: 20}} />
        ),
      },
    },
    Finance: {
      screen: FinanceScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="money" size={25} />,
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({tintColor, size}) => <Icon name="user" size={25} />,
      },
    },
  },
  {
    tabBarOptions: {
      inactiveTintColor: 'grey',
      activeTintColor: '#4D2A86',
      inactiveColor: 'grey',
      activeColor: '#4D2A86',
      labelStyle: {fontSize: 13, fontWeight: 'bold'},
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppTabNavigator,
      Transaction: TransactionStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
