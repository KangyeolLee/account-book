import styled from 'styled-components';
import COLOR from '../../../../../styles/colors';

export const ProfileWrapper = styled.article`
  border: 1px solid ${COLOR.GREY_400};
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

export const Username = styled.span`
  display: inline-block;
  margin-top: 15px;
`;
