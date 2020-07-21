import * as React from "react";
import { useState, useRef } from "react";
import { ImgContainer, ImageWrapper, Container, ScrollLeft, ScrollRight } from "./Carousel.style";
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

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const containerRef = useRef<HTMLOListElement>(null);
    const scrollRef = useRef<HTMLLIElement>(null);

    const scrollOffset = scrollRef?.current?.offsetWidth;

    const handleScrollLeft = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (currentIndex === 0) {
            setCurrentIndex(image.length - 1);
            containerRef?.current?.scrollBy({
                left: scrollOffset && scrollOffset * image.length,
                behavior: "smooth",
            });
        } else {
            setCurrentIndex(prevCurrent => prevCurrent - 1);
            containerRef?.current?.scrollBy({
                left: scrollOffset && - scrollOffset,
                behavior: "smooth",
            });
        }
    };

    const handleScrollRight = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (currentIndex !== image.length - 1) {
            setCurrentIndex(prevCurrent => prevCurrent + 1);
            containerRef?.current?.scrollBy({
                left: scrollOffset,
                behavior: "smooth",
            });
        } else {
            setCurrentIndex(0);
            containerRef?.current?.scrollBy({
                left: scrollOffset && - scrollOffset * image.length,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <Container>
                {
                    image.length > 1 && (
                        <ScrollLeft onClick={e => handleScrollLeft(e)}>
                            <SVGIcon name="chevronLeft" fill="#000" viewBox={"-5 0 40 26"} />
                        </ScrollLeft>
                    )
                }
                <ImgContainer ref={containerRef}>
                    {
                        image.map((item, index) => (
                            <ImageWrapper ref={scrollRef}>
                                <img src={item.imageUrl} alt="" width="400" height="600" />
                            </ImageWrapper>
                        ))
                    }

                </ImgContainer>
                {
                    image.length > 1 && (
                        <ScrollRight onClick={e => handleScrollRight(e)}>
                            <SVGIcon name="chevronRight" fill="#000" viewBox={"-5 0 40 26"} />
                        </ScrollRight>
                    )
                }
            </Container>
        </>
    )
};

export default Carousel;