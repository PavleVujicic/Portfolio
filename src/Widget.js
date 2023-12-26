import styled from "styled-components";
import { useState } from "react";
import './styles/widget.css'
import { textColor } from "./GlobalStyles";


const Widget = () => {

  const renderOne = (
    <ItemContentWrap>
      <DescriptionWrap>
          <Ul>
          <H1>DUBS Advising Inc.</H1>
            <Li>Interned as a full-stack software engineer, gaining hands-on experience in various technologies and collaborating within a dynamic team environment. </Li>
            <Li>Worked on both the front-end development and back-end development.</Li>
        </Ul>
      </DescriptionWrap>
    </ItemContentWrap>)
  const renderTwo = (
    <ItemContentWrap>
      <DescriptionWrap>
        <Ul>  <Li>Created a web application to provide exhibition space for artists, to showcase their work and connect artists with the community.</Li>
              <Li>Developed a C program implemented as multi-process, that will simulate the escape by heroes through a Hollow, as flying monkeys and attack birds try to stop them.</Li>
              <ConcordiaProjectDiv>
              <Project target='_blank' href="https://www.youtube.com/watch?v=nEee0bbDUXs">Web App</Project>
              <Project target='_blank' href="https://github.com/PavleVujicic/C-Programming-FinalProject">C Program</Project>
              </ConcordiaProjectDiv>
          </Ul>
      </DescriptionWrap>
    </ItemContentWrap>
  )
  const renderThree = (
    <ItemContentWrap>
      <DescriptionWrap>
        <Ul>
          <H1>Carleton Univ.</H1>
            <Li>Bachelor of Computer Science, Computer and Internet Security (sept 2022-current)</Li>
          <H1>Aix-Marseille Univ.</H1>
            <Li>Bachelor of Computer Science (sept 2019-june 2020)</Li>
        </Ul>
        <ConcordiaProjectDiv>
            <Project target='_blank' href="https://drive.google.com/file/d/1pRjVn9BsoWHAr8aViJwlhhv0qnTeHZUg/view?usp=sharing">View my full resume</Project>
        </ConcordiaProjectDiv>
      </DescriptionWrap>
    </ItemContentWrap>
  )

  const [expandedItems, setExpandedItems] = useState([false, false, false]);

  const toggleItem = (index: number) => {
      setExpandedItems(expandedItems.map((item, i) => i === index ? !item : false));
  };

  const renderItem = (index: number) => {
      return (
          <div onClick={() => toggleItem(index)}>
              {index === 0 ? (<HeaderItem>Work Experience</HeaderItem>):(index === 1 ? (<HeaderItem>Projects</HeaderItem>):(<HeaderItem>Education</HeaderItem>))}
              {expandedItems[index] && (index === 0 ? (renderOne):(index === 1 ? (renderTwo):(renderThree)))}
          </div>
      );
  };

  return (
    <WidgetWrap>
        <ContentWrap>{renderItem(0)}</ContentWrap>
        <ContentWrap>{renderItem(1)}</ContentWrap>
        <ContentWrap>{renderItem(2)}</ContentWrap>
        {expandedItems.every(v => v === false) ? (
          <ConcordiaProjectDiv>
              <Project target='_blank' href="https://drive.google.com/file/d/1pRjVn9BsoWHAr8aViJwlhhv0qnTeHZUg/view?usp=sharing">View my full resume</Project>
          </ConcordiaProjectDiv>
        ):null}
    </WidgetWrap>
  );
};

const ConcordiaProjectDiv = styled.div`
display: flex;
width: 100%;
justify-content: center;

`

const Project = styled.a`
margin: 10px;
padding: 20px;
text-decoration: none;
border: 1px solid ${textColor};
transition: all 0.5s ease-out;

&:hover {
  background-color: darkgray;
  cursor: pointer;
}
`

const Ul = styled.ul`
margin: 20px;
`

const Li = styled.li`
text-align: left;
margin: 10px;
`

const H1 = styled.h1`
font-family: 'Fira Code Light';
`

const DescriptionWrap = styled.div `
display: flex;
flex-direction: column;
width: 100%;
`

const ItemContentWrap = styled.div `
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
overflow:auto;
`

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const StyledUl = styled.ul `
list-style-type: none;
display: flex;
width: 100%;
justify-content: space-evenly;
padding-left: 0px;
`

const HeaderItem = styled.li`
list-style-type: none;
text-align: center;
margin: 10px 20px;
position: relative;
transition: border-bottom 0.3s ease-in-out;
font-size: 2rem;
cursor: pointer;


border-bottom: 1px solid ${textColor};

&:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #333;
  transition: width 0.3s ease-in-out;
}

&:hover:before {
  width: 100%;
}

`;


const WidgetWrap = styled.div`  

display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
height: 100%;
width: 100%;
@media (max-width: 767px) {
  width: 90%;
  margin: 0px 10px;
}

`

export default Widget;