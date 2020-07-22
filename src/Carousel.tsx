import * as React from "react";
import { useState, useRef } from "react";
import {
    ImgContainer,
    ImageWrapper,
    Container,
    ScrollLeft,
    ScrollRight,
    IndicatorContainer,
    Indicator
} from "./Carousel.style";
import SVGIcon from "./SVGIcon";


const image = [
    {
        imageUrl: "https://i.pinimg.com/564x/94/b0/a2/94b0a22760ade243dd0e2fb4fe3acf0c.jpg"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/fe/88/b5/fe88b556118ef8b5352331ce4d5da2cf.jpg"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/3c/07/ee/3c07ee82742b951a1238ec4fe0a73ad4.jpg"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/9e/56/cb/9e56cbfc761793360e04e3030148dab4.jpg"
    },
];

export interface StyledProps {
    isCurrent?: boolean;
}

const Carousel = (props: StyledProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const containerRef = useRef<HTMLOListElement>(null);
    const scrollRef = useRef<HTMLLIElement>(null);


    const handleScrollLeft = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (currentIndex === 0) {
            setCurrentIndex(image.length - 1);
            if (scrollRef?.current?.offsetWidth) {
                containerRef?.current?.scrollBy({
                    left: scrollRef?.current?.offsetWidth * image.length,
                    behavior: "smooth",
                });
            }
        } else {
            setCurrentIndex(prevCurrent => prevCurrent - 1);
            if (scrollRef?.current?.offsetWidth) {
                containerRef?.current?.scrollBy({
                    left: scrollRef?.current?.offsetWidth && - scrollRef?.current?.offsetWidth,
                    behavior: "smooth",
                });
            }
        }
    };

    const handleScrollRight = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (currentIndex !== image.length - 1) {
            setCurrentIndex(prevCurrent => prevCurrent + 1);
            if (scrollRef?.current?.offsetWidth) {
                containerRef?.current?.scrollBy({
                    left: scrollRef?.current?.offsetWidth && scrollRef?.current?.offsetWidth,
                    behavior: "smooth",
                });
            }
        } else {
            setCurrentIndex(0);
            if (scrollRef?.current?.offsetWidth) {
                containerRef?.current?.scrollBy({
                    left: scrollRef?.current?.offsetWidth && - scrollRef?.current?.offsetWidth * image.length,
                    behavior: "smooth",
                });
            }
        }
    };

    const handleIndicatorClick = (e: React.MouseEvent<HTMLElement>, indicatorIndex: number) => {
        e.preventDefault();
        setCurrentIndex(indicatorIndex);
        if (scrollRef?.current?.offsetWidth) {
            containerRef?.current?.scrollBy({
                left:
                    indicatorIndex > currentIndex
                        ? scrollRef?.current?.offsetWidth && scrollRef?.current?.offsetWidth * (indicatorIndex - currentIndex)
                        : scrollRef?.current?.offsetWidth && -scrollRef?.current?.offsetWidth * (currentIndex - indicatorIndex),
                behavior: "smooth",
            });
        }
    };

    return (
        <Container>
            {
                image.length > 1 && (
                    <ScrollLeft onClick={e => handleScrollLeft(e)}>
                        <SVGIcon name="chevronLeft" fill="#000" viewBox={"-8 0 40 26"} />
                    </ScrollLeft>
                )
            }
            <ImgContainer ref={containerRef}>
                {
                    image.map((item, index) => (
                        <ImageWrapper ref={scrollRef} key={item.imageUrl}>
                            <img src={item.imageUrl} alt="" width="400" height="600" />
                        </ImageWrapper>
                    ))
                }

            </ImgContainer>
            {
                image.length > 1 && (
                    <>
                        <IndicatorContainer id="indicator">
                            {image.map((item, indicatorIndex) => (
                                <Indicator
                                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                                        handleIndicatorClick(e, indicatorIndex)
                                    }
                                    isCurrent={indicatorIndex === currentIndex}
                                    key={item.imageUrl}
                                />
                            ))}
                        </IndicatorContainer>
                        <ScrollRight onClick={e => handleScrollRight(e)}>
                            <SVGIcon name="chevronRight" fill="#000" viewBox={"-8 0 40 26"} />
                        </ScrollRight>
                    </>
                )
            }
        </Container>
    )
};

export default Carousel;