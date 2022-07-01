import { css } from 'styled-components';

export const initBoxModel = css`
  border: 0;
  margin: 0;
  padding: 0;
`;

export const notRenderButton = css`
  ${initBoxModel};
  outline: none;
  background: none;
  appearance: none;
`;
