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

export interface Image {
    imageUrl: string;
    altText: string;
}

export interface OwnProps {
    image: Image[];
}

export interface StyledProps {
    isCurrent?: boolean;
}

export type Props = OwnProps & StyledProps;

const Carousel = (props: Props) => {

    const { image } = props;

    const [currentIndex, setCurrentIndex] = useState(0);

    const containerRef = useRef<HTMLOListElement>(null);
    const scrollRef = useRef<HTMLLIElement>(null);


    const handleScrollLeft = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (currentIndex === 0) {
            setCurrentIndex(image.length - 1);
            if (scrollRef.current) {
                containerRef?.current?.scrollBy({
                    left: scrollRef.current.offsetWidth * image.length,
                    behavior: "smooth",
                });
            }
        } else {
            setCurrentIndex(prevCurrent => prevCurrent - 1);
            if (scrollRef.current) {
                containerRef?.current?.scrollBy({
                    left: - scrollRef.current.offsetWidth,
                    behavior: "smooth",
                });
            }
        }
    };

    const handleScrollRight = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (currentIndex !== image.length - 1) {
            setCurrentIndex(prevCurrent => prevCurrent + 1);
            if (scrollRef.current) {
                containerRef?.current?.scrollBy({
                    left: scrollRef.current.offsetWidth,
                    behavior: "smooth",
                });
            }
        } else {
            setCurrentIndex(0);
            if (scrollRef.current) {
                containerRef?.current?.scrollBy({
                    left: - scrollRef.current.offsetWidth * image.length,
                    behavior: "smooth",
                });
            }
        }
    };

    const handleIndicatorClick = (e: React.MouseEvent<HTMLElement>, indicatorIndex: number) => {
        e.preventDefault();
        setCurrentIndex(indicatorIndex);
        if (scrollRef.current) {
            containerRef?.current?.scrollBy({
                left:
                    indicatorIndex > currentIndex
                        ? scrollRef.current.offsetWidth && scrollRef.current.offsetWidth * (indicatorIndex - currentIndex)
                        : scrollRef.current.offsetWidth && -scrollRef.current.offsetWidth * (currentIndex - indicatorIndex),
                behavior: "smooth",
            });
        }
    };

    const handleScroll = () => {
        if (containerRef.current) {
            if (containerRef.current.scrollLeft % containerRef.current.clientWidth === 0) {
                const scrollIndex = containerRef.current.scrollLeft / containerRef.current.clientWidth;
                if (scrollIndex !== currentIndex) {
                    setCurrentIndex(scrollIndex);
                }
            }
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
            <ImgContainer ref={containerRef} onScroll={handleScroll}>
                {
                    image.map((item, index) => (
                        <ImageWrapper ref={scrollRef} key={item.imageUrl}>
                            <img src={item.imageUrl} alt={item.altText} width="400" height="600" />
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
