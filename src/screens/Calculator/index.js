import React, {StrictMode, useState, useEffect} from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';

import style from './style';
import constants from '../../constants/constants';
import KeyPad from '../../components/Keyboard';
import Screen from '../../components/OutputScreen';
 
const index = () => {
  const [pressedValue, setPressedValue] = useState('');
  const [Answer, setAnswerValue] = useState();
  // console.log("Numbrsss ====== ",Answer);

  const eqtion = () => {
    let ans = eval(pressedValue)
    // {eval(pressedValue) === '0' ? setPressedValue('0') : ans }
    setAnswerValue(ans);
  }; 

  const onPressedValue = (item, index) => {
    // console.log("data======", item.number)

  let tempVal = pressedValue+ item?.number

    if (item?.type) {
      // console.log('if====== ');
      if (item.type === 'clear') {
        setPressedValue('');
        setAnswerValue('');
      } else if (item.number === '=' ){
        eqtion();
      }
    } else {
      // console.log('else====== ');

      if (!Answer) {
      // console.log('else if ====== ');
      if(tempVal.length >1 && tempVal.charAt(0) == 0 && tempVal.charAt(1) != ".") {
        let temp = tempVal.slice(1, tempVal.length)
        setPressedValue(temp)
      }   else {
        setPressedValue(state => state += item.number)
        
      }
      } else {
      // console.log('else else ====== ');

        setPressedValue(Answer + item.number);
        setAnswerValue('');
      }
    }
  };

  // useEffect(() => {
  //   if(pressedValue.length >1 && pressedValue.charAt(0) == 0 && pressedValue.charAt(1) != ".") {
  //     let temp = pressedValue.slice(1, pressedValue.length)
  //     setPressedValue(temp)
  //   }
  // }, [pressedValue])
  return (
      <View style={style.container}>
        <StatusBar backgroundColor={'#22252d'}/>
        <Screen
          pressedValue={pressedValue}
          setAnswerValue={setAnswerValue}
          Answer={Answer}
        />
        <View style={style.KeyBoard}>
          {constants.keyBoardItems.map((item, index) => {
            return (
              <KeyPad
                item={item}
                onPressedValue={onPressedValue}
                setPressedValue={setPressedValue}
                pressedValue={pressedValue}
              />
            );
          })}
        </View>
      </View>
  );
};

export default index;
