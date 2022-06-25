import * as Styled from './style';

const Profile = () => {
  return (
    <Styled.ProfileWrapper>
      <Styled.UserProfileImage src='https://avatars.githubusercontent.com/u/48883344?v=4' />
      <Styled.Username>KG</Styled.Username>
    </Styled.ProfileWrapper>
  );
};

export default Profile;
