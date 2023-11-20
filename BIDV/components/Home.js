import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, Modal, TouchableWithoutFeedback, SafeAreaView, FlatList , Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';



export default function Home({ navigation, route }) {
  const { user } = route.params || {}
  const [modalVisible, setModalVisible] = useState(false);
  const [icon, setIcon] = useState([])
  const [muaSam, setMuaSam] = useState([])
  const [yeuThich, setYeuThich] = useState([])
  const [thanhToan, setThanhToan] = useState([])
  

  const fetchAutoData = () => {
    fetch("https://654857d8dd8ebcd4ab22bfe8.mockapi.io/BIDV_icon")
      .then((respone) => respone.json())
      .then((json) => {
        setIcon(json);
      });
  };
  useEffect(() => {
    fetchAutoData();
  }, []);

  const filterMuaSam = () => {
    const ms = icon.filter(data => data.type.includes("muaSam"));
    setMuaSam(ms);
  }
  const filterYeuThich = () => {
    const yt = icon.filter(data => data.type === 'yeuThich');
    setYeuThich(yt);
  }
  const filterThanhToan = () => {
    const yt = icon.filter(data => data.type.includes("thanhToan"));
    setThanhToan(yt);
  }

  useEffect(() => {
    filterYeuThich();
    filterMuaSam();
    filterThanhToan();
  }, [icon]);



  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>

      <View style={styles.header} >
        <ImageBackground
          source={{ uri: 'https://res.cloudinary.com/doqbelkif/image/upload/v1700155179/DeTaiBIDV/background_lbv6g8.png' }}
          style={[styles.background, { width: '100%', height: '100%', borderRadius: 5 }]}>
          <View style={styles.row}>
            <View style={styles.userImg}>
              <Image style={{ width: 50, height: 50, borderRadius: 5 }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700153642/DeTaiBIDV/user_req99h.png" }} />
            </View>
            <View style={styles.info}>
              <Text style={{ color: '#fff', fontWeight: 500, fontSize: 16 }}>Chào buổi chiều</Text>
              <Text style={{ color: '#fff', fontWeight: 500, fontSize: 18 }}>{user.name}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <View style={styles.account}>
          <View style={[styles.row, styles.canGiua]}>
            <View style={[styles.column, styles.detail]}>
              <Text style={{ color: 'gray', fontWeight: 500, fontSize: 18 }}>Tài khoản thanh toán</Text>
              <View style={styles.row}>
                <Text style={{ color: 'black', fontWeight: 500, fontSize: 18, paddingRight: 10 }}>{user.id}</Text>
                <Image style={{ width: 24, height: 24, borderRadius: 5 }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700157442/DeTaiBIDV/arrow_lmjruq.png" }} />
              </View>

            </View>
            <View style={styles.list}>
              <Pressable style={styles.ds}>
                <View style={styles.row}>
                  <Text style={{ color: 'black', fontWeight: 400, fontSize: 15 }}>Danh sách</Text>
                  <Image style={{ width: 13, height: 13, borderRadius: 5, marginTop: 5 }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700158170/DeTaiBIDV/right-arrow_grm8sq.png" }} />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={[styles.row, { width: '100%', justifyContent: 'space-around', paddingTop: 10 }]}>
          <Pressable style={[styles.button, styles.chuyenTien]}
            onPress={  () => {
              navigation.navigate(
                'Screen03', { user: user }
              
            )}}
          >
            <Image style={{ width: 50, height: 50, borderRadius: 5, marginTop: 5 }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700154115/DeTaiBIDV/data-transfer_dbq4do.png" }} />
            <Text style={{ color: '#fff', fontWeight: 400, fontSize: 18 }}>Chuyển tiền</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.dichVuThe]}>
            <Image style={{ width: 50, height: 50, borderRadius: 5, marginTop: 5 }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700154111/DeTaiBIDV/credit-card_1_tpcj7l.png" }} />
            <Text style={{ color: '#fff', fontWeight: 400, fontSize: 18 }}>Dịch vụ thẻ</Text>
          </Pressable>
        </View>
        <View style={[styles.row, { width: '100%', justifyContent: 'space-around', paddingTop: 10 }]}>
          <Pressable style={[styles.button, styles.tietKiem]}>
            <Image style={{ width: 50, height: 50, borderRadius: 5, marginTop: 5 }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700154108/DeTaiBIDV/piggy-bank_1_d6nkif.png" }} />
            <Text style={{ color: '#fff', fontWeight: 400, fontSize: 18 }}>Tiết kiệm</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.muaSam]}
            onPress={openModal}
          >
            <Image style={{ width: 50, height: 50, borderRadius: 5, marginTop: 5 }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700154110/DeTaiBIDV/shopping-cart_1_o4ro5g.png" }} />
            <Text style={{ color: '#fff', fontWeight: 400, fontSize: 18 }}>Mua sắm</Text>
          </Pressable>
        </View>

      </View>

      {/* Dịch vụ yêu thích */}

      <View style={styles.dichVuYeuThich}>
        <View style={[styles.row, { justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }]}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Dịch vụ yêu thích</Text>
          <Pressable >
            <Text style={{ color: '#2F629A', fontWeight: 'bold', fontSize: 20 }}>Tùy chỉnh</Text>
          </Pressable>
        </View>
        <View style={styles.listIcon}>
          <View style={[styles.twoButton, styles.rowDV]}>
            <SafeAreaView style={{ width: '100%' }}>
              <FlatList
                data={yeuThich}
                numColumns={3}
                renderItem={({ item }) => (

                  <View style={[styles.oneButton, { width: '33%', marginTop: 20 }]}>
                    <Image style={{ width: 55, height: 55, borderRadius: 5, margin: 'auto' }} source={{ uri: item.image }} />
                    <Text style={styles.textDV}>{item.name}</Text>
                  </View>

                )}
              />

            </SafeAreaView>
          </View>

        </View>
      </View>

      {/* Dịch vụ thanh toán */}

      <View style={styles.dichVuThanhToan}>
        <View style={[styles.row, { justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }]}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Dịch vụ thanh toán</Text>
          <Pressable >
            <Text style={{ color: '#2F629A', fontWeight: 'bold', fontSize: 20 }}>Tùy chỉnh</Text>
          </Pressable>
        </View>
        <View style={styles.listIcon}>
          <View style={[styles.twoButton, styles.rowDV]}>
            <SafeAreaView style={{ width: '100%' }}>
              <FlatList
                data={thanhToan}
                numColumns={3}
                renderItem={({ item }) => (

                  <View style={[styles.oneButton, { width: '33%', marginTop: 20 }]}>
                    <Image style={{ width: 55, height: 55, borderRadius: 5, margin: 'auto' }} source={{ uri: item.image }} />
                    <Text style={styles.textDV}>{item.name}</Text>
                  </View>

                )}
              />

            </SafeAreaView>
          </View>

        </View>
      </View>


      {/* Footer  */}
      <View style={styles.footer}>
        <View style={styles.twoButton}>
          <View style={styles.oneButtonLeft}>
            <Image style={{ width: 35, height: 35, borderRadius: 5, margin: 'auto' }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700207282/DeTaiBIDV/home_seynra.png" }} />
            <Text style={{ color: 'gray', fontWeight: 400, fontSize: 14 }}>Trang chủ</Text>
          </View>
          <View style={styles.oneButton}>
            <Image style={{ width: 35, height: 35, borderRadius: 5, margin: 'auto' }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700207096/DeTaiBIDV/plumeria_qhgedi.png" }} />
            <Text style={{ color: 'gray', fontWeight: 400, fontSize: 14 }}>Đổi quà</Text>
          </View>
        </View>
        <View style={[styles.oneButton, { marginBottom: '12%' }]}>
          <Image style={{ width: 55, height: 55, borderRadius: 5, margin: 'auto' }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700207279/DeTaiBIDV/qr-scan_oz9xtq.png" }} />
          <Text style={{ color: 'gray', fontWeight: 400, fontSize: 14 }}>Quét QR</Text>
        </View>
        <View style={styles.twoButton}>
          <View style={[styles.oneButtonLeft]}>
            <Image style={{ width: 35, height: 35, borderRadius: 5, margin: 'auto' }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700207098/DeTaiBIDV/notice_mpclcr.png" }} />
            <Text style={{ color: 'gray', fontWeight: 400, fontSize: 14 }}>Thông báo</Text>
          </View>
          <View style={styles.oneButton}>
            <Image style={{ width: 35, height: 35, borderRadius: 5, margin: 'auto' }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700207097/DeTaiBIDV/setting_bzkibz.png" }} />
            <Text style={{ color: 'gray', fontWeight: 400, fontSize: 14 }}>Cài đặt</Text>
          </View>
        </View>
      </View>





      {/* Modal */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.row, { justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }]}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Mua sắm</Text>
            <Pressable
              onPress={closeModal}
            >
              <Text style={{ color: '#2F629A', fontWeight: 'bold', fontSize: 20 }}>Close</Text>
            </Pressable>
          </View>
          <View style={styles.listIcon}>


            <View style={styles.listIcon}>
              <View style={[styles.twoButton, styles.rowDV]}>
                <SafeAreaView style={{ width: '100%' }}>
                  <FlatList
                    data={muaSam}
                    numColumns={3}
                    renderItem={({ item }) => (

                      <View style={[styles.oneButton, { width: '33%', marginTop: 20 }]}>
                        <Image style={{ width: 55, height: 55, borderRadius: 5, margin: 'auto' }} source={{ uri: item.image }} />
                        <Text style={styles.textDV}>{item.name}</Text>
                      </View>

                    )}
                  />

                </SafeAreaView>
              </View>

            </View>


          </View>
        </View>
      </Modal>


    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E7E7',
    width: '100%',
    height: '180%',

  },
  header: {
    width: '100%',
    height: 350
  },
  background: {
    width: '100%',
    height: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  userImg: {
    width: 70,
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  info: {
    width: '50%',
    height: 70,
    display: 'flex',
    justifyContent: "center",
    // alignItems:'center'
  },
  body: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E7E7',

  },
  account: {
    height: 70,
    width: '90%',
    backgroundColor: '#fff',
    marginTop: -35,
    borderRadius: 20
  },
  detail: {
    height: 70,
    justifyContent: 'center',
    paddingLeft: 15
  },
  ds: {
    backgroundColor: '#F1F1F1',
    height: 35,
    width: 100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',

  },
  list: {
    justifyContent: 'center',

  },
  canGiua: {
    justifyContent: 'space-around'
  },
  button: {
    height: 100,
    width: '45%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chuyenTien: {
    backgroundImage: 'linear-gradient(to  bottom right,#0B50A1, #4599D6)',
    borderBottomEndRadius: 0
  },
  dichVuThe: {
    backgroundImage: 'linear-gradient(to  bottom right,#0B50A1, #4599D6)',
    borderBottomStartRadius: 0
  },
  tietKiem: {
    backgroundImage: 'linear-gradient(to  bottom right,#057975, #2BC8C2)',
    borderStartEndRadius: 0
  },
  muaSam: {
    backgroundImage: 'linear-gradient(to bottom right,#057975, #2BC8C2)',
    borderStartStartRadius: 0
  },
  footer: {
    height: 70,
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  twoButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',


  },
  oneButtonLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    paddingRight: 15
  },
  oneButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  // closeButton: {
  //   backgroundColor: 'blue',
  //   padding: 10,
  //   margin: 20,
  //   borderRadius: 5,
  // },
  modalContainer: {
    // flex:1,
    // justifyContent:'flex-end',
    // alignContent:'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxHeight: '60%',
    backgroundColor: '#fff',
    borderStartStartRadius: 20,
    borderStartEndRadius: 20
  },
  listIcon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    width: '100%',
  },
  dichVuYeuThich: {
    backgroundColor: '#E8E7E7',
    marginTop: 20,
    width: '100%',
    marginBottom: 30


  },
  rowMuaSam: {
    marginTop: 30,
    height: 90
  },
  rowDV: {
    width: '100%'
  },
  textDV: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center'
  },
  dichVuThanhToan: {
    backgroundColor: '#E8E7E7',
    width: '100%',
    // marginTop:20,
    paddingBottom: 30
  },

});
