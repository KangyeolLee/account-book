import CustomLink from '../../../../../../common/components/CustomLink';
import * as Styled from './style';

type Props = {
  title: string;
  path: string;
};

const MenuItem = (props: Props) => {
  return (
    <CustomLink to={props.path}>
      <Styled.MenuItem>{props.title}</Styled.MenuItem>
    </CustomLink>
  );
};

export default MenuItem;
