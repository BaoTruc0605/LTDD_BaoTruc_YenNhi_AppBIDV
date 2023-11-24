import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import { useUser } from './UserProvider'; 

export default function Screen07({ navigation, route }) {
    const { user } = useUser();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewExit}>
                <Pressable style={styles.pressExit}>
                    <Text style={styles.textExit}>Thoát {'>'}</Text>
                </Pressable>
            </View>
            <View style={styles.viewUser}>
                <Image source={{ uri: 'https://res.cloudinary.com/dg1u2asad/image/upload/v1700235769/Nhom/user_lmj0jz.png' }} style={styles.imgUser}></Image>
                <Text style={styles.textHi}>Chào bạn!</Text>
                <Text style={styles.textName}>{user.name}</Text>
            </View>
            <View style={styles.viewGray}></View>
            <View style={[styles.viewIndividual, { height: '23%', }]}>
                <Text style={styles.textBold}>Cá nhân</Text>
                <View style={styles.row}>
                    <Text style={styles.textNomal}>Đổi ảnh đại diện</Text>
                    <Image source={{ uri: 'https://res.cloudinary.com/dg1u2asad/image/upload/v1700679175/Nhom/user_1_frqwv3.png' }} style={styles.imgIcon}></Image>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textNomal}>Đổi ảnh nền</Text>
                    <Image source={{ uri: 'https://res.cloudinary.com/dg1u2asad/image/upload/v1700679173/Nhom/image-gallery_urbshp.png' }} style={styles.imgIcon}></Image>
                </View>
            </View>
            <View style={styles.viewGray}></View>
            <View style={[styles.viewIndividual, { height: '39%' }]}>
                <Text style={styles.textBold}>Cài đặt nâng cao</Text>
                <View style={styles.row}>
                    <Text style={styles.textNomal}>Danh bạ chuyển tiền</Text>
                    <Image source={{ uri: 'https://res.cloudinary.com/dg1u2asad/image/upload/v1700679172/Nhom/contact-book_1_bvimoo.png' }} style={styles.imgIcon}></Image>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textNomal}>Mẫu thanh toán</Text>
                    <Image source={{ uri: 'https://res.cloudinary.com/dg1u2asad/image/upload/v1700679170/Nhom/copy_ecqome.png' }} style={styles.imgIcon}></Image>
                </View>
                <Pressable onPress={() => {
                    navigation.navigate('Screen08', { user: user })
                }}>
                    <View style={styles.row}>
                        <Text style={styles.textNomal}>Đổi mật khẩu</Text>
                        <Image source={{ uri: 'https://res.cloudinary.com/dg1u2asad/image/upload/v1700679167/Nhom/padlock_1_ydsvi9.png' }} style={styles.imgIcon}></Image>
                    </View>
                </Pressable>
                <View style={styles.row}>
                    <Text style={styles.textNomal}>Cài đặt đăng nhập</Text>
                    <Image source={{ uri: 'https://res.cloudinary.com/dg1u2asad/image/upload/v1700679166/Nhom/lockdown_o73kr6.png' }} style={styles.imgIcon}></Image>
                </View>
            </View>
            {/* Footer  */}
            {/* <View style={styles.footer}>
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
            </View> */}
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
        width: '100%'
    },
    viewExit: {
        alignItems: 'flex-end',
        width: '100%',
        height: '5%'
    },
    pressExit: {
        backgroundColor: 'rgba(245, 196, 196, 0.5)',
        height: '100%',
        width: '25%',
        borderRadius: 10,
        justifyContent: 'center',
    },
    textExit: {
        color: '#F02525',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    viewUser: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%'
    },
    imgUser: {
        width: 60,
        height: 60
    },
    textHi: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.5)',
        fontWeight: 'bold'
    },
    textName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    viewGray: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        width: '100%',
        height: '1%'
    },
    viewIndividual: {
        justifyContent: 'flex-start',
        width: '80%',
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 18
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    imgIcon: {
        width: 32,
        height: 32
    },
    textNomal: {
        fontSize: 16,
        fontWeight: '500'
    },
    footer: {
        height: '9%',
        width: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0
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
    closeButton: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 20,
        borderRadius: 5,
    },

})