import React, {  useEffect, useRef, useState } from 'react';
import { Animated,  Dimensions } from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Container = styled.View`
    height:100%;
    background-color:#121212;
    justify-content:center;
    align-items:center;
    padding-bottom:20px;
`;

const Text = styled.Text`
    color:white;
    font-size:24px;
    font-weight:600;
    text-align:center;
    margin-bottom:60px;
`;

const CpContaier = styled.View`
    position:absolute;
    bottom: 10px;
    right:10px;
`;

const Cp = styled.Text`
    color:white;
    font-size:13px;
`;

const BulbMain = styled.View`
    width:${width/6}px;
    height:${width/6}px;
    border-radius:50px;
    position:relative;
`;



const Btn = styled.TouchableOpacity``;

const BulbDown = styled.View`
    position: absolute;
    background-color:gray;
    width:${width/16}px;
    height:${width/10}px;
    bottom:${-width/12-width/80}px;
    left:${width/12-width/32}px;
`;

const Before = ({changeStatus}) => {
    const [bulb, setBulb] = useState(true);

    const fadeAnim = useRef(new Animated.Value(1)).current;

    const bulbAnim = useRef(new Animated.Value(0)).current;


    const fadeOut = () => {
        Animated.timing(fadeAnim,{
            toValue: 0,
            duration: 4000,
            useNativeDriver:true
        }).start();
    }

    const bulbFadeIn = () => {
        Animated.timing(bulbAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver:true
        }).start();

      };
      useEffect(() =>{
          
        setTimeout(() => {
            setBulb(false);
        }, 1000);
        setTimeout(() => {
            fadeOut();
        }, 2000);
        changeStatus();
      },[])
    return (
        
        <Container>
            <Animated.View
            style={[{
                height:'100%',
                flex:1,
                justifyContent:'center',
                opacity:fadeAnim,
                alignItems:'center',
            }]}>
            <Text>Exchallenger's Portfolio</Text>
            <Btn>
            <BulbMain style={{
                backgroundColor: bulb ? 'grey' : 'rgba(226,211,161,0.85)',
                shadowColor:bulb ? '#212121' :'rgba(226,211,161,1)',
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 1,
                shadowRadius: 20,
                
                elevation: 24,                
            }}
            >
            </BulbMain>
                <BulbDown/>
                </Btn>    
            <CpContaier>
                <Cp>© 2021. Exchallenger all rights reserved</Cp>
            </CpContaier>
            </Animated.View>
        </Container>
    );
};

export default Before;