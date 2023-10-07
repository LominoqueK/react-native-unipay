import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/signup.png')} 
                style={{width: 280, height: 200}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-10"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Full Name</Text>
            <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                placeholder='Enter Name'
            />
            <Text className="text-gray-700 ml-4">ID number</Text>
            <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                placeholder='Enter ID number'
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry
                placeholder='Enter Password'
            />
            <TouchableOpacity
                className="py-4 bg-yellow-400 rounded-xl"
            >
                <Text className="font-xl font-bold text-center text-gray-700">Sign Up</Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-yellow-500"> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
