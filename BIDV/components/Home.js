import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native';

export default function App() {
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
              <Text style={{ color: '#fff', fontWeight: 500, fontSize: 18 }}>TRẦN BẢO TRÚC</Text>
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
                <Text style={{ color: 'black', fontWeight: 500, fontSize: 18, paddingRight: 10 }}>6521533024</Text>
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
          <Pressable style={styles.chuyenTien}>
            <Image style={{ width: 50, height: 50, borderRadius: 5, marginTop: 5 }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700154115/DeTaiBIDV/data-transfer_dbq4do.png" }} />
            <Text style={{ color: '#fff', fontWeight: 400, fontSize: 18 }}>Chuyển tiền</Text>
          </Pressable>
          <Pressable style={styles.chuyenTien}>
            <Image style={{ width: 50, height: 50, borderRadius: 5, marginTop: 5 }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700154111/DeTaiBIDV/credit-card_1_tpcj7l.png" }} />
            <Text style={{ color: '#fff', fontWeight: 400, fontSize: 18 }}>Dịch vụ thẻ</Text>
          </Pressable>
        </View>  
        <View style={[styles.row, { width: '100%', justifyContent: 'space-around', paddingTop: 10 }]}>
          <Pressable style={styles.chuyenTien}>
            <Image style={{ width: 50, height: 50, borderRadius: 5, marginTop: 5 }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700154108/DeTaiBIDV/piggy-bank_1_d6nkif.png" }} />
            <Text style={{ color: '#fff', fontWeight: 400, fontSize: 18 }}>Tiết kiệm</Text>
          </Pressable>
          <Pressable style={styles.chuyenTien}>
            <Image style={{ width: 50, height: 50, borderRadius: 5, marginTop: 5 }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700154110/DeTaiBIDV/shopping-cart_1_o4ro5g.png" }} />
            <Text style={{ color: '#fff', fontWeight: 400, fontSize: 18 }}>Mua sắm</Text>
          </Pressable>
        </View>  
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E7E7',
    width: '100%',
    height: '100%'
  },
  header: {
    width: '100%',
    height: '50%',
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
    alignItems: 'center'
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
  chuyenTien: {
    backgroundColor: 'blue',
    height: 100,
    width: '45%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
