import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "./Main.css"
import Card from "./Card"
import Section from "./Section"
import Wave from "./Wave"
import StaticData from "../../staticdata.json"
import Cell from "./Cell"

const SectionCellGroup = styled.div `
   max-width: 800px;
   margin: 0 auto 10rem;
   display: grid;
   grid-template-columns: repeat(2, 1fr); 
   grid-gap: 2.5rem;
   row-gap: 1rem;

   @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      column-gap: 0;
   }

`
const SectionCellTitle = styled.h3 `
   font-size: 2.8rem;
   text-transform: uppercase;
   text-align: center;
   background-image: linear-gradient(104deg, #050A27 0%, #4A53BC 100%);
   background-clip: text;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`

const App = () => (
   <div>
      <div className="Hero">
         <div className="HeroGroup">
            <h1>Learn to <br />design and code React Apps</h1>
            <p>Complete courses about the best tools and design systems. Prototype and building apps with React and Swift.</p>
            <Link to="page-2">Watch the video</Link>
            <div className="Logos">
               <img src={require('../images/logo-sketch.png').default} alt="sketch" width="50" />
               <img src={require('../images/logo-figma.png').default} alt="figma" width="50" />
               <img src={require('../images/logo-studio.png').default} alt="studio" width="50" />
               <img src={require('../images/logo-framer.png').default} alt="framer" width="50" />
               <img src={require('../images/logo-react.png').default} alt="react" width="50" />
               <img src={require('../images/logo-swift.png').default} alt="swift" width="50" />
            </div>
            {/* wave svg component */}
            <Wave/>
         </div>
      </div>
      
      {/* card component */}
      <div className="Cards">
         <h2>11 Courses, more coming</h2>
         <div className="CardGroup">
            <Card
               title="Design System"
               text="10 sections"
               image={require('../images/wallpaper.jpg').default}
            />
            <Card
               title="React for Designers"
               text="12 sections"
               image={require('../images/wallpaper2.jpg').default}
            />
            <Card
               title="Sound System"
               text="5 sections"
               image={require('../images/wallpaper3.jpg').default}
            />
            <Card
               title="ARKit"
               text="10 sections"
               image={require('../images/wallpaper4.jpg').default}
            />
         </div>
      </div>
      {/* Section component */}
      <Section image={require('../images/wallpaper2.jpg').default}
      logo={require('../images/logo-react.png').default}
      title="React for Desingers"
      text="lorem ipsum dolor siteset, consectetur adipiscing elit, sed diam nonexistent, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat, sed diam nonumy eirmod"      />


      {/* SectionCellGroup component*/}

         <section className="my-3">
            <SectionCellTitle>9 Sections - 5 Hours</SectionCellTitle>
            <SectionCellGroup>
               {StaticData.cells.map(cell => (
                  <Cell
                     title={cell.title}
                     image={cell.image}
                     />
               ))}
            </SectionCellGroup>
         </section>

   </div>
)

export default App