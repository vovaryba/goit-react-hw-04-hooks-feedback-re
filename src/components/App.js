// import { Component } from 'react';
import { useState } from 'react';
import Container from 'components/Container';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

const REVIEWS = ['good', 'neutral', 'bad'];

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrementReview = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const persentagePositiveFeedback = Math.round((good / total) * 100);

  return (
    <>
      <Container title="Please leave feedback">
        <FeedbackOptions
          options={REVIEWS}
          onLeaveFeedback={handleIncrementReview}
        />
      </Container>

      <Container title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={persentagePositiveFeedback}
        />
      </Container>
    </>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrementReview = ({ target }) => {
//     const feedback = target.name;
//     this.setState(prevState => ({
//       [feedback]: prevState[feedback] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     const persentagePositiveFeedback = Math.round((good / total) * 100);
//     return (
//       <>
//         <Container title="Please leave feedback">
//           <FeedbackOptions
//             options={REVIEWS}
//             onLeaveFeedback={this.handleIncrementReview}
//           />
//         </Container>

//         <Container title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={persentagePositiveFeedback}
//           />
//         </Container>
//       </>
//     );
//   }
// }

export default App;
