import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.viewTKNguon}>
        <View style={styles.row}>
          <Text style={styles.textGray}>Tài khoản nguồn</Text>
          <Text style={styles.textBlack}>6502825553</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textGray}>Tài khoản thụ hưởng</Text>
          <Text style={styles.textBlue}>6502825553</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textGray}>Tên người thụ hưởng</Text>
          <Text style={styles.textBlue}>TRAN AI PHUNG</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textGray}>Ngân hàng thụ hưởng</Text>
          <Text style={styles.textBlue}>BIDV</Text>
        </View>
      </View>
      <View style={styles.viewGray}></View>
      <View style={styles.viewMoney}>
        <View style={styles.row}>
          <Text style={styles.textGray}>Số tiền</Text>
          <Text style={styles.textBlue}>150,000 VND</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textGray}>Số tiền trích nợ</Text>
          <Text style={styles.textBlue}>150,000 VND</Text>
        </View>
      </View>
      <View style={styles.viewGray}></View>
      <View style={styles.viewInfo}>
        <View style={styles.row}>
          <Text style={styles.textGray}>Ngày giao dịch</Text>
          <Text style={styles.textBlack}>30/09/2023 16:51:29</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textGray}>Nội dung</Text>
          <Text style={[styles.textBlack, {width: '40%'}  ]}>TRAN THI YEN NHI chuyen tien</Text>
        </View>
      </View>
      <View style={styles.viewGray}></View>
      <View style={styles.viewConfirm}>
        <Image source={{uri : "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235770/Nhom/next_bsylq8.png"}} style={styles.imgNext}></Image>
        <Text style={[styles.textBlack, {textAlign: 'center'}]}>Mã xác thực OTP bằng phương thức xác thực Smart OTP cho giao dịch 20098265367 được hiển thị dưới đây.</Text>
        <Text style={styles.textGray}>Mã OTP hiện tại sẽ được đổi sau 30s</Text>
        <View style={styles.row}>
          <Text style={[styles.textBlack, styles.textNumber]}>9</Text>
          <Text style={[styles.textBlack, styles.textNumber]}>5</Text>
          <Text style={[styles.textBlack, styles.textNumber]}>0</Text>
          <Text style={[styles.textBlack, styles.textNumber]}>2</Text>
          <Text style={[styles.textBlack, styles.textNumber]}>1</Text>
          <Text style={[styles.textBlack, styles.textNumber]}>3</Text>
          <Text style={[styles.textBlack, styles.textNumber]}>7</Text>
        </View>
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#39B6AB', '#0382AE', '#076CAD']}
        style={styles.pressNext}>
        <Pressable>
          <Text style={styles.textNext}>Xác nhận</Text>
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
  viewTKNguon: {
    width: '100%',
    alignItems: 'center',
    height: '20%',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  textGray: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontWeight: 'bold',
    fontSize: 18
  },
  textBlack: {
    fontWeight: '500',
    fontSize: 18
  },
  textBlue: {
    color: 'rgba(1, 106, 174, 0.8)',
    fontWeight: '700',
    fontSize: 18
  },
  viewMoney: {
    width: '100%',
    alignItems: 'center',
    height: '10%',
    justifyContent: 'space-between'
  },
  viewGray:{
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: '2%'
  },
  viewInfo:{
    width: '100%',
    alignItems: 'center',
    height: '14%',
    justifyContent: 'space-between',
  },
  imgNext:{
    width: 32,
    height: 32
  },
  viewConfirm:{
    alignItems: 'center'
  },
  textNumber:{
    borderBottomWidth: 1,
    width: 20,
    textAlign: 'center'
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
