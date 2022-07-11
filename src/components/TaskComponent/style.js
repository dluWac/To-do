import { StyleSheet } from "react-native";
// import style from "../../screens/ToDoApp/style";

const style = StyleSheet.create({
    Task:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
      },
    MainHead: {
        color: 'white',
        fontSize: 30,
        fontWeight: '400',
        paddingHorizontal: 10,
        marginTop: 15,
    },
    TextPart: {
        width:"80%",
        padding:10,
        flexDirection: 'row',
        backgroundColor: '#3c305e',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginLeft: 10,
        
        
      },
      deleteImg: {
        height: 40, 
        width: 40,
        tintColor: 'white',

    },
})
export default style