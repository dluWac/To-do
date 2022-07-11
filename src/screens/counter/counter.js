import {StyleSheet, Text, View, Pressable, StatusBar} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'#bceaf7'}/>
      <View style={styles.counter}>
        <Pressable
          style={[styles.circle, {backgroundColor: '#dde8eb'}]}
          onPress={() => setCount(count - 1)}>
          <Text style={{fontSize: 20, color: 'white'}}>-</Text>
        </Pressable>
        <View style={[styles.circle, {margin: 10}]}>
          <Text style={{fontSize: 17}}>{count}</Text>
        </View>
        <Pressable
          style={[styles.circle, {backgroundColor: '#dde8eb'}]}
          onPress={() => setCount(count + 1)}>
          <Text style={{fontSize: 15, color: 'white'}}>+</Text>
        </Pressable>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View>
          {count != 0 && (
            <Text style={{marginTop: 10, fontSize: 20, color: '#bfc9c7'}}>
              This is an {count % 2 == 0 ? 'Even' : 'Odd'} no.
            </Text>
          )}
        </View>
        <Pressable
          style={[
            styles.circle,
            {
              backgroundColor: '#dde8eb',
              borderRadius: 5,
              width: 100,
              height: 30,
            },
          ]}
          onPress={() => setCount(count - count)}>
          <Text style={{fontSize: 15, color: 'white'}}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bceaf7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
