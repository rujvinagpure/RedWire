import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../components/home/articles';
import VideosScreen from '../components/home/videos';
import ArticleScreen from '../components/home/article';
import VideoScreen from '../components/home/videos/video';
export const Stack= createStackNavigator();


export const VideosStack = () => (
    <Stack.Navigator
        initialRouteName="Videos_screen"
    >
        <Stack.Screen name="Videos_screen" component={VideosScreen}/>
        <Stack.Screen name="Video_screen" component={VideoScreen}/>
    </Stack.Navigator>
)

export const HomeStack =() =>(
<Stack.Navigator 
initialRouteName="Home_screen">
<Stack.Screen name ="Home_screen" component = {HomeScreen}/>
<Stack.Screen name ="Article_screen" component = {ArticleScreen}/>
</Stack.Navigator>

)