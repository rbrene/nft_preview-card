import React from 'react';
import { Section } from '../styled-components/index';
import { FlexCenter } from '../styled-components/layouts/flex/index';
import { H6 } from '../styled-components/global/Typography';
import Heading from '../components/Heading';
import { useSpring } from '@react-spring/web';


const Home = () => {
    const h6 = useSpring({
        from: {
            letterSpacing: '-1ch',
            opacity: 0,
        },
        to: {
            opacity: 0.2,
            letterSpacing: '0.1ch'
        },
        delay: 500,
        config: {
            mass: 1,
            tension: 300,
            friction: 26
        }
    }) 
    return (
        <Section id='home'>
            <FlexCenter>
                <Heading word='react typescript' />
                <H6 style={h6}> pwa template </H6>
            </FlexCenter>
        </Section>
    )
}

export default Home;