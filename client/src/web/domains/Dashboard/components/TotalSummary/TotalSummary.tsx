import * as Styled from './style';

const TotalSummary = () => {
  return (
    <Styled.TotalSummary>
      <Styled.PriceSection>
        <Styled.SubTitle>수입</Styled.SubTitle>
        <Styled.Price>+ 3,000,000</Styled.Price>
      </Styled.PriceSection>
      <Styled.PriceSection>
        <Styled.SubTitle>수입</Styled.SubTitle>
        <Styled.Price>- 1,500,000</Styled.Price>
      </Styled.PriceSection>
      <Styled.Divider />
      <Styled.PriceSection>
        <Styled.SubTitle>총합</Styled.SubTitle>
        <Styled.Price>+ 1,500,000</Styled.Price>
      </Styled.PriceSection>
    </Styled.TotalSummary>
  );
};

export default TotalSummary;
