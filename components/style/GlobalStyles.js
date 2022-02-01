import { StyleSheet } from "react-native";
import Colors from './Colors';

/*
** Global unique styles for entire app
*/
export default StyleSheet.create({
  submitBtn: {
    width: "100%",
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  cancelBtn: {
    width: "100%",
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  textInput: {
    textAlign: "center",
    backgroundColor: Colors.textInput,
  },
  roundFormat: {
    borderRadius: 25,
    height: 50,
  }
});
