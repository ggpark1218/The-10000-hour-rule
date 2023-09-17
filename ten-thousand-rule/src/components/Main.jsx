import styled from "styled-components";
import React from 'react'

const ContentDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    
`
const BackImg= styled.div`
    position: absolute;
    top: 45px;
    
`
const FrontImg= styled.div`
    position: absolute;
    top: 119px;
`

const Text= styled.div`
    position: absolute;
    text-align: center;
    color: #FFF;

    &.text1 {
        top: 330px;
        font-family: "tvNBold";
        font-size: 36px;
        color: #F5DF4D;
    }

    &.text2 {
        top: 430px;
        font-family: "GmarketSansMedium";
    }
`
const QImg= styled.div`
    position: absolute;
    top: 460px;
`


export default function Main() {
    return (
        <>
        <ContentDiv>
            <BackImg> <img src = "img/clock.png"/></BackImg>
            <FrontImg><img src = "img/title.png"/></FrontImg>
            <Text className="text1">
                <p>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</p>
            </Text>
            <Text className="text2">
                <p><strong style={{fontFamily: 'GmarketSansMedium', fontWeight: 900}}>1만 시간의 법칙</strong>은</p>
                <p>어떤 분야의 전문가가 되기 위해서는</p>
                <p>최소한 1만 시간의 훈련이 필요하다는 법칙이다.</p>
            </Text>
            <QImg><img src = "img/quotationMark.png"/></QImg>

        </ContentDiv>
        </>
    );
}