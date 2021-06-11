import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    margin-top:18px;
    padding: 0px 16px;
    background-color:'rgba(255,255,255,0.3)';
    border-radius:12px;
`

const Text = styled.Text`
    margin: 24px 0px;
    color:white;
    text-align:center;
    font-size:14px;
    line-height:22px;
    font-weight:600;
`;

const Motivation = () => {
    return (
        <Container>
            <Text>
                처음 코딩에 관심이 생긴건 고등학교 2학년이었습니다. 그때는 그저 막연한 관심이었습니다.
                그렇게 2016년에 무난하게 울산대학교 전기전자과를 입학하였습니다. 학교를 다니면서도 계속 머릿속엔 코딩을 해보고싶다는 생각이 떠나지 않았습니다.
                별다른 소득없이 그렇게 군대를 입대하게 되었고, 상병쯤에 휴가 복귀할때, 코딩하면 아는게 C언어 뿐이라서 그 책을 한권 사서 복귀했습니다.
                부대 특성상 컴퓨터를 사용할 수 없어서, 매일 10시 취침시간이 지난 뒤 연등신청을 하여 단어를 외우고 공책에 직접 손으로 코딩을 하기 시작했습니다.
                그렇게 처음 입문하였습니다. 너무 재미있었습니다. 그렇게 제대를 하고, 전과를 하려 하였으나 주변의 우려와 반대로 인해 1년더 고민하는 시간을 가지면서,
                학교를 다녔습니다. 그리고 2020년 여름방학이 끝나갈 무렵, 시간을 내어서 대전에서 많은 돈을 주고 전문적인 적성검사를 받아보았습니다. 그 결과 적성이 컴퓨터쪽 해킹,코딩쪽으로 나왔습니다.
                이 때, 결정을 내렸습니다. 그래서 과감히 휴학하고 9월부터 코딩공부를 하기 시작했습니다.
                이 것이 제가 코딩을 시작하게 된 동기입니다.
            </Text>
        </Container>
    );
};

export default Motivation;