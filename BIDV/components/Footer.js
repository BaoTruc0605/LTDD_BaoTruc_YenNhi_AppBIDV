import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, Modal, TouchableWithoutFeedback, SafeAreaView, FlatList, Button } from 'react-native';
const Footer = ({ state }) => {

    const [imageSelect, setImageSelect] = useState('')
    const [showFooter, setShowFooter] = useState(true);
    const openModalCD = () => {
        const currentRoute = state.routes[state.index].name;
        console.log(currentRoute)
        if (currentRoute === 'Home') {
            setShowFooter(true);
            setImageSelect('https://res.cloudinary.com/doqbelkif/image/upload/v1700207282/DeTaiBIDV/home_seynra.png');
        } else {
            setShowFooter(false)
        }
    };
    useEffect(() => {
        openModalCD();
    }, [state.routes[state.index].name]);


    if (!showFooter) {
        return (
            <View></View>
        )
    }
    else {
        return (
            <View style={styles.footer}>
                <View style={styles.twoButton}>
                    <View style={styles.oneButtonLeft}>
                        <Image style={{ width: 35, height: 35, borderRadius: 5, margin: 'auto' }} resizeMode='contain' source={{ uri: imageSelect }} />
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
                        <Pressable onPress={openModalCD}
                        >
                            <Image style={{ width: 35, height: 35, borderRadius: 5, margin: 'auto' }} resizeMode='contain' source={{ uri: "https://res.cloudinary.com/doqbelkif/image/upload/v1700207097/DeTaiBIDV/setting_bzkibz.png" }} />
                            <Text style={{ color: 'gray', fontWeight: 400, fontSize: 14 }}>Cài đặt</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        );
    };
}

const styles = {
    footer: {
        height: '10%',
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
}

export default Footer;