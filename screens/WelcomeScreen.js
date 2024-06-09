import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { WelcomeImage } from '../assets';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ImageBackground
        source={WelcomeImage}
        className="flex-1 bg-cover bg-right"
      >
      <View className="flex-1 pt-[93px] items-center justify-start relative">
        <Text className="text-white text-[116px] font-hiatus">Aspen</Text>
      </View>
      <View className="flex-1 px-8 pb-40 space-y-1 justify-end relative">
        <Text className="text-white text-[24px] font-montserrat">Plan your</Text>
        <Text className="text-white text-[40px] font-bold font-montserrat">Luxurious</Text>
        <Text className="text-white text-[40px] font-bold font-montserrat">Vacation</Text> 
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Animatable.View 
          animation={"pulse"}
          easing={"ease-in-out"}
          iterationCount={"infinite"}
          className="absolute bottom-20 left-8 w-[311px] h-[52px] bg-[#176FF2] rounded-2xl justify-center"
        >
          <View className="flex-1 items-center justify-center">
            <Text className="text-white text-[16px] font-bold">Explore</Text>
          </View>
        </Animatable.View>
      </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default WelcomeScreen