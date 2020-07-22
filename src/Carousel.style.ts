import styled, { css } from "styled-components";
import { StyledProps } from "./Carousel";

const ScrollButtonBase = css`
    display: none;
    @media only screen and (min-width: 600px) {
        width: 42px;
        height: 42px;
        background-color: transparent;
        padding: 0;
        border: none;
        opacity: 0.4;
        &:focus {
            opacity: 1;
            outline: none;
        }
        position: absolute;
        z-index: 100;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ImgContainer = styled.ol`
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    margin: 0;
    padding: 0;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
    width: 100%;

    @supports not (scroll-snap-align: start) {
        -webkit-scroll-snap-type: mandatory;
        scroll-snap-type: mandatory;
        -webkit-scroll-snap-destination: 0 50%;
        scroll-snap-destination: 0 50%;
        -webkit-scroll-snap-points-x: repeat(100%);
        scroll-snap-points-x: repeat(100%);
    }

    @supports (scroll-snap-align: start) {
        scroll-snap-type: x mandatory;
    }
`

export const ImageWrapper = styled.li`
    display: inline-flex;
    flex: 0 0 100%;
    box-sizing: border-box;

    @supports not (scroll-snap-align: start) {
        scroll-snap-coordinate: 0 0;
    }

    @supports (scroll-snap-align: start) {
        scroll-snap-align: start;
    }
`;

export const ScrollLeft = styled.button`
    display: none;
`;

export const ScrollRight = styled.button`
    display: none;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    max-width: 400px;
    margin: 0 auto;

    &:hover > ${ScrollLeft} {
        ${ScrollButtonBase}
        top: calc(50% - 21px);
        left: 0;
    }
    &:hover > ${ScrollRight} {
        ${ScrollButtonBase}
        top: calc(50% - 21px);
        right: 0;
    }
`;

export const Indicator = styled.span<StyledProps>`
    height: ${props => (props.isCurrent ? 6 : 4)}px;
    width: ${props => (props.isCurrent ? 6 : 4)}px;
    border-radius: 50%;
    background-color: ${props => (props.isCurrent ? "#FFFFFF" : "#7f7f7f")};
    display: inline-block;
    &:hover {
        background-color: "#FFFFFF";
        height: 6px;
        width: 6px;
    }
    @media only screen and (min-width: 600px) {
        height: ${props => (props.isCurrent ? 10 : 8)}px;
        width: ${props => (props.isCurrent ? 10 : 8)}px;
        &:hover {
            background-color: "#FFFFFF";
            height: 10px;
            width: 10px;
        }
    }
`;

export const IndicatorContainer = styled.div`
    position: absolute;
    z-index: 100;
    bottom: 8px;
    width: 40px;
    right: calc(50% - 20px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-width: 600px) {
        bottom: 10px;
        width: 60px;
        right: calc(50% - 30px);
    }
`;

