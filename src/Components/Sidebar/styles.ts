import styled from 'styled-components';

import { IoIosRadioButtonOff } from 'react-icons/io';
import { IoIosRadioButtonOn } from 'react-icons/io';

export const Container = styled.div<{toggle: boolean}>`
    transition: all 1s ease;
    width: ${props => props.toggle ? '18%' : '5%'};
    height: 100vh;
    padding: 10px;
    background: ${props => props.theme.colors.secondary};

    display: flex;
    justify-content: flex-end;

    button {
        height: 15px;
        background: transparent;
        border: none;
    }
  
`;

export const BtnOff = styled(IoIosRadioButtonOff)`
    font-size: 1.5rem;

    color: ${props => props.theme.colors.bar};
    cursor: pointer;
`;
export const BtnOn = styled(IoIosRadioButtonOn)`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.bar};
    cursor: pointer;
`;