import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, SafeAreaView, TextInput, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useUser } from './UserProvider'; 

export default function Screen03({ navigation, route }) {
  const [textSTK, setSTK] = useState('')
  const [textSearch, setTextSearch] = useState()
  const { user } = useUser();
  const [userDisplay, setUserDisplay] = useState(user.listbeneficiary || [])
  const [selectedButtonUser, setSelectedButtonUser] = useState('recently');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isNoiBoPressed, setIsNoiBoPressed] = useState(true);
  const [isDenTKPressed, setIsDenTKPressed] = useState(false);
  const [isDenSTPressed, setIsDenSTPressed] = useState(false);


  const handleGetUserRecently = () => {
    if (textSTK.length <= 0) {
      setUserDisplay(user.listbeneficiary || []);
      setSelectedButtonUser("recently")
    }
  };

  const handleGetUserSave = () => {
    if (textSTK.length <= 0) {
      const savedBeneficiaries = user.listbeneficiary.filter(item => item.save);
      setUserDisplay(savedBeneficiaries);
      setSelectedButtonUser("saved")
    }
  };

  const searchSTK = () => {
    if (textSTK.length > 0) {
      const userFindBySTK = user.listbeneficiary.filter(item => item.stk.toString() === textSTK)
      if (userFindBySTK) {
        setUserDisplay(userFindBySTK)
      }
      else {
        alert("Không tìm thấy")
      }
    }
    else {
      handleGetUserRecently()
    }
  }
  const searchTen = () =>{
    if(textSearch.length > 0){
      const textName = textSearch.toLowerCase()
      const userFindByName = user.listbeneficiary.filter(item => item.name.toString().toLowerCase().includes(textName))
      if(userFindByName){
        setUserDisplay(userFindByName)
      }
      else {
        alert("Không tìm thấy")
      }
    }
  }
  const handleButtonNext = () => {
    if (selectedUser) {
      navigation.navigate(
        "Screen04",
        {
          userNhanTien: selectedUser,
          
        },
      )
    }
    else {
      alert("Bạn chưa chọn người nào")
    }
  }
  const saveUser = item => {
    setSelectedUser(item)
  }
  const isSelectedUser = item => {
    return selectedUser && selectedUser.idbeneficiary === item.idbeneficiary;
  }


  return (
    <View style={styles.container}>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#39B6AB', '#0382AE', '#076CAD']}
        style={styles.viewButtonSelect1}>
        <Pressable style={[styles.pressButton1, { backgroundColor: isNoiBoPressed ? 'rgba(217, 217, 217, 0.5)' : 'transparent' }]}
          onPress={() => {
            setIsNoiBoPressed(true)
            setIsDenSTPressed(false)
            setIsDenTKPressed(false)
          }}
        >
          <Text style={styles.textButton1}>Nội bộ BIDV</Text>
        </Pressable>
        <Pressable style={[styles.pressButton1, { backgroundColor: isDenTKPressed ? 'rgba(217, 217, 217, 0.5)' : 'transparent' }]}
          onPress={() => {
            setIsDenTKPressed(true)
            setIsDenSTPressed(false)
            setIsNoiBoPressed(false)
          }}>
          <Text style={styles.textButton1}>Ngoài BIDV đến tài khoản</Text>
        </Pressable>
        <Pressable style={[styles.pressButton1, { backgroundColor: isDenSTPressed ? 'rgba(217, 217, 217, 0.5)' : 'transparent' }]}
          onPress={() => {
            setIsDenSTPressed(true)
            setIsDenTKPressed(false)
            setIsNoiBoPressed(false)
          }}>
          <Text style={styles.textButton1}>Ngoài BIDV đến số thẻ</Text>
        </Pressable>
      </LinearGradient>

      <SafeAreaView style={styles.viewInputSTK}>
        <TextInput
          style={styles.textSTK}
          value={textSTK}
          onChangeText={setSTK}
          placeholder='Số tài khoản/Số thẻ/Tài khoản định danh'
        ></TextInput>
        <Pressable onPress={searchSTK}>
          <Image source={{ uri: "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235770/Nhom/search_tqbhzj.png" }} style={styles.imgIcon} resizeMode='contain'></Image>
        </Pressable>
      </SafeAreaView>

      <View style={styles.viewButtonSelect2}>
        <Pressable style={
          styles.pressButton2}
          onPress={handleGetUserRecently}>
          <Text
            style={[styles.textButton2,
            {
              color:
                selectedButtonUser === 'recently' ? 'rgba(1, 106, 174, 0.8)' : 'rgba(0, 0, 0, 0.5)',
            }]}
          >Gần đây</Text>
        </Pressable>
        <Pressable style={
          styles.pressButton2}
          onPress={handleGetUserSave}>
          <Text style={[styles.textButton2,
          {
            color:
              selectedButtonUser === 'saved' ? 'rgba(1, 106, 174, 0.8)' : 'rgba(0, 0, 0, 0.5)',
          }]}>Mẫu đã lưu</Text>
        </Pressable>
      </View>

      <SafeAreaView style={styles.viewInputSearch}>
        <TextInput
          style={styles.textSearch}
          onChangeText={setTextSearch}
          value={textSearch}
          placeholder='Tìm kiếm thụ hưởng'
        ></TextInput>
        <Pressable onPress={searchTen}>
          <Image source={{ uri: "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235770/Nhom/search_tqbhzj.png" }} style={styles.imgIcon} resizeMode='contain'></Image>
        </Pressable>
      </SafeAreaView>
      <View style={styles.viewUsers}>
        <FlatList style={styles.flatList}
          data={userDisplay}
          keyExtractor={(item) => item.idbeneficiary}
          renderItem={({ item }) => (
            <Pressable onPress={() => saveUser(item)}
              style={{
                backgroundColor: isSelectedUser(item) ? 'rgba(0, 0, 0, 0.4)' : 'transparent'
              }}
            >
              <View style={styles.viewUser}>
                <Image source={{ uri: "https://res.cloudinary.com/dg1u2asad/image/upload/v1700235769/Nhom/user_lmj0jz.png" }} style={styles.imgFlower} resizeMode='contain'></Image>
                <View style={styles.infoUser}>
                  <Text style={styles.textname}>{item.name}</Text>
                  <Text style={styles.textstk}>{item.stk}</Text>
                  <Text style={styles.textbank}>{item.bank}</Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#39B6AB', '#0382AE', '#076CAD']}
        style={styles.pressNext}>
        <Pressable
          onPress={handleButtonNext}
        >
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
    height: '100%',
    marginRight: 5,
    justifyContent: 'center',
    borderRadius: 10
  },
  textButton1: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white'
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
  viewButtonSelect2: {
    flexDirection: 'row',
    width: '90%',
    height: '6%',
    justifyContent: 'space-evenly'
  },
  pressButton2: {
    justifyContent: 'center',
    width: '33%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },
  textButton2: {
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
    height: '100%',
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
    height: '100%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: 10,
    alignSelf: 'center'

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
  viewUsers: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flatList: {
    width: '100%',
    height: '100%',

  }

});
