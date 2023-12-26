import styled from "styled-components";
import Widget from "./Widget";

const Section2Content = () => {
    return (
        <Section2ContentWrap>
            <Widget/>
        </Section2ContentWrap>
    )
}

const Section2ContentWrap = styled.div`
height: 100%;
width: 100%;
@media (max-width: 1200px) {
  display: flex;
  justify-content: center;
}
`

export default Section2Content;