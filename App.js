import { StatusBar } from 'expo-status-bar';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import After from './main/After';
import Before from './main/Before';

const height = Dimensions.get('screen').height;

console.log(getStatusBarHeight());

const sHeight = getStatusBarHeight() >= 21 ? getStatusBarHeight() : 0;

const Container = styled.View`
  height:${height}px;
  background-color:#121212;
  padding-top:${sHeight/3}px;
`

export default function App() {
  const [status, setStatus] = useState(true);
  const changeStatus = () => {
    setTimeout(() => {
      setStatus(false);
    }, 5000);
  }

  return (
    <>
    <StatusBar style='light'/>
    <Container>
      {status ? <Before changeStatus={changeStatus}/> : <After/>}
    </Container>
    </>
  );
}

