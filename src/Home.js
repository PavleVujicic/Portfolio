import { useState } from "react";
import SideBar from "./SideBar"
import styled from "styled-components"
import Typewriter from 'typewriter-effect';
import './styles/home.css'
import StickyScroll from "./StickyScroll";
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import { IconContext } from "react-icons/lib";
import RightSideBar from "./RightSideBar";
import { textColor } from "./GlobalStyles";
import CustomContent from "./CustomContent";

const Home = () => {

    const [showPasteString, setShowPasteString] = useState(false);
    const [ showButton, setShowButton ] = useState(false)


    const handleClick = () => {
        setShowPasteString(prevState => !prevState);
    };


    const baseIconStyle = {
        transition: 'transform 0.3s ease',
    };

    const activeIconStyle = {
        transform: 'rotate(90deg)',
    };


    return (
        <PageWrap>
            <SideBarWrapper>
                <SideBar/>
            </SideBarWrapper>
            <MainWrap>
                <TypeWrap>
                <Typewriter 
                onInit={(typewriter) => {

                    // setTypewriterInstance(typewriter);

                    typewriter
                    .typeString(`<h1 class="typewriter-h1">console.log("Hello World! 👋");</h1>`)
                    .pauseFor(500)
                    .deleteChars(19)
                    .typeString(`<h1 class="typewriter-h1"><span class="typewriter-bold">Pavle</span>);</h1>`)
                    .pauseFor(200)
                    .typeString('<h1 style="opacity: 0;">|</h1>')
                    .pauseFor(200)
                    .callFunction(() => {
                        setShowButton(true);
                    })
                    .start()
                    }}
                options={{
                    cursor: '|',
                    delay: 30,
                    loop: false,
                    cursorClassName: 'TypewriterCursor'
                    }}
                />
                {showButton && (
                    <div>
                        <Button onClick={handleClick}>
                        <IconContext.Provider value={{ size: '30px'}}>
                        <IoMdArrowDroprightCircle style={{ ...baseIconStyle, ...(showPasteString ? activeIconStyle : {})}}/>
                        </IconContext.Provider>
                        </Button>
                        <Button onClick={handleClick}>Object</Button>
                    </div>
                )}
                {showPasteString && (
                    <CustomContent/>
                )}
                </TypeWrap>
                <StickyScroll/>
            </MainWrap>
            <RightSideWrap>
                <RightSideBar/>
            </RightSideWrap>
        </PageWrap>
    )
}


const TypeWrap = styled.div`
height: calc(100vh - 150px);
border-bottom: 1px solid ${textColor};
`

const RightSideWrap = styled.div`
width: 100px;
display: flex;
margin: 10px 30px;

@media (max-width: 768px) {
    display: none;
  }

`

const Button = styled.button`
border: none;
text-decoration: none;
font-size: 32px;
cursor: pointer;
background: none;
`

const SideBarWrapper = styled.div`
width: 175px;
margin: 10px 30px;
display: flex;
justify-content:center;

@media (max-width: 768px) {
    display: none;
}
`

const MainWrap = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

const PageWrap = styled.div`
display: flex;
`

export default Home