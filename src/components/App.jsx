import React, { useState } from "react";
import Statistics from "components/Feedback/Statistics";
import FeedbackOptions from "components/Feedback/FeedbackOptions";
import Section from "components/Feedback/Section";
import Notification from "components/Feedback/Notification";
import css from 'components/Feedback/Feedback.module.css';


const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const onLeaveFeedback = feedbackType => { 
    switch (feedbackType) { 
      case 'good': {
        setGood(prevState => prevState + 1)
        return;
      }
      case 'neutral': {
        setNeutral(prevState => prevState + 1)
        return;
      }
      case 'bad': {
        setBad(prevState => prevState + 1)
        return;
      }
      default: return;
    }
  };

  const countTotalFeedback = () => { 
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => { 
    if (countTotalFeedback() === 0) {
      return 0;
    }

    const positiveFeedbackPercentage = (good / countTotalFeedback()) * 100;
    return Math.round(positiveFeedbackPercentage);
  };

    return (
      <div className={css.mainContainer}>
        <Section title="Please leave feedback">
        <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  };

export default App;