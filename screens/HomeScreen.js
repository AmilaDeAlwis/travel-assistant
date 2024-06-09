import { View, Text, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-row items-center justify-between px-5 pt-11">
                <View>
                    <Text className="text-[14px] text-black">Explore</Text>
                    <Text className="text-[32px] text-black font-bold">Aspen</Text>
                </View>
                <View>
                    <Text className="text=[12px] text-slate-400">Aspen, USA</Text>
                </View>
            </View> 
            <View className="flex-row items-center bg-[#F3F8FE] mx-4 rounded-xl py-1 px-5 shadow-lg mt-4">
                <TextInput
                    placeholder="Find things to do"
                    onPress={(data, details = null) => {
                        console.log(data, details)
                    }}
                >
                </TextInput>
            </View>    
        </SafeAreaView>
    )
}

export default HomeScreen