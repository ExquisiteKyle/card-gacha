import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type Login = {
  email: string;
  password: string;
};

export type Register = {
  username: string;
} & Login;

export type RootStackParamList = {
  Home: undefined;
  Index: undefined;
};

export type HomeProp = NativeStackScreenProps<RootStackParamList, "Home">;
export type IndexProp = NativeStackScreenProps<RootStackParamList, "Index">;
