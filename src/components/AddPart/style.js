import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    AddPart: {
        flexDirection: 'row',
        width: '90%',
        height: 60,
        backgroundColor: '#3c305e',
        marginLeft: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        position: 'absolute',
        top: 580,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
        
    },
    AddText:{
        color: 'white',
        fontSize: 20,
        fontFamily: 'Roboto-Medium',
        // padding: 10
    },
});
export default style;