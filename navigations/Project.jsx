import React from 'react';
import styled from 'styled-components/native';
import {createStackNavigator} from '@react-navigation/stack';
import Content from './projects/stack/Content';
import TopNavigation from './projects/stack/TopNavigation';


const Container = styled.View`
    height:100%;
    background-color:#121212;
`;

const TContainer = styled.View`
    position: relative;
    height:100%;
`;



const Stack = createStackNavigator();


const Project = () => {

    return (
        <Container>
            <TContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false
                }}>
                <Stack.Screen name="TopNavigation" component={TopNavigation}/>
                <Stack.Screen name="Content" component={Content}/>
            </Stack.Navigator>

            </TContainer>
        </Container>
    );
};

export default Project;