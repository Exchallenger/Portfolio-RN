import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import { Emphasis } from '../common/common';
import { FontAwesome } from '@expo/vector-icons'; 
import { Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



const Container = styled.View`
    align-items:center;
    width:100%;
    height:100%;
    background-color:#121212;
    padding-top:16px;
`;

const Margin = styled.View`
    margin-top:12px;
`;

const IContainer = styled.View`
    position:relative;
`;

const IconContainer = styled.View`
    position:relative;
    margin-top:24px;
    border-radius:12px;
    padding: 12px;
    justify-content:space-around;
`;

const ImgContainer = styled.View`
    line-height:18px;
`;

const Text = styled.Text`
    padding-right:13px;
    font-size:16px;
    color:white;
    font-weight:600;
    line-height:23px;
`;

const Image = styled.Image`
    width:23px;
    height:23px;
    border-radius:6px;
    margin: 1px 8px 1px 7px; 
`;

const Btn = styled.TouchableOpacity`
    background-color:black;
    position:relative;
    padding: 6px 8px;
    border-radius:50px;
    flex-direction:row;
    align-items:center;
    margin: 12px 0px;
`;

const Contact = ({route}) => {


    const data = [
        {URL:'https://github.com/Exchallenger', name:'github', content:'github.com/Exchallenger',key:1,src:null},
        {URL:'mailto:bum4303@gmail.com', name:'google', content:'bum4303@gmail.com',key:2,src:null},
        {URL:'tel:01031448678', name:'phone', content:'010-3144-8678',key:3,src:null},
        {URL:'instagram://user?username=bat_hun', name:'instagram', content:'bat_hun',key:4,src:null},
        {URL:'https://www.expo.io/@exchallenger/projects', name:null, content:'React Native projects', src:'expo.png' ,key:5},
        {URL:'https://www.notion.so/Coding-1a0daf62721b4c8aa1d009f7bed7ab52',name:null, content:'My Notion', src:'notion.png' ,key:6}
    ];



    return (
        <Container>
            <Margin/>
            <Emphasis name="Contact me"/>
            <Margin/>
            <IconContainer>
            {data.map(r =>
            <IContainer key={r.key}>
                  <LinearGradient
                    colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    style={{  
                        position:'absolute',
                        width:274,
                        height:39,
                        top:11,
                        left:-1,
                        borderRadius:20,
                    }}></LinearGradient>
                <Btn
                onPress={() => Linking.openURL(r.URL)}>
          
                    {r.name ?
                    <FontAwesome  
                    style={{marginLeft:8, marginRight:8}} 
                    name={r.name} 
                    size={25} 
                    color='white'/> 
                    :
                    <ImgContainer>
                    {
                        r.src === 'expo.png' ?
                        <Image source={require(`../images/expo.png`)}/>
                        :
                        <Image source={require(`../images/notion.png`)}/>
                    }
                    </ImgContainer>
                    }
                    <Text> :  {r.content}</Text>
                </Btn>
                </IContainer>
                )}
            </IconContainer>              
        </Container>
        
    )
}

export default Contact;
