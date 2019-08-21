import styled from 'styled-components';
import bgImg from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #FC466B;  /* fallback for old browsers */
    background: -webkit-radial-gradient(circle farthest-corner at 10% 20%, #3F5EFB, #FC466B);  /* Chrome 10-25, Safari 5.1-6 */
    background: radial-gradient(circle farthest-corner at 10% 20%, #3F5EFB, #FC466B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */    
    overflow: hidden;
    display: flex;
    // justify-items: center;
`

export const StyledTetris = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 40px;
    margin: 0 auto;
    width: 50%;
    // height: 100%;
    // max-width: 900px;

    aside {
        width: 100%;
        height: 100%;
        // max-width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 20px;

        div {
            width: 100%;
        }
    }
`;