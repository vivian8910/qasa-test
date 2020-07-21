import styled from "styled-components";

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

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    max-width: 400px;
    margin: 0 auto;
`;