import * as React from 'react'
import styled from "styled-components"

const Dive = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(min-content, 38rem));
   grid-column-gap: 1rem;
   justify-content: center;
   padding: 3rem 0;

   * {
      background-clip: text;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
   }

   h3 {
      background-image: linear-gradient(131.82deg, #852F56 -2.36%, #E84378 100%);
      font-size: 17rem;
      margin: 0;
   }
   
   p {
      background-image: linear-gradient(93.26deg, #E25050 0%, #FF8B6F 98.69%);
      font-size: 2.8rem;
      font-weight: 600;
   }
`

function ContentHour(props) {
   return (
      <Dive>
         <div>
            <h3>{props.hour}</h3>
            <p>{props.hourText}</p>
         </div>
         <div>
            <h3>{props.lang}</h3>
            <p>{props.langText}</p>
         </div>
      </Dive>
   )
}

export default ContentHour