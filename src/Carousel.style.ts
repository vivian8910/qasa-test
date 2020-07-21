import styled, { css } from "styled-components";

const ScrollButtonBase = css`
    display: none;
    @media only screen and (min-width: 600px) {
        width: 42px;
        height: 42px;
        padding: 0;
        border: none;
        opacity: 0.4;
        /* stylelint-disable-next-line */
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
`

export const ImageWrapper = styled.li`
    display: inline-flex;
    flex: 0 0 100%;
    box-sizing: border-box;
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

