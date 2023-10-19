import Statistics from "./Statistics/Statistics.js";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.js";

import React, { useState } from "react";
import { AppContainer, AppWrapper } from "../Layout.js";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onClickButtons(e) {
    if (e === "Good") {
      setGood((e) => e + 1);
    }
    if (e === "Neutral") {
      setNeutral((e) => e + 1);
    }
    if (e === "Bad") {
      setBad((e) => e + 1);
    }
  }

  const total = good + bad + neutral;
  const percent = Math.floor((good / total) * 100);

  return (
    <AppContainer>
      <AppWrapper>
        <FeedbackOptions onClickButtons={onClickButtons} />
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          percent={percent}
        />
      </AppWrapper>
    </AppContainer>
  );
}
