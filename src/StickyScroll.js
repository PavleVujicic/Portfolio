
import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import styled from "styled-components";
import { textColor, primaryColor } from "./GlobalStyles";
import gridImage from './images/grid.jpeg';
import './styles/intersection.css'
import Section2Animation from "./Section2Animation";
import Section2Content from "./Section2Content";
import { GrLocation } from "react-icons/gr";
import { IconContext } from "react-icons/lib";
import { FaGithubAlt, FaLinkedin, FaInstagram } from "react-icons/fa"


const StickyScroll = () => {


  const sections = [
    {
      id: 1,
      background: "#3498db",
      content: (
        <SectionDiv1 className="section1">
          <ContentWrap>
            <Img className="w-50 h-50 img-fluid mx-auto"src={require('./images/avatar4.jpg')}/>
            <AboutInfo>
              <H2>About</H2>
              <P className="">My name is Pavle Vujicic, a dynamic, self-motivated, and team-oriented second year computer science
               student at Carleton University in Ottawa, Ontario, wanting to gain work experience through a part-time or full-time job that
                offers challenging responsibilities, and the potential for advancement. I am driven by a desire to excel in the field 
                of computer science, to continuously learn and adapt to emerging technologies, and to contribute positively to any team
                 or project I am a part of. My interests include Computer & Internet
                 security, web development, and game development. 
                
              </P>
              <InfoWrap>
                <IconContext.Provider value={{ size: '30px'}}>
                <P><GrLocation/>Ottawa, Canada</P>

                </IconContext.Provider>
              </InfoWrap>
            </AboutInfo>
          </ContentWrap>
        </SectionDiv1>
      ),
    },
    {
      id: 2,
      background: "#f1c40f",
      content: (
        <SectionDiv2 className="section2">
          <ContentWrap2>
            <AnimationWrap>
              <Section2Animation/>
            </AnimationWrap>
            <Section2ContentWrap>
              <Section2Content/>
            </Section2ContentWrap>
          {/* <Section2Img src={require('./laptopGraphic.png')}/> */}
          </ContentWrap2>
        </SectionDiv2>
      ),
    },
    {
      id: 3,
      background: "#e67e22",
      content: (
        <SectionDiv3 className="section3">
          <SkillsWrap>
            <div>
            <H1>Lets</H1>
            <H1Bot>get in touch.</H1Bot>
            </div>
          </SkillsWrap>
          <CardWrap>
          <Card class="card">
          <Ppavle>
            Pavle Vujicic
          </Ppavle>
          <ContactMe>
            Contact Me.
          </ContactMe>
          <GridDiv>
          <IconContext.Provider value={{ className: 'responsive-icon', }}>
            <GridItem><a  target="_blank" rel="noreferrer" href="https://github.com/PavleVujicic"><FaGithubAlt/></a></GridItem>
            <GridItem></GridItem>
            <GridItem><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pavle-vuji%C4%8Di%C4%87-a24774224/"><FaLinkedin/></a></GridItem>
            <GridItem></GridItem>
            <GridItem><a target="_blank"rel="noreferrer" href="https://www.instagram.com/pavlevujicic7/"><FaInstagram/></a></GridItem>
            <GridItem></GridItem>
          </IconContext.Provider>
          </GridDiv>
          </Card>
          </CardWrap>
        </SectionDiv3>
      ),
    },
  ];

  return (
    <Container className="container">
      {sections.map((section, index) => (
        <SectionWrapper key={index}>
          <Controller>
            <Scene triggerHook="onLeave" duration="100%" pin>
              <Tween>
                <StickyDiv>
                  {section.content}
                </StickyDiv>
              </Tween>
            </Scene>
          </Controller>
        </SectionWrapper>
      ))}
    </Container>
  );
};

const Ppavle = styled.p`
margin:0px;
`

const ContactMe = styled.h2`
margin:0px;
`

const GridItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${primaryColor};
  display: flex; 
  align-items: center; 
  justify-content: center; 
  box-sizing: border-box;

  :nth-child(odd) {
    border: 2px solid ${textColor}
  }

  :nth-child(even) {
    /* border: 2px solid ${textColor}; */
    background-color: ${textColor};
  }

`

const GridDiv = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
width: 90%;
height: 80%;


`

const CardWrap = styled.div `
display: flex;
align-items: center;
justify-content: center;
width: 50%;
height: 100%;
padding: 30px;
@media (max-width: 767px) {
    width: 80%;
    height: 80%;
  }
`

const H1 = styled.h1 `
font-size: 40px;
margin-top: 15px;
`

const H1Bot = styled.h1 `
font-size: 40px;
border-bottom: 1px solid ${textColor};
width: fit-content;
`

const SkillsWrap = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
align-items: center;
`


const InfoWrap = styled.div `

`

const H2 = styled.h2`
border-bottom: 1px solid ${textColor};

`
const P = styled.p`
@media (max-width: 580px) {
  font-size: 0.8rem;
}
`

const AboutInfo = styled.div`
display: flex;
flex-direction: column;
margin: 20px;
`

const Img = styled.img`
border-radius: 50%;
width: 50px;
height: 75px;
`

const ContentWrap = styled.div`
display: flex;
width: 80%;
@media (max-width: 768px) {
    flex-direction: column;
  }

`

const ContentWrap2 = styled.div`
/* background-image: url(${gridImage}); */
display: flex;
justify-content: space-evenly;
width: 100%;
height: 60%;
`

const AnimationWrap = styled.div`
height: 100%;
width: 48%;
@media (max-width: 768px) {
    display: none;
  }

`

const Section2ContentWrap = styled.div `
height: 100%;
width: 48%;
@media (max-width: 768px) {
    width: 100%;
  }
`

const Card = styled.div`
background-color: ${primaryColor};
display: block;
width: 80%;
height: 50%;
min-height: 90px;
border: 3px solid #E5D9B6;
padding: 15px;

box-shadow: 10px -10px 0 -3px ${primaryColor}, 10px -10px #A4BE7B,
      20px -20px 0 -3px ${primaryColor}, 20px -20px #5F8D4E, 
      30px -30px 0 -3px ${primaryColor}, 30px -30px ${textColor}, 
      40px -40px 0 -3px ${primaryColor}, 40px -40px #263A29; 
transition: box-shadow 1s, top 1s, left 1s;
position: relative;
top: 0;
left: 0;

:hover {
  top: -40px;
  left: 40px;
  box-shadow: 0 0 0 -3px #fff, 0 0 0 0 #1FC11B,
      0 0 0 -3px #fff, 0 0 0 0 #FFD913,
      0 0 0 -3px #fff, 0 0 0 0 #FF9C55,
      0 0 0 -3px  #fff, 0 0 0 0 #FF5555;
}

@media (max-width: 768px) {
    width: 100%;
  }
`


const SectionDiv1 = styled.div`
background-color: ${primaryColor};
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
border-bottom: 1px solid ${textColor};


`

const SectionDiv2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${primaryColor};
height: 100%;
width: 100%;
border-top: 1px solid ${textColor};


`

const SectionDiv3 = styled.div`
display: flex;
background-color: ${primaryColor};
height: 100%;
width: 100%;
border-top: 1px solid ${textColor};

@media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

`

const SectionWrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const StickyDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${textColor};
  padding-bottom: 50px;
`;

const Container = styled.div`
  position: relative;
`;

export default StickyScroll;
