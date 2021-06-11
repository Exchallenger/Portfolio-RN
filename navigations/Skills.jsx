import React, { useRef, useState } from 'react'
import { Animated, Dimensions, PanResponder } from 'react-native';
import styled from 'styled-components/native';
import { Emphasis } from '../common/common';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const width = Dimensions.get('window').width;

const Container = styled.View`
    padding-top:24px;
    background-color:#121212;
    height:100%;
    align-items:center;
`;
const Text = styled.Text`
    color:white;
    font-size:14px;
    font-weight:700;
`;

const FlexContainer = styled.View`
margin-top:24px;
align-items:center;
background-color:'rgba(255,255,255,0.3)';
border-radius:14px;
padding: 8px 0;
`

const SkillContainer = styled.View`
   flex-direction:row; 
   align-items:center;
   margin: 8px 0px;
   padding-left: 12px;
`;



const TextContainer = styled.View`
    flex:1;
`;

const StickContainer = styled.View`
    border:2px solid black;
`;

const Stick = styled.View`
    background-color:yellow;
    height:2px;
`;

const IconContainer = styled.View`
    margin-left:12px;
    padding:12px;
    flex-direction:row;
    width:${width}px;
    flex-wrap:wrap;
`;
const Icons = styled.View`
    border:2px solid white;
    padding:4px 12px 4px 12px;
    border-radius:30px;
    flex-direction:row;
    margin: 4px 8px 4px 8px;
`;

const IText = styled.Text`
    color:white;
    margin-left:6px;
    line-height:22px;
`;

const Skills = () => {
    const data = [
        {skill:'HTML', num:80, key:1},
        {skill:"CSS", num:70, key:2},
        {skill:'JavaScript', num:80, key:3},
        {skill:'React', num:70, key:4},
        {skill:'React Native', num:95, key:5},
        {skill:'TypeScript', num:60, key:6},
        {skill:'Node.js', num:50, key:7},
    ]
    const icon = [
        {name:'language-html5',key:1,data:'HTML',color:"rgb(204,87,52)"},
        {name:'language-css3',key:2,data:'CSS',color:"rgb(47,74,213)"},
        {name:'react',key:3,data:'React',color:"rgb(94,205,242)"},
        {name:'react',key:4,data:'React-Native',color:"rgb(94,205,242)"},
        {name:'nodejs',key:5,data:'Node.js',color:"rgb(110,151,101)"},
        {name:'language-typescript',key:6,data:'TypeScript',color:'rgb(66,114,186)' },
        {name:'language-javascript',key:7,data:'JavaScript',color:"rgb(235,217,78)"},
        {name:'firebase',key:8,data:'Firebase',color:"rgb(234,166,62)"},
    ]

    const pan = useRef(new Animated.ValueXY()).current;
    // const panResponder = useRef(
    //     PanResponder.create({
    //         onMoveShouldSetPanResponder: ()=> true,
    //         onPanResponderMove: Animated.event([
    //             null,
    //             {dx:pan.x, dy:pan.y}
    //         ]),
    //         onPanResponderRelease: () =>{
    //             Animated.spring(pan, {toValue:{x:0,y:0}}).start();
    //         }
    //     })
    // ).current;
    return (
        <Container>
            <Emphasis name="My Skills"/>
            <FlexContainer>
           {data.map(r => 
           <SkillContainer key={r.key}>
                <TextContainer><Text>{r.skill}</Text></TextContainer>
              <StickContainer><Stick style={{width:r.num*2.2}}/></StickContainer>
           </SkillContainer>)}
            </FlexContainer>
            <IconContainer>
                {icon.map(r => 
                    <Icons key={r.key}>
                        <MaterialCommunityIcons name={r.name} size={24} color={r.color} />
                        <IText>{r.data}</IText>
                    </Icons>)}
            </IconContainer>
        </Container>
    );
}

export default Skills;