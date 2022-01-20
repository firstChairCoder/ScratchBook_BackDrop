import type { ParamListBase, RouteProp, TabNavigationState } from "@react-navigation/native";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export interface TabNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: BottomTabNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
  state: TabNavigationState<ParamList>;
}

export type Routes = {
  Home: undefined;
  Liked: undefined;
};
