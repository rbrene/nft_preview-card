import React from 'react';
import { HeadingComponentProps } from '../types/interfaces';
import { H1, Letter } from '../styled-components/global/Typography';
import { useTrail } from '@react-spring/web';


const Heading = ({ word }: HeadingComponentProps) => {

    const trail = useTrail(word.length, {
        from: {
            rotateY: '90deg'
        },
        to: {
            rotateY: '0deg',
        },
        config: {
            mass: 1,
            tension: 450,
            friction: 26
        }
    })

    return (
        <H1>
            {
                trail.map((props, index) => {
                    return <Letter key={index} style={props} data-letter={word[index]}>{word[index]}</Letter>
                })
            }
        </H1>
    );
}

export default Heading;