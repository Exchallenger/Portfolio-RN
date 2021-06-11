import React from 'react';
import styled from 'styled-components/native';
import { sources } from '../data';
import List from '../stack/List';

const Container = styled.View`
    height:100%;
    background-color:black;
`;

const JS = () => {

    const data = sources.filter(r =>r.type==='JS');
    return (
       <Container>
           <List data={data}/>
       </Container>
    );
};

export default JS;