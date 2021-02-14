import styled from 'styled-components/native';
import { metrics } from '../../styles';

export const PresentationContent = styled.View`
  width: 100%;
  height: 80%;
  background-color: rgba(37, 36, 36, 1);
  padding-top: ${metrics.base * 10}px;
`;

export const AppName = styled.View`
  flex-direction: row;
  align-items: 'center';
  justify-content: 'flex-start';
  margin-left: ${metrics.base * 5}px;
`;

export const ImageContainer = styled.View`
  height: 70%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  height: 20%;
  align-items: center;
  justify-content: center;
  background-color: #232425;
`;
