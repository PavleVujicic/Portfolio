import Typewriter from 'typewriter-effect'

const Section2Typewriter = () => {
    return (
        <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString(`<p style="display: inline; font-family: 'Fira Code Light'; font-size: 5px;">
            const Header = () => {
                </br>const [ show, setShow ] = useState(false);
                </br>ref={myRef} className={'fade-in'}
                </br>return `)
            // .pauseFor(500)
            // .typeString(`<p style="display: inline; font-family: 'Fira Code Light'; font-size: 5px;"><span style="font-family: 'Fira Code Bold'; font-size: 5px;">stephen</span>);</p>`)
            // .pauseFor(200)
            // .typeString('<h1 style="opacity: 0;">|</h1>')
            // .pauseFor(200)
            .start()
            }}
        options={{
            cursor: '|',
            delay: 30,
            loop: true,
            cursorClassName: 'TypewriterCursorSmall'
            }}
        />
    )
}

export default Section2Typewriter;