import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good = 'no data',
  neutral = 'no data',
  bad = 'no data',
  total = 'no data',
  positivePercentage = 'no data',
}) => (
  <ul className={css.stat_holder}>
    <li>
      Good:<span className={css.stat_data}> {good}</span>
    </li>
    <li>
      Neutral:<span className={css.stat_data}> {neutral}</span>
    </li>
    <li>
      Bad:<span className={css.stat_data}> {bad}</span>
    </li>
    <li>
      Total:<span className={css.stat_data}> {total}</span>
    </li>
    <li>
      Positive feedback:
      <span className={css.stat_data}> {positivePercentage}%</span>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
