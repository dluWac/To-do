import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    NumStyle: {
        width: 100,
        height: 95,
        alignItems: 'center',
        justifyContent: 'center',
      },
      KeyPad: item =>({
        color: !item.Colr ? "#fff" : item.Colr,                //NOTE the Condition done here......
        fontSize: 20,
      }),
})
export default style