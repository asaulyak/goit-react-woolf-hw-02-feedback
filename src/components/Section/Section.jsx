import css from '../FeedbackOptions/FeedbackOptions.module.css';
import { Component } from 'react';

export class Section extends Component {
  render() {
    return (
      <section className={css.feedback}>
        {this.props.title && <h2 className={css.title}>{this.props.title}</h2>}
        {this.props.children}
      </section>
    );
  }
}
