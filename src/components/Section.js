import React from 'react';
import styled from 'styled-components'
import Wave from './Wave';

const SectionGroup = styled.div`
   background: url(${props => props.image});
   height: 720px;
   background-size: cover;
   background-position: center;

   display: grid;
   grid-template-rows: 300px auto;
   position: relative;
`
const SectionLogo = styled.img`
   align-self: end;
   margin: 0 auto;
   width: 120px;
`
const SectionTitleGroup = styled.div`
   display: grid;
   grid-template-columns: 300px auto;
   margin: 0 40px;
   grid-template-rows: auto 100%;
   align-items: center;

@media (max-width: 720px) {
   grid-template-columns: 1fr;
}

`

const SectionTitle = styled.h2`
   color: white;
   font-size: 60px;
   margin: 0;
   margin-bottom: 20px;
`
const SectionText = styled.p`
   color: white;  

`
const WaveTop = styled.div`
   position: absolute;
   top: -50px;
   width: 100%;   
   transform: rotate(180deg);
`
const WaveBottom = styled.div`
   position: absolute;
   bottom: -50px;
   width: 100%;
`
const Section = props => (
   <SectionGroup image={props.image}>

      <WaveTop><Wave /></WaveTop>
      <WaveBottom><Wave /></WaveBottom>

      <SectionLogo src={props.logo} />
      <SectionTitleGroup>
         <SectionTitle>{props.title}</SectionTitle>
         <SectionText>{props.text}</SectionText>
      </SectionTitleGroup>
   </SectionGroup>
)

export default Section