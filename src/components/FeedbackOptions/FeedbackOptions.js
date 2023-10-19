import {
  FeedbackOptionsButtonWrapper,
  FeedbackButtonsGood,
  FeedbackButtonsNeutral,
  FeedbackButtonsBad,
} from "./FeedbackOptions.styled";

function FeedbackOptions({ onClickButtons }) {
  return (
    <FeedbackOptionsButtonWrapper>
      <FeedbackButtonsGood
        className="btn btn-good"
        type="button"
        onClick={(e) => onClickButtons(e.target.textContent)}
      >
        Good
      </FeedbackButtonsGood>
      <FeedbackButtonsNeutral
        className="btn btn-neutral"
        type="button"
        onClick={(e) => onClickButtons(e.target.textContent)}
      >
        Neutral
      </FeedbackButtonsNeutral>
      <FeedbackButtonsBad
        className="btn btn-bad"
        type="button"
        onClick={(e) => onClickButtons(e.target.textContent)}
      >
        Bad
      </FeedbackButtonsBad>
    </FeedbackOptionsButtonWrapper>
  );
}

export default FeedbackOptions;
