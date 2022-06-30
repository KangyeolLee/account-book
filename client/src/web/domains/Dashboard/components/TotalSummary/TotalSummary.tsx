import * as Styled from './style';

const TotalSummary = () => {
  return (
    <Styled.TotalSummary>
      <Styled.PriceSection>
        <Styled.SubTitle>수입</Styled.SubTitle>
        <Styled.PriceCounter
          end={3_000_000}
          seperator=','
          prefix='+'
          suffix='원'
        />
      </Styled.PriceSection>
      <Styled.PriceSection>
        <Styled.SubTitle>소비</Styled.SubTitle>
        <Styled.PriceCounter
          end={1_000_000}
          seperator=','
          prefix='+'
          suffix='원'
        />
      </Styled.PriceSection>
      <Styled.Divider />
      <Styled.PriceSection>
        <Styled.SubTitle>총합</Styled.SubTitle>
        <Styled.PriceCounter
          end={2_000_000}
          seperator=','
          prefix='+'
          suffix='원'
        />
      </Styled.PriceSection>
    </Styled.TotalSummary>
  );
};

export default TotalSummary;
