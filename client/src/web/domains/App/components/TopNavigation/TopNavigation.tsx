import CustomLink from '../../../../../common/components/CustomLink';
import * as Styled from './style';

const TopNavigation = () => {
  return (
    <Styled.TopNavigation>
      <Styled.LeftTitleArea>
        <CustomLink to='/dashboard'>ACCOUNT-BOOK</CustomLink>
      </Styled.LeftTitleArea>
      <Styled.RightTitleArea>로그인</Styled.RightTitleArea>
    </Styled.TopNavigation>
  );
};

export default TopNavigation;
