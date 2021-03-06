import React from 'react'
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native'
import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles'



import { Background } from '../../components/Background'
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/themes';

export function SignIn() {


    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <Background>
            <View style={styles.container}>

                <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />
                <View style={styles.content}>
                    <Text style={styles.title}>{'Conecte-se\ne organize suas\njogatinas'}</Text>
                    <Text style={styles.subtitle}>{'Crie grupos para jogar seus games\nfavoritos com seus amigos'}</Text>
                    {loading ?
                        <ActivityIndicator color={theme.colors.primary} />
                        :
                        <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
                    }
                </View>
            </View>
        </Background>
    )
}