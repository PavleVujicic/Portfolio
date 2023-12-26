import styled from "styled-components"
import horizontalmonitor from './images/horizontalMonitor.png'
import Section2Typewriter from "./Section2Typewriter"
import { useInView } from "react-intersection-observer"
import verticalmonitor from './images/verticalMonitor.png'



//<h2 ref={myRef} className={`fade-in ${inView ? 'is-visible' : ''}`}>{inView ? "Canadas highest performing handicappers." : null}</h2>

const Section2Animation = () => {

    const { ref: myRef, inView } = useInView({ threshold: 0.5, delay: 500});
    const { ref: deskRef, inView: inViewDesk } = useInView({ threshold: 0.5, delay: 500});
    return (
        <Section2AnimationWrap>
            <DeskWrap>
                <VerticalMonitorImg src={require('./images/verticalMonitor.png')} ref={myRef} className={`fade-in-vertical ${inView ? 'is-visible-vertical' : ''}`}/>
            <MonitorDiv ref={myRef} className={`fade-in ${inView ? 'is-visible' : ''}`}>
                <Section2Typewriter/>
            </MonitorDiv>
            <NotificationsImg src={require('./images/notifications.png')} ref={deskRef} className={`fade-in-desk ${inViewDesk ? 'is-visible-desk' : ''}`}/>
            <DeskImg src={require('./images/sittingDesk.png')} ref={deskRef} className={`fade-in-desk ${inViewDesk ? 'is-visible-desk' : ''}`}/>
            </DeskWrap>
        </Section2AnimationWrap>
    )
}

const VerticalMonitorImg = styled.img`
position: absolute;
z-index: 20;
width:20%;
top: 20%;
right: 10%;
border: 2px solid black;
border-radius: 5px;
/* transform: rotate(90deg); */
/* height: 20%; */
/* 
border: 1px solid black;
width: 20%; */
`

const MonitorDiv = styled.div`
background-image: url(${horizontalmonitor});
background-repeat: no-repeat;
background-size: contain;
/* background-size: cover; */
/* background-color: #fff; */
position: absolute;
top: 10%;
left: 10%;
z-index:1;
height: 30%;
width: 30%; 
padding-top: 30px;
padding-left: 15px;
overflow: hidden;
`

const NotificationsImg = styled.img`
position: absolute;
top: 20%;
height: 20%;
width: 20%;
animation: 1s ease-in-out 0s infinite running bounce;
z-index: 9;

@keyframes bounce {
    0% { transform: translateY(10px); }
    50% { transform: translateY(0px); }
    100% { transform: translateY(10px); }
    
}
`

const DeskWrap = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
height: 100%;
width: 100%;

`

const DeskImg = styled.img`
position: absolute;
width: 80%;
height: 80%;
z-index: 10;
`

const Section2AnimationWrap = styled.div`
height: 100%;
width: 100%;
`



export default Section2Animation