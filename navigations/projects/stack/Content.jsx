import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Dimensions,Linking } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 
import { Icon, Mark } from '../../../common/common';
import {useFonts} from 'expo-font';
import { FontAwesome } from '@expo/vector-icons'; 



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Container = styled.View`
    height:100%;
    background-color:#121212;
    
`;

const Scroll = styled.ScrollView`
    margin-bottom:24px;
`;

const View = styled.View`
    align-items:center;
`;

const Btn = styled.TouchableOpacity`
    position:absolute;
    left:12px;
    top:12px;
    z-index:1;
`;

const Text = styled.Text`
    color:white;
    text-align:center;
    font-size:27px;
    margin:12px 0px 24px 0px;
`;

const Explain = styled.Text`
    color:white;
    font-family:'noto';
    font-size:17px;
`;

const ExContainer = styled.View`
    background-color:#121212;
    padding : 0px 18px;
    border-radius:12px;
    margin-bottom:12px;
`;

const Skill = styled.Text`
    color:white;
    font-size:17px;
    font-weight:500;
    text-align:center;
    margin-bottom:12px;
`;

const Image = styled.Image`
    width:100%;
    height:${height/3.5}px;
    margin-bottom:12px;
    border-radius:15px;
`;

const ImgContainer = styled.View`
    flex-direction:row;
    margin-bottom:12px;
    width:100%;
    justify-content:space-around;
`;

const MImage = styled.Image`
    width:120px;
    height:260px;
    margin-right:20px;
`;

const QR = styled.Image`
    width:80px;
    height:80px;
`;

const TextContainer = styled.View`
    padding:3px 12px;
`;

const Link = styled.TouchableOpacity`

`;

const IContainer = styled.View`
    width:100%;
    flex-direction:row;
    flex-wrap:wrap;
`;

const Content = ({route,navigation}) => {

const [loaded] = useFonts({
	noto:require('../../../assets/fonts/NotoSansKR-Regular.otf')});

    console.log(route.params);
    const data = route.params.r;
    return (
        <Container>
            <Btn onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle" size={34} color="white" />
            </Btn>
            <Text>{data.title}</Text>
            {loaded ? 
            <Scroll>
            <View>
            {data.type === 'RN' ? 
            (<ImgContainer>
                <MImage source={data.src}/>
                <MImage source={data.src2}/>
            </ImgContainer>)
            : 
            <Image source={data.src}/> }
            <TextContainer>
            <Mark title="Explain"/>
            <ExContainer>
            <Explain>{data.exp}</Explain>
            </ExContainer>
            <Mark title="Skills"/>
            <IContainer>
            <Icon Iname={data.Iname} color={data.color} name={data.skill}/>
            {data.skill2 && <Icon Iname={data.Iname2} color={data.color2} name={data.skill2}/>}
            </IContainer>
            <Mark title="More Details"/>
            </TextContainer>
            </View>
            <Link onPress={() => Linking.openURL(data.link)}>
                <FontAwesome name="github" size={30} color="white" 
                    style={{textAlign:'center'}}
                />
            </Link>
            </Scroll> : <ActivityIndicator size='large' color='white'/>}
        </Container>
    );
};

export default Content;