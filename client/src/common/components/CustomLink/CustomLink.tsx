import { PropsWithChildren } from 'react';
import * as Styled from './style';

type Props = {
  to: string;
} & PropsWithChildren;

const CustomLink = (props: Props) => {
  return <Styled.CustomLink to={props.to}>{props.children}</Styled.CustomLink>;
};

export default CustomLink;
