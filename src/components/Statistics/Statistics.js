import {
  StatisticsWrapper,
  StatisticsButtonsWrapper,
  StatisticsTotalFeedbacksWrapper,
} from "./Statistics.styled";

function Statistics({ good, bad, neutral, total, percent }) {
  return (
    <StatisticsWrapper>
      {total === 0 ? (
        ""
      ) : (
        <>
          <StatisticsButtonsWrapper>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
          </StatisticsButtonsWrapper>
          <StatisticsTotalFeedbacksWrapper>
            <span>Total: {total}</span>
            <span>
              {total === 0 ? (
                <span>Positive feedback: </span>
              ) : (
                <span>Positive feedback: {percent}%</span>
              )}
            </span>
          </StatisticsTotalFeedbacksWrapper>
        </>
      )}
    </StatisticsWrapper>
  );
}

export default Statistics;
