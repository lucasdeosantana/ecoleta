import React from 'react';
import { View, Image, Text, ImageBackground, } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


const Home = ()=>{
    
    const navigation = useNavigation()

    function handNavigation(){
        navigation.navigate("Points")
    }

    return(
        <ImageBackground source={require('../../assets/home-background.png')} style={styles.container}
            imageStyle={{width: 247, height: 368}}
            >
            <View style={styles.main}>
              <Image source={require('../../assets/logo.png')} />
              <Text style={styles.title}>Seu Marketplace de coleta de resíduos.</Text>
              <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos
                  de coleta de forma eficiente</Text>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handNavigation}>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="arrow-right" color="#FFF" size={24} />
                        </Text>
                    </View>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </RectButton>
            </View>
        </ImageBackground>
    )
}


export default Home;