import styled from 'styled-components';
import COLOR from '../../../../../styles/colors';

export const Menus = styled.article`
  border: 1px solid ${COLOR.GREY_400};
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h3`
  text-align: left;
`;

export const MenuWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
