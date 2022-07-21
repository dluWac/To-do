import React from "react";
import { View, Text, } from "react-native";

import style from './style'

const index =({ pressedValue, Answer,}) =>{

    return(
        <View style={style.container}>
            <Text style={style.Header}>Calc</Text>
            <View style={style.Screen}>
                <View style={style.Prblm}>
                    <Text style={style.Eqtn} >{pressedValue}</Text>
                </View>
                <View style={style.Answer}>
                   {Answer ?  <Text style={style.AnswerTxt}>{Answer}</Text> : null }
                </View>
            </View>
            
      </View>
    )
}
export default index;