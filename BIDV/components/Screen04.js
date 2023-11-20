import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [textMoney, setTextMoney] = useState()
  const [textInformation, setInformation] = useState()
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#39B6AB', '#0382AE', '#076CAD']}
        style={styles.buttonlinear}>
        <Pressable style={styles.pressUser}>
          <Image source={{uri : "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235769/Nhom/user_lmj0jz.png"}} style={styles.imgUser1} resizeMode='contain'></Image>
          <View style={styles.rowInfo1}>
            <Text style={styles.textSTK}>6521533024</Text>
            <Text style={styles.textMoney1}>1,525,000 VND</Text>
          </View>
        </Pressable>
      </LinearGradient>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#39B6AB', '#0382AE', '#076CAD']}
        style={styles.buttonlinear}>
        <Pressable style={styles.pressUser}>
          <View style={styles.rowInfo2}>
            <Text style={styles.textSTK}>6521533024</Text>
            <Text style={styles.textName}>Tran Bao Truc</Text>
          </View>
          <Image source={{uri : "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235769/Nhom/flower_kbyowa.png"}} style={styles.imgUser2} resizeMode='contain'></Image>
        </Pressable>
      </LinearGradient>

      <SafeAreaView style={styles.viewInput}>
        <View style={styles.colum1}>
          <Text style={styles.textLabel}>Số tiền</Text>
          <TextInput
            style={styles.textInputMoney}
            value={textMoney}
            onChangeText={setTextMoney}
          ></TextInput>
        </View>
        <Text style={styles.textVND}>VND</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.viewInput}>
        <View style={styles.colum2}>
          <View style={styles.row}>
            <Text style={styles.textLabel}>Nội dung giao dịch</Text>
            <Text style={styles.textCount}>28/120</Text>
          </View>
          <View style={styles.row}>
            <TextInput
              style={styles.textInputMoney}
              value={textInformation}
              onChangeText={setInformation}
              placeholder='TRAN THI YEN NHI chuyen tien'
            ></TextInput>
            <Image source={{uri : "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235770/Nhom/remove_nd8dcq.png"}} style={styles.imgIcon} resizeMode='contain'></Image>           
          </View>
        </View>
      </SafeAreaView>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#39B6AB', '#0382AE', '#076CAD']}
        style={styles.pressNext}>
        <Pressable>
          <Text style={styles.textNext}>Tiếp tục</Text>
        </Pressable>
      </LinearGradient>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonlinear: {
    width: '90%',
    height: '18%',
    borderRadius: 20,
    alignItems: 'center'
  },
  pressUser: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
    height: '100%',
  },
  imgUser1: {
    width: '30%',
    height: '60%',
  },
  rowInfo1: {
    width: '60%',
  },
  textSTK: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white'
  },
  textMoney1: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white'
  },
  rowInfo2: {
    alignItems: 'flex-end',
    width: '70%',
  },
  textName: {
    fontSize: 22,
    fontWeight: '500',
    color: 'white'
  },
  imgUser2: {
    width: '30%',
    height: '60%',
    marginLeft: 20
  },
  viewInput: {
    flexDirection: 'row',
    width: '90%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)'
  },
  textInputMoney: {
    width: '100%',
    fontSize: 18,
    fontWeight: '600'
  },
  colum1: {
    flexDirection: 'column',
    width: '80%',
  },
  textLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.5)',
  },
  textVND: {
    color: '#016AAE',
    fontSize: 18,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imgIcon:{
    width: 18,
    height: 18,
  },
  colum2:{
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textCount:{
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)'
  },
  pressNext: {
    width: '90%',
    height: '7%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textNext: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white'
  },
});
