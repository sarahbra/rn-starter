import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/listScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
	Components: ComponentScreen,
	Lists: ListScreen
  },
  {
    initialRouteName: 'Components',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
