import React from 'react';
import styled from 'styled-components/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Badge } from 'react-native-elements';
import {Allnum, projectData, rnum} from '../data';
import All from '../tabs/All';
import JS from '../tabs/JS';
import TS from '../tabs/TS';
import Node from '../tabs/Node';
import Reacts from '../tabs/React';


const Container = styled.View`
    height:100%;
    background-color:#be6c6c;
`;


const NumContainer = styled.View`
    top:15px;
    left:7%;
    z-index:1;
    width:100%;
    position: absolute;
    flex-direction:row;
    align-items:flex-end;
    justify-content:flex-end;
`;

const NumMap = styled.View`
    position: relative;
    width:${100/4}%;
`;



const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
    const data = projectData;
    
    const num = [
        Allnum,
        data.JSproject.length,
        data.TSproject.length,
        // data.Nodeproject.length,
        rnum
    ];

    return (
            <Container>
                <NumContainer>
                    {num.map(r => 
                    <NumMap key={r}>
                        <Badge value={r} status="primary"/>
                    </NumMap>
                    )}
                </NumContainer>
                <Tab.Navigator
                style={{
                    backgroundColor:'#121212',
                    paddingTop:0.5
                }}
                tabBarOptions={{
                    labelStyle:{
                        fontSize:9,
                        
                        },
                    activeTintColor:'white',
                    showLabel:true,
                    style:{
                        backgroundColor:'#121212',   
                        marginTop:13,
                        
                    },
                    indicatorStyle:{
                        backgroundColor:'rgb(67,135,214)',
                        width:`${100/4}%`,
                        //node 들어오면 5로 바꿔줄것
                    },
                    
                }}>
                    <Tab.Screen 
                    name="All" 
                    component={All}/>
                    <Tab.Screen 
                    name="JS" 
                    component={JS}/>
                    <Tab.Screen 
                    name="TS" 
                    component={TS}/>
                    {/* // <Tab.Screen 
                    // name="Node" 
                    // component={Node}/> */}
                    <Tab.Screen 
                    name="React" 
                    component={Reacts}/>
                </Tab.Navigator>
        </Container>
        
    );
};

export default TopNavigation;