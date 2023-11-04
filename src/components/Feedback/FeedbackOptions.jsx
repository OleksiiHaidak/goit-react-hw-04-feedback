import css from 'components/Feedback/Feedback.module.css';
import React from "react";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  const handleFeedbackClick = (option) => () => {onLeaveFeedback(option)};

  return (
    <div className={css.btnContainer}>
      {options.map(option => (
        <button key={option} className={css.btn} onClick={handleFeedbackClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
