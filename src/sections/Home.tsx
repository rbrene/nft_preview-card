import React, { Suspense, lazy } from 'react';
import { Section } from '../styled-components/index';
import { FlexCenter } from '../styled-components/layouts/flex/index';
import Loader from '../components/Progressbar';
import data from '../helpers/data';


const Card = lazy(() => import('../components/Card'));

const Home = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Section id='home'>
                <FlexCenter>
                    <Card data={data} />
                </FlexCenter>
            </Section>
        </Suspense>
    )
}

export default Home;