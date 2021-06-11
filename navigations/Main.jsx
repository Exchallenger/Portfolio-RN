import React from 'react';
import styled from 'styled-components/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contact from './Contact';
import Project from './Project';
import Skills from './Skills';
import Profile from './Profile';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 


const Container = styled.View`
    background-color:black;
    height:100%;
`;

const Text = styled.Text``;

const Tabs = createBottomTabNavigator();

const Main = () => {
    return (
    <NavigationContainer>
       <Tabs.Navigator
       tabBarOptions={{
           style:{
        backgroundColor:'#121212',
        },
           activeTintColor:'white'
       }}
       screenOptions={({route}) =>
    ({tabBarIcon: ({focused}) =>{ 
        let iconName;
        if(route.name === "Profile"){
            iconName = 'people-sharp'
        }else if(route.name === "Skills"){
            iconName = 'pencil'
        }else if(route.name === "Project"){
            iconName = 'desktop'
        }else if(route.name === "Contact"){
            iconName = 'flash'
        }

        return <Ionicons 
        name={iconName} 
        size={24} 
        color={focused ? "white" : "grey"} />
    }})}
       >
           <Tabs.Screen name="Profile" component={Profile}/>
           <Tabs.Screen name="Project" component={Project}/>
           <Tabs.Screen name="Skills" component={Skills}/>
           <Tabs.Screen name="Contact" component={Contact}/>
       </Tabs.Navigator>
    </NavigationContainer>
    );
};

export default Main;