import styled from 'styled-components';
import COLOR from '../../../../../../styles/colors';

export const MenuItem = styled.li`
  border: 1px solid ${COLOR.GREY_600};
  padding: 15px;
  border-radius: 15px;
  transition: 0.3s transform ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }
`;
