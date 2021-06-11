import { useFonts } from 'expo-font';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const Container = styled.View``;

const EText = styled.Text`
    color:white;
    font-size:22px;
    font-family:'Robster';
`

export const Emphasis = ({name}) => {
    const [loaded] = useFonts({
        Robster : require('../assets/fonts/Lobster-Regular.ttf')
    })
    return (
        <Container>
            {loaded ? <EText>{name}</EText> : <ActivityIndicator size="large"/>}
        </Container>
    );
};


const MarkContainer = styled.View`
    border-radius:24px;
    background-color:black; 
    width:339px;
    margin: 20px 0px 18px 0px;
`;

const MarkText = styled.Text`
    width:339px;
    padding:4px 6px;
    color:white;
    font-size:15px;
    font-weight:600;
    text-align:center;
`;

const MarkBlock = styled.View`
    background-color:black;
    border-radius:14px;
`;

export const Mark = ({title}) =>{
    return(
        <MarkContainer>
            <LinearGradient
                    colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    style={{  
                        position:'absolute',
                        width:341,
                        height:28,
                        top:-1,
                        left:-1,
                        borderRadius:14,
                    }}></LinearGradient>
                    <MarkBlock>
                    <MarkText>{title}</MarkText>
                    </MarkBlock>
        </MarkContainer>
    );

}

const Icons = styled.View`
    border:2px solid white;
    padding:4px 12px 4px 12px;
    border-radius:30px;
    flex-direction:row;
    margin: 4px 8px 4px 8px;
`;

const IText = styled.Text`
    color:white;
    margin:0px 0px 0px 8px;
    line-height:22px;
    text-align:center;
`;

export const Icon = ({Iname,name,color}) => {
    return(
        <Icons>
        <MaterialCommunityIcons name={Iname} size={22} color={color} />
        <IText>{name}</IText>
        </Icons>
    );
}