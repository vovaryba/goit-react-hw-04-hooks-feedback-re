import PropTypes from 'prop-types';
import Notification from 'components/Notification';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <>
        <p className={s.feedbackCounter}>Good: {good}</p>
        <p className={s.feedbackCounter}>Neutral: {neutral}</p>
        <p className={s.feedbackCounter}>Bad: {bad}</p>
        <p className={s.feedbackCounter}>Total: {total} </p>
        <p className={s.feedbackCounter}>
          Positive feedback: {positivePercentage ? positivePercentage : 0}%
        </p>
      </>
    ) : (
      <Notification message="There is no feedback" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
