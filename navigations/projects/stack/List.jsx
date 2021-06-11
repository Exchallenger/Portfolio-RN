import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
// import { Image } from 'react-native';


const width = Dimensions.get('screen').width;

const Container = styled.ScrollView`
    padding: 8px 0px;
    background-color:#121212;
    height:100%;
`;

const ImgContainer = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
    
`;

const Image = styled.Image`
    position: relative;
    width:80px;
    height:120px;
    margin-top:12px;
    margin-bottom:4px;
`;

const Indicator = styled.View`
    align-items:center;
    justify-content:center;
    width:80px;
    height:120px;
    margin-top:12px;
    margin-bottom:4px;
    border:1px solid white;
`;


const Title = styled.Text`
    font-size:14px;
    color:white;
    text-align:center;
    margin:4px 0px 8px 0px;
`;


const Touch = styled.TouchableOpacity`
    position: relative;
    align-items:center;
    width:${width/4.15}px;
`;

const List = ({data}) => { 
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    return (
       <Container>
           {data ?
           <ImgContainer>
            {data.map(r =>
                <Touch key={r.name} onPress={()=> navigation.navigate("Content",{r,data})}>
               
                     <Image
                     onLoadStart ={() => setLoading(false)}
                     source={r.src}/>
                    <Title>{r.name}</Title>
                </Touch>
                )}
            </ImgContainer>
                :
                <ActivityIndicator size='large'/>}
       </Container>
    );
};

export default List;