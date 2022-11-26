import React from 'react';
import { Section } from '../styled-components/index';
import { FlexCenter } from '../styled-components/layouts/flex/index';
import Card from '../components/Card';
import data from '../helpers/data';


const Home = () => {
    return (
        <Section id='home'>
            <FlexCenter>
                <Card data={data} />
            </FlexCenter>
        </Section>
    )
}

export default Home;