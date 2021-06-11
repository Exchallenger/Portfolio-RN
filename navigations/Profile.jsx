import React from 'react';
import styled from 'styled-components/native';
import {useFonts} from 'expo-font';
import { ActivityIndicator, FlatList} from 'react-native';
import Adventages from './profile/Adventages';
import Motivation from './profile/Motivation';
import { LinearGradient } from 'expo-linear-gradient';

const Container = styled.View`
    align-items:center;
    background-color:#121212;
    /* background-color:#eaebf3; */
    height:100%;
    padding:24px 8px 0px 8px;
`;

const ScrollView = styled.ScrollView`
    background-color:black;
    height:100%;
`;

const Text = styled.Text`
    color:white;
    font-size:27px;
    font-weight:600;
    margin-bottom:18px;
    font-family:'Robster';
`;


const PContainer = styled.View`
    flex-direction:row;
    margin-top:16px;
`;

const ForWhite = styled.View`
    background-color:white;
    width:3px;
    height:89px;
`;

const ForFlex = styled.View`
 flex-direction:row;
 align-items:center;
 margin-left:24px;
`;

const DetailContainer = styled.View`
    /* background-color:white; */
    justify-content:center;
    margin-left:8px;
`;

const Detail = styled.Text`
    font-size:18px;
    color:white;
    margin-bottom:4px;
`;

const SSDetail = styled.Text`
    color: gray;
    `;
const SDetail = styled.Text`
    font-size:15px;
    color:white;
`;


const Circle = styled.View``;

const Nickname = styled.Text`
    color:white;
    font-size:14px;
    text-align:center;
    margin:24px 0px;
    font-weight:600;
    line-height:22px;
`;

const Image = styled.Image`
    border-radius:50px;
    /* border: 3px solid white; */
    width:100px;
    height:100px;
    `;

const Emphasis = styled.Text`
    color:white;
    font-size:22px;
    font-family:'Robster';
`;


const Profile = () => {
    const [loaded] = useFonts({
        Robster : require('../assets/fonts/Lobster-Regular.ttf')
        // if(loaded == null){return null;}
    })
    return (
            <ScrollView>
            {loaded ?  
            <Container>
            <Text>I'm Developer Jihun Park</Text>
            <PContainer>
                <LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={{
                    borderRadius:'50%',
                    width:103,
                    height:103,
                    alignItems:'center',
                    justifyContent:'center'                    
                }}            
                >
                <Image source={require('../images/pro2.jpeg')}/>
                </LinearGradient>
                <ForFlex>
                    <ForWhite/>
                <DetailContainer>
                    <Detail>박지훈</Detail>
                    <SDetail>Park Jihun</SDetail>
                    <SDetail>Exchallenger</SDetail>
                    <SSDetail>Developer</SSDetail>
                    <SDetail>97.07.16</SDetail>
                </DetailContainer>
                </ForFlex>
            </PContainer>
            <Nickname>
                My Nickname is Exchallenger
                {"\n"}{"\n"}
                This means Experience + Challange + People
                {"\n"}{"\n"}
                My motto is to have many challenges and experiences.
            </Nickname>
            <Emphasis>Adventages</Emphasis>
            <Adventages/>
            <Emphasis>Motivation</Emphasis>
            <Motivation/>
            </Container>
            :
            <Container>
                <ActivityIndicator size="large"/> 
            </Container>
                }
            </ScrollView>
    )
}

export default Profile;