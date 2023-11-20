import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Screen03() {
  const [textSTK, setSTK] = useState()
  const [textSearch, setTextSearch] = useState()

  return (
    <View style={styles.container}>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#39B6AB', '#0382AE', '#076CAD']}
        style={styles.viewButtonSelect1}>
        <Pressable style={styles.pressButton1}>
          <Text style={styles.textButton1}>Nội bộ BIDV</Text>
        </Pressable>
        <Pressable style={styles.pressButton1}>
          <Text style={styles.textButton1}>Ngoài BIDV đến tài khoản</Text>
        </Pressable>
        <Pressable style={styles.pressButton1}>
          <Text style={styles.textButton1}>Ngoài BIDV đến số thẻ</Text>
        </Pressable>
      </LinearGradient>

      <SafeAreaView style={styles.viewInputSTK}>
        <TextInput
          style={styles.textSTK}
          onChangeText={setSTK}
          value={textSTK}
          placeholder='Số tài khoản/Số thẻ/Tài khoản định danh'
        ></TextInput>
        <Image source={{uri : "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235769/Nhom/contact-book_veecoh.png"}} style={styles.imgIcon} resizeMode='contain'></Image>
      </SafeAreaView>

      <View style={styles.viewPhoneBook}>
        <Pressable style={styles.pressPhoneBook1}>
          <Text style={styles.textPhoneBook1}>Chuyển nhanh từ danh bạ đã lưu</Text>
        </Pressable>
        <Pressable style={styles.pressPhonebook2}>
          <Text style={styles.textPhoneBook2}>Tất cả danh bạ</Text>
        </Pressable>
      </View>

      <View style={styles.viewButtonSelect2}>
        <Pressable style={styles.pressButton2}>
          <Text style={styles.textButton2}>Danh bạ</Text>
        </Pressable>
        <Pressable style={styles.pressButton2}>
          <Text style={styles.textButton2}>Gần đây</Text>
        </Pressable>
        <Pressable style={styles.pressButton2}>
          <Text style={styles.textButton2}>Mẫu đã lưu</Text>
        </Pressable>
      </View>

      <SafeAreaView style={styles.viewInputSearch}>
        <Image source={{uri : "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235770/Nhom/search_tqbhzj.png"}} style={styles.imgIcon} resizeMode='contain'></Image>
        <TextInput
          style={styles.textSearch}
          onChangeText={setTextSearch}
          value={textSearch}
          placeholder='Tìm kiếm thụ hưởng'
        ></TextInput>
      </SafeAreaView>
      <View style={styles.viewUsers}>
        <View style={styles.viewUser}>
          <Image source={{uri : "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235769/Nhom/flower_kbyowa.png"}} style={styles.imgFlower} resizeMode='contain'></Image>
          <View style={styles.infoUser}>
            <Text style={styles.textname}>Trần Bảo Trúc</Text>
            <Text style={styles.textstk}>6502825553</Text>
            <Text style={styles.textbank}>BIDV</Text>
          </View>
        </View>
      </View>

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
  viewButtonSelect1: {
    width: '90%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
  },
  pressButton1: {
    width: '30%',
    height: '90%',
    marginRight: 5,
    justifyContent: 'center'
  },
  textButton1: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center'
  },
  viewInputSTK: {
    width: '95%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)'
  },
  textSTK: {
    width: '80%',
    height: '90%',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: 'bold'
  },
  imgIcon: {
    width: 30,
    height: 30
  },
  viewPhoneBook: {
    flexDirection: 'row',
    width: '100%',
    height: '6%',
    backgroundColor: 'rgba(217,217,217,0.5)',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textPhoneBook1: {
    fontSize: 15,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  textPhoneBook2: {
    fontSize: 15,
    fontWeight: '700',
    color: '#006CAD'
  },
  viewButtonSelect2: {
    flexDirection: 'row',
    width: '90%',
    height: '6%',
    justifyContent: 'space-between'
  },
  pressButton2: {
    justifyContent: 'center',
    width: '33%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },
  textButton2: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center'
  },
  viewInputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    height: '7%',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15
  },
  textSearch: {
    width: '80%',
    paddingLeft: 10,
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.6)',
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
  imgFlower: {
    width: '30%',
    height: '100%'
  },
  viewUser: {
    flexDirection: 'row',
    width: '80%',
    height: '25%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: 10,

  },
  textname: {
    fontSize: 18,
    fontWeight: '700'
  },
  textstk: {
    fontSize: 16,
    fontWeight: '600'
  },
  textbank: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.5)'
  },
  viewUsers:{
    width: '100%',
    height: '40%',
    alignItems: 'center'
  }

});
