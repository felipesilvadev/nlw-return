import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: theme.colors.surface_secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    position: 'relative',
  },
  image: {
    width: 40,
    height: 40,
    opacity: 0.5,
  },
  removeIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  }
});