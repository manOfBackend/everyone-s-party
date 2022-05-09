import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slide = keyframes`
    0% {
        transform: translateX(-150px);
    }
    100% {
        transform: translateX(-2726px);
    }

`;

export const SlideContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
`;

export const SlideAnimationBox = styled.div`
    display: flex;
    animation: ${slide} 50s ease infinite;
    user-select: none;

    @keyframes jftDMH {
        0% {
            transform: translateX(-150px);
        }
        100% {
            transform: translateX(-2726px);
        }
    }

`;
