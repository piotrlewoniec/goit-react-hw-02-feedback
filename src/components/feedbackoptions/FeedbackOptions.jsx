import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const Button = ({ label, action }) => (
  <button className={css.btn} type="button" onClick={action}>
    {label}
  </button>
);

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.btn_holder}>
    {options.map((element, index) => (
      <Button
        key={'i' + index}
        label={element}
        action={onLeaveFeedback[index]}
      />
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  neutral: PropTypes.array,
};

Button.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func,
};
