import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    
    <SafeAreaView className="bg blue h-full w-full">
        
        <ImageBackground source={require('../assets/images/bg.png')} className="flex-1 flex justify-around">
            
            <View className="flex-row justify-center">
                <Image source={require("../assets/images/unipay.png")}
                    style={{width: 200, height: 70}} />
            </View>
            
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    className="py-3 bg-blue-800 mx-7 rounded-xl">
                        <Text 
                            className="text-xl font-bold text-center text-white"
                        >Sign Up</Text>
                        
                </TouchableOpacity>
                <View className="flex-row justify-center">

                    <Text className="text-white font-semibold color-black">Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className="font-semibold text-blue-400"> Log In</Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
           
        </ImageBackground>
    </SafeAreaView>
   
  )
}