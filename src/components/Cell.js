import React from 'react';
import styled from 'styled-components';

const CellGroup = styled.div `
   display: grid;
   grid-template-columns: 60px auto;
   grid-gap: 1.8rem;
   align-items: center;
`
const CellImage = styled.div `
   width: 60px;
   height: 60px;
   background: black;
   ${'' /* background-image: url(${props => props.image}), ${props =>  props.logo_bg}; */}
   background-image: url(${props => props.image});
   background-size: 48px;
   background-position: center center;
   border-radius: 10px;
   background-repeat: no-repeat;

`
const CellTitle = styled.h4 `
   font-size: 1.8rem;
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
   padding: 0 1rem 1rem 0;
   line-height: 1.4;
`

const Cell = props => (
   <CellGroup>
      <CellImage image={props.image} logo_bg={props.logo_bg}/>

      <CellTitle>{props.title}</CellTitle>
   </CellGroup>   
)

export default Cell;