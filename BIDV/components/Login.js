import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [textTK, setTextTK] = useState()
  const [textMK, setTextMK] = useState()
  return (
    <View style={styles.container}>
      <View style={styles.viewImgClose}>
        <Image source={{ uri: "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235769/Nhom/close_ya94yi.png" }} style={styles.imgIcon} resizeMode='contain'></Image>
      </View>
      <View style={styles.viewImgFlower}>
        <Image source={{uri : "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235769/Nhom/flower_kbyowa.png"}} style={styles.imgFlower}  resizeMode='contain'></Image>
      </View>
      <SafeAreaView style={styles.viewInput}>
      <Image source={{ uri: "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235770/Nhom/profile-user_hgmabq.png" }} style={styles.imgIcon} resizeMode='contain'></Image>
        <TextInput
        value={textTK}
        onChangeText={setTextTK}
        placeholder='Tài khoản'
        style={styles.textInput}>
        </TextInput>
      </SafeAreaView>
      <SafeAreaView style={styles.viewInput}>
      <Image source={{ uri: "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235770/Nhom/padlock_jjjghm.png" }} style={styles.imgIcon} resizeMode='contain'></Image>
        <TextInput
        value={textMK}
        onChangeText={setTextMK}
        placeholder='Mật khẩu'
        style={[styles.textInput, {width: '70%'}]}>
        </TextInput>
        <Image source={{uri : "https://res.cloudinary.com/dg1u2asad/image/upload/v1700238352/Nhom/eye_t8ob02.png"}} style={{width: 28, height: 28}} resizeMode='contain'></Image>
      </SafeAreaView>
      <Pressable style={styles.pressForgotMK}>
        <Text style={styles.textBlue}>Quên mật khẩu</Text>
        </Pressable>
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#39B6AB', '#0382AE', '#076CAD']}
        style={styles.pressNext}>
        <Pressable>
          <Text style={styles.textNext}>Đăng nhập</Text>
        </Pressable>
      </LinearGradient>
      <Pressable style={styles.pressDK}>
        <Text style={styles.textBlue}>Đăng ký</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewImgClose:{
    width: '90%',
    height: '8%',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  imgIcon: {
    width: 32,
    height: 32,
  },
  viewImgFlower:{
    width: '90%',
    height: '15%',
    alignItems: 'center',
  },
  imgFlower:{
    width: '25%',
    height: '100%'
  },
  viewInput:{
    flexDirection: 'row',
    width: '80%',
    height: '8%', 
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    marginBottom: 10
  },
  textInput:{
    height: '90%',
    width: '80%',
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: 'bold',
    fontSize: 16
  },
  pressForgotMK:{
    width: '80%',
    height: '10%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textBlue:{
    color: '#036BAD',
    fontWeight: 'bold',
    fontSize: 16
  },
  pressDK:{
    height: '10%',
    justifyContent: 'center'
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
