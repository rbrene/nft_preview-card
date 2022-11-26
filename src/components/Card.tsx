import React from 'react';
import { CardPropsTypes } from '../types/interfaces';
import { Preview, Avatar } from '../styled-components/components/Images';
import { H4, P } from '../styled-components/global/Typography';
import {
    Card as Wrapper,
    CardLayout,
    Image,
    View,
    Header,
    Description,
    Details,
    Footer,
    Icon,
    Currency,
    TimeLimit,
    ProfileImage,
    Designer,
    Name,
} from '../styled-components/components/Card';
import { ReactComponent as IconClock } from '../assets/images/icon-clock.svg';
import { ReactComponent as IconEthereum } from '../assets/images/icon-ethereum.svg';
import { ReactComponent as IconView } from '../assets/images/icon-view.svg';
import { animated, useSpring } from '@react-spring/web';


const Card = ({ data }: CardPropsTypes) => {
    const [imageHover, setImageHover] = React.useState<boolean>(false);
    const [h4Hover, setH4Hover] = React.useState<boolean>(false);
    const [nameHover, setNameHover] = React.useState<boolean>(false);

    const imageMouseEnter = (e: MouseEvent) => setImageHover(true);
    const h4MouseEnter = (e: MouseEvent) => setH4Hover(true);
    const nameMouseEnter = (e: MouseEvent) => setNameHover(true);

    const imageMouseLeave = (e: MouseEvent) => setImageHover(false);
    const h4MouseLeave = (e: MouseEvent) => setH4Hover(false);
    const nameMouseLeave = (e: MouseEvent) => setNameHover(false);

    const { images, header, description, currency, timeLimit, designer } = data;

    const highlightH4 = useSpring({
        to: {
            color: h4Hover ? 'hsl(178, 100%, 50%)' : 'hsl(0, 0%, 100%)'
        }
    })

    const highlightName = useSpring({
        to: {
            color: nameHover ? 'hsl(178, 100%, 50%)' : 'hsl(0, 0%, 100%)'
        }
    })

    const toggleView = useSpring({
        to: {
            scaleY: imageHover ? 1 : 0
        },
        delay: imageHover ? 0 : 250
    })

    const close = useSpring({
        to: {
            scaleY: imageHover ? 1 : 0
        },
        delay: imageHover ? 250 : 0
    })

    return (
        <Wrapper>
            <CardLayout>
                <Image
                    onMouseEnter={imageMouseEnter}
                    onMouseLeave={imageMouseLeave}
                >
                    <Preview src={images.preview} arc={header} />
                    <View style={toggleView}>
                        <animated.span style={close}>
                            <IconView/>
                        </animated.span>
                    </View>
                </Image>
                <Header>
                    <H4
                        onMouseEnter={h4MouseEnter}
                        onMouseLeave={h4MouseLeave}
                        style={highlightH4}
                    >{header}</H4>
                </Header>
                <Description>
                    <P>{description}</P>
                    <Details>
                        <Currency> <Icon><IconEthereum/></Icon> {currency}EFT</Currency>
                        <TimeLimit> <Icon><IconClock/></Icon> {timeLimit} days left</TimeLimit>
                    </Details>
                </Description>
                <Footer>
                    <ProfileImage>
                        <Avatar src={images.avatar} alt={designer} />
                    </ProfileImage>
                    <Designer> Creation of <Name
                        onMouseEnter={nameMouseEnter}
                        onMouseLeave={nameMouseLeave}
                        style={highlightName}
                    >{designer}</Name></Designer>
                </Footer>
            </CardLayout>
        </Wrapper>
    )
}

export default Card;