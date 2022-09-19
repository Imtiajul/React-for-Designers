import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "./Main.css"
import Card from "./Card"
import Section from "./Section"
import Wave from "./Wave"
import StaticData from "../../staticdata.json"
import Cell from "./Cell"

const SectionCellGroup = styled.div`
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
const SectionCellTitle = styled.h3`
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
            <Wave />
         </div>
      </div>

      {/* card component */}
      <div className="Cards py-5">
         <h2 className='heading-md'>11 Courses, more coming..</h2>
         <div className="CardGroup">
            <Card
               title="Design System with Figma"
               text="10 sections"
               image={require('../images/wallpaper.jpg').default}
            />
            <Card
               title="React for Designers"
               text="12 sections"
               image={require('../images/wp_react-for_designers.jpg').default}
            />
            <Card
               title="Video Editing with Screenflow"
               text="5 sections"
               image={require('../images/wp_video_editing.jpg').default}
            />
            <Card
               title="Sound Design with Cubase"
               text="6 sections"
               image={require('../images/wp_sound_design-cubase.jpg').default}
            />
            {/* <Card
               title="Build on ARKit App"
               text="10 sections"
               image={require('../images/wp_arkit-2.jpg').default}
            /> */}
            <Card
               title="Motion Design in After Effects"
               text="8 Sections"
               image={require('../images/wp_motion_design-after-effects.jpg').default}
            />
            {/* <Card
               title="Create a Sketch Plugin"
               text="7 Sections"
               image={require('../images/wp_sketch-plugin.jpg').default}
            /> */}
            <Card
               title="Create a Spritekit game"
               text="9 Sections"
               image={require('../images/wp_spritekit.jpg').default}
            />
            <Card
               title="Learn Swift"
               text="10 Sections"
               image={require('../images/wp_swift.jpg').default}
            />
            {/* <Card
               ttle="Swift Advanced"
               text="22 Sections"
               image={require('../images/wp_swift_advanced.jpg').default}
            /> */}
            <Card
               title="Learn Sketch"
               text="21 Sections"
               image={require('../images/wp_sketch.jpg').default}
            />
            {/* <Card
               title="Learn iOS Design"
               text="12 Sections"
               image={require('../images/wp_ios_design.jpg').default}
            /> */}
         </div>
      </div>
      {/* Section component */}
      <Section className="container" image={require('../images/wallpaper2.jpg').default}
         logo={require('../images/logo-react.png').default}
         title="React for Desingers"
         text="lorem ipsum dolor siteset, consectetur adipiscing elit, sed diam nonexistent, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat, sed diam nonumy eirmod" />


      <section className="my-3 container">
         <SectionCellTitle>9 Sections - 5 Hours</SectionCellTitle>
         <SectionCellGroup>
            {StaticData.cells.map(cell => (
               <Cell
                  title={cell.title}
                  image={cell.image}
                  logo_bg={cell.logo_bg}
               />
            ))}
         </SectionCellGroup>
      </section>

   </div>
)

export default App