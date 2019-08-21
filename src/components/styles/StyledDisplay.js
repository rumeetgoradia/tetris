import styled from 'styled-components';

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: ${props => props.gameOver ? 'center' : 'flex-end'};
    margin: 0 0 20px 0;
    padding: 25px;
    border: 4px solid;
    border-color: ${props => props.gameOver ? 'red' : '#333'};
    // min-height: 26px;
    width: 100%;
    border-radius: 20px;
    color: ${props => props.gameOver ? 'red' : '#999'};
    background: rgba(27, 27, 27, 0.4);
    // font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: .9rem;
    text-align: right;
    font-weight: 100;

    @media only screen and (max-width: 426px) {
        padding: 18px;
        margin: 0 0 10px 0;
        font-size: .8rem;
    }
`;