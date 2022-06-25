import RoutePath from '../../../../../routes/routePath';
import MenuItem from './MenuItem';
import * as Styled from './style';

const Menus = () => {
  return (
    <Styled.Menus>
      <Styled.Title>메뉴 목록</Styled.Title>
      <Styled.MenuWrapper>
        <MenuItem title='수입' path={RoutePath.INCOME} />
        <MenuItem title='소비' path={RoutePath.OUTCOME} />
      </Styled.MenuWrapper>
    </Styled.Menus>
  );
};

export default Menus;
