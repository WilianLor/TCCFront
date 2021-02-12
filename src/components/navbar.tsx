import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Entypo , MaterialCommunityIcons, FontAwesome, AntDesign  } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

interface props {
    page: string
}

function NavBar (props: props): JSX.Element {
    const navigation = useNavigation();
    return (
        <View style={styles.navBar}>
            
                <RectButton style={styles.linkButton}>
                    <MaterialCommunityIcons   name="home" size={42} color="#DC651A" />
                    <View style={props.page == 'home'? styles.selectedButton : styles.unselectedButton}/>
                </RectButton>
            
            
                <RectButton style={styles.linkButton}>
                    <Entypo  name="wallet" size={42} color="#DC651A" />
                    <View style={props.page == 'wallet'? styles.selectedButton : styles.unselectedButton}/>
                </RectButton>
            
            <RectButton style={styles.addButton}><FontAwesome name="plus" size={20} color="white" /></RectButton>
            
                <RectButton style={styles.linkButton}>
                    <AntDesign  name="piechart" size={40} color="#DC651A" /> 
                    <View style={props.page == 'chart'? styles.selectedButton : styles.unselectedButton}/>
                </RectButton>
            
            
                <RectButton style={styles.linkButton}>
                    <FontAwesome  name="user" size={42} color="#DC651A" />
                    <View style={props.page == 'user'? styles.selectedButton : styles.unselectedButton}/>
                </RectButton>
            
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        marginTop: 100,
        marginRight: '5%',
        marginLeft: '5%',
        marginBottom: 20,
        width: '90%',
        height: 70,
        borderRadius: 15,
        backgroundColor: '#2F2F2F',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    selectedButton: {
        height: 5,
        width: 35,
        marginTop: 5,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        backgroundColor: '#DC651A',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    unselectedButton: {
        height: 5,
        width: 20,
        marginTop: 5,
    },
    addButton: {
        width: 85,
        height: 50,
        marginTop: -40,
        borderRadius: 15,
        backgroundColor: '#DC651A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    linkButton: {
        borderRadius: 50,
        height: 46,
        width: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default NavBar