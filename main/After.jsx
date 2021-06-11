import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Main from '../navigations/Main';

const height = Dimensions.get('window').height;

const Container = styled.View`
    padding: 24px 6px 0px 6px;
    height:${height}px;
    background-color:#121212;
`;

const Text = styled.Text`
    color:white;
    font-size:24px;
    font-weight:600;
`;

const After = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () =>{
        Animated.timing(fadeAnim,{
            toValue:1,
            duration:3000,
            useNativeDriver:true
        }).start();
    }
    useEffect(() =>{
        fadeIn();
    })
    return (
        <Container>
        <Animated.View
            style={[{
                height:'100%',
                opacity:fadeAnim
            }]}
        >
            <Main/>
        </Animated.View>
        </Container>
    );
};

export default After;