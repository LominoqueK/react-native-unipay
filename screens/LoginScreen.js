import { View, Text, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={require('../assets/images/blue_bg.png')}className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex">  
        <View  className="flex-row justify-center">
          <Image source={require('../assets/images/login.png')} 
          style={{width: 200, height: 200}} />
        </View>
      </SafeAreaView>
     
      <View 
      
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
        className="flex-1 bg-white px-8 pt-8 my-8">
          <View className="form space-y-1">
          <Text 
                className=" text-white font-bold text-4xl text-center text-black">
                Sign in
            </Text>
            <Text className="text-gray-700 ml-4">ID number</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="id number"
              
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="password"
              
            />
            <TouchableOpacity className="flex items-end">
              <Text className="text-gray-700 mb-5 text-blue-700">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="py-3 bg-blue-600 rounded-xl">
                <Text 
                    className="text-xl font-semibold text-center text-white"
                >Login</Text>
             </TouchableOpacity>
            
          </View>
          <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">
                  Don't have an account?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                  <Text className="font-semibold text-yellow-500"> Sign Up</Text>
              </TouchableOpacity>
          </View>
          
      </View>
    </ImageBackground>
    
  )
}