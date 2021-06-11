import React from 'react';
import styled from 'styled-components/native';


const Container = styled.View`
align-items:center;

`;

const Nickname = styled.Text`
    color:white;
    font-size:14px;
    text-align:center;
    margin:24px 0px;
    font-weight:600;
    line-height:22px;
`;

const Adventages = () => {
    const data = [
        {id:1, title:'●    남에게 피해주기 싫어하는 성격이고, 맡은 일을 스스로 해결해야 직성이 풀리는 성격이라서 항상 맡은 바에 최선을 다하는 사람입니다.'},
        {id:2, title:'●    눈치가 빨라서 직장상사나 다른 분들이 필요로 하는 것을 먼저 파악하여 일의 능률을 향상 시킬 수 있는 사람입니다.'},
        // {id:3, title:'●    센스'},
        {id:4, title:'●    무엇보다도, 코딩이 재미있습니다. 항상 새로운 것을 배울때면 설레고 얼른 그것을 배워서 직접 활용하는 것이 재미있습니다.'},
    ]
    return (
       <Container>
           {data.map((r) => <Nickname key={r.id}>{r.title}</Nickname>)}
       </Container>
    );
};

export default Adventages;