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
   
@media (max-width: 768px) {
   height: 61.5rem;
}
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


@media (max-width: 768px) {
   grid-template-columns: 1fr;
   align-items: baseline;
   margin-top: 3rem;
   text-align: center;
}
`
const SectionTitle = styled.h2`
   color: white;
   font-size: 60px;
   margin: 0;
   margin-bottom: 20px;

   @media (max-width: 768px) {
      font-size: 3.3rem;
   }
`
const SectionText = styled.p`
   color: white;  

`
const WaveTop = styled.div`
   position: absolute;
   top: -8%;
   width: 100%;   
   transform: rotate(180deg);
   @media (max-width: 900px) {
      top: -11%
   }
   @media (max-width: 567px) {
      top: -13%
   }
`
const WaveBottom = styled.div`
   position: absolute;
   bottom: -8%;
   width: 100%;
   @media (max-width: 900px) {
      bottom: -11%
   }
   @media (max-width: 567px) {
      bottom: -13%
   }
`
const Section = props => (
   <SectionGroup image={props.image}>
      <WaveTop><Wave /></WaveTop>
      <WaveBottom><Wave /></WaveBottom>
      <SectionLogo src={props.logo} />
      <SectionTitleGroup className='container'>
         <SectionTitle>{props.title}</SectionTitle>
         <SectionText>{props.text}</SectionText>
      </SectionTitleGroup>
   </SectionGroup>
)

export default Section