import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import style from './style';
import Task from '../../components/TaskComponent'
import Add from '../../components/AddPart'

const index = () => {
  return (
    <View style={style.container}>
      <Text style={style.MainHead}>TODO LIST</Text>
        <Task />
        <Add/>
    </View>
  );
};

export default index;
