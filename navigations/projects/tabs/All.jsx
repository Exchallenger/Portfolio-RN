import React from 'react';
import styled from 'styled-components/native';
import { sources } from '../data';
import List from '../stack/List';


const Container = styled.View`
    height:100%;
    background-color:black;
`;

const All = () => {
    
    const data = sources;

    return (
       <Container>
           <List data={data}/>
       </Container>
    );
};

export default All;