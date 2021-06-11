import React from 'react';
import styled from 'styled-components/native';
import { sources } from '../data';
import List from '../stack/List';


const Container = styled.View`
    height:100%;
    background-color:black;
`;

const Reacts = () => {
    const data = sources.filter(r => r.type==='React' || r.type==='RN');
    return (
       <Container>
           <List data={data}/>
       </Container>
    );
};

export default Reacts;