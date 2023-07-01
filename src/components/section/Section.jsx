import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <section className={css.section_holder}>
    <p className={css.section_title}>{title}</p>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
};
