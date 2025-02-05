import { Alert, Platform } from "react-native";

export const genericAlertActions = [{ text: "Close", onPress: () => {} }];
const customAlertPolyfill = (
  title: string,
  description: string,
  options: Array<{
    text: string;
    onPress: () => void;
    style?: string;
  }>
) => {
  const result = window.confirm(
    [title, description].filter(Boolean).join("\n")
  );

  result
    ? options.find(({ style }) => style !== "cancel")?.onPress()
    : options.find(({ style }) => style === "cancel")?.onPress();
};

export const customAlert =
  Platform.OS === "web" ? customAlertPolyfill : Alert.alert;

export const responseHandler = (
  result: void | Response,
  positiveCallback: () => void
) => {
  if (!result) return;
  if (result.ok) return positiveCallback();
  result
    .json()
    .then((response) =>
      customAlert("Failed", response.message, genericAlertActions)
    );
};
