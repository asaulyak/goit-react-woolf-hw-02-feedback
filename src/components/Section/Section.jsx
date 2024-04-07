import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const Section = () => (
  <section className={css.feedback}>
    {this.props.title && <h2 className={css.title}>{this.props.title}</h2>}
    {this.props.children}
  </section>
);
