import styled from 'styled-components';
import Combobox from 'react-widgets/lib/Combobox';
import { media } from '../../constants/mediaSizes';

export const Dropdown = styled(Combobox) `
  height: fit-content;
  width: 100%;
  margin-bottom: 4%;

  .rw-widget-container {
    border-radius: 0px;
    border-color: transparent;
    background: rgba(255, 255, 255, 0.5);

    input {
      box-shadow: none;
      height: 45px;
      background: transparent; 
    }

    .rw-select-bordered {
      border-color: transparent;
    }
  }

  .rw-popup {
    li {
      height: 45px;
      display: flex;
      align-items: center;
    }
  }

  ${media.tablet`
    width: auto;
    margin-bottom: 0;
  `};
`;
