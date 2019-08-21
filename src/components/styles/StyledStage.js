import styled from 'styled-components';

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
    ${props => props.height},
    calc(46.875vw / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 46.875vw;
    background: rgba(27, 27, 27, 0.4);

    @media only screen and (min-width: 768px) {
        grid-template-rows: repeat(
        ${props => props.height},
        calc(38.5vw / ${props => props.width})
        );
        max-width: 38.5vw;
    }

    @media only screen and (min-width: 1024px) {
        grid-template-rows: repeat(
        ${props => props.height},
        calc(30.75vw / ${props => props.width})
        );
        max-width: 30.75vw;
    }

    @media only screen and (min-width: 1440px) {
        grid-template-rows: repeat(
        ${props => props.height},
        calc(26vw / ${props => props.width})
        );
        max-width: 26vw;
    }
`;