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

export enum PAGE {
  HOME = "home",
  ADMIN = "admin",
}

export type CardProps = {
  name: string;
  description: string;
  rarity: number;
  attack: number;
  defense: number;
  image_url: string;
};
