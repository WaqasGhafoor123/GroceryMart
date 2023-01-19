/* eslint-disable prettier/prettier */
import { Text, StyleSheet,Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({onPress,text,type = 'PRIMARY',bgColor, fgColor }) => {
  return (
    <Pressable  onPress={onPress}
    style={[styles.container,
    styles['container_${type}'],
    bgColor ? {backgroundColor:bgColor} : {},
    ]}>
      <Text
      style={[styles.text,
            styles['text_${type}'],
            fgColor ? {color:fgColor} : {},
            ]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container:{
       backgroundColor:'#3B71F3',
       width: '100%',

       padding: 15,
       marginTop:10,
       paddingEnd:5,
       alignItems: 'center',
       borderRadius: 20,
       paddingHorizontal: 10,
       marginVertical: 5,
    },

    container_PRIMARY:{
        backgroundColor:'#800000',
    },

    container_SECONDARY:{
      borderColor:'#3B71F3',
      borderWidth: 2,
     },

    container_TERTIARY:{
        backgroundColor:'white',
    },

    text: {
       fontWeight: 'bold',
      color: 'white',
       fontSize: 15,
    },

    text_TERTIARY: {
        color:'gray',
    },

    text_SECONDARY: {
      color:'#3B71F3',
     },
});

export default CustomButton;
