import styled from '@emotion/styled';
import {
  centerContent,
  standardBorder,
  standardBorderRadius,
} from '../../util/utilities';

const lateralButton = styled.div`
  ${standardBorder};
  ${standardBorderRadius};
  width: 3rem;
  height: fit-content;
  padding: 0.8rem 0.2rem;
  position: absolute;
  z-index: 9999;
  right: ${(props) => (props.right ? 'max(25vh, 6rem)' : '')};
  left: ${(props) => (props.right ? '' : 'max(25vh, 6rem)')};
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.neutral};
  writing-mode: vertical-rl;
  text-orientation: upright;
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.accentSecond};
    box-shadow: ${(props) => `5px 5px 0 ${props.theme.colors.black}`};
  }
`;

export const Edit = styled(lateralButton)`
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.neutral};
`;
