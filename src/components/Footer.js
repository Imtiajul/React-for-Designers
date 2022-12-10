import React from "react";
import styled from "styled-components"

const FooterGroup = styled.div`
   padding: 5rem 0;
   margin: 0 auto;
   display: grid;
   grid-gap: 2rem;
`
const Text = styled.p`
   max-width: 50rem; 
   color: #486791;
   font-size: 2.4rem;
   margin: 0 auto;
   font-weight: 600;
   text-align: center;
`
const Button = styled.button`
   background: linear-gradient(93.96deg, #9B51E0 0%, #3436E7 100%);
   box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
   border-radius: 50px;
   font-size: 24px;
   line-height: 1.2;
   cursor: pointer;

   padding: 1.6rem 6rem;   
   color: white;
   border: none;
   justify-self: center;
   transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

   &:hover {
      box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
      transform: translateY(-3px);
   }
`
const LinkGroup = styled.div`
   width: 100%;
   margin: 5rem auto;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 1rem;
   transition: 0.8s;
   justify-items: center;
   
   @media (max-width:576px){
      grid-template-columns: auto;
      text-align: center;
      grid-row-gap: 2rem;
   }

   a:hover {
      color: black;
   }
`
const Copyright = styled.div`
   margin: 0 auto;
   max-width: 50rem;
   color: #486791;
   text-align: center;
   `
const LinkGroupItems = styled.div`
   display: grid;
   grid-row-gap: .8rem;
   
   h5 {
      font-size: 1.8rem;
      font-weight: 600;
      color: rgba(148, 164, 186, 1);
      margin: 0;
      margin-bottom: .5rem;
   }
`

const Footer = ({ data, children }) => (
   <FooterGroup className="container">
      <Text>Tweet “Prototype and build apps with React and Swift. New courses by @IMI”</Text>
      <Button>Tweet</Button>
      <LinkGroup>
         <LinkGroupItems>
            <h5>Main</h5>
            {data.allContentfulLink.edges.map(edge => (
            <a href={edge.node.url}>{edge.node.title}</a>
         ))}
         </LinkGroupItems>
         <LinkGroupItems>
               <h5>Downloads</h5>
            {data.allContentfulFooterDownloadLink.edges.map(edge => (
            <a href={edge.node.url}>{edge.node.title}</a>
         ))}
         </LinkGroupItems>
         <LinkGroupItems>
               <h5>Community</h5>
            {data.allContentfulFooterCommunityLink.edges.map(edge => (
            <a href={edge.node.url}>{edge.node.title}</a>
         ))}
         </LinkGroupItems>

      </LinkGroup>
      <Copyright>{children}</Copyright>

   </FooterGroup>
)

export default Footer