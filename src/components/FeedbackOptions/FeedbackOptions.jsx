import css from './FeedbackOptions.module.css';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  onButtonClick = key => {
    this.props.onLeaveFeedback(key);
  };

  render() {
    return (
      <div className={css.buttons}>
        {this.props.options.map(key => (
          <button
            type="button"
            className={css.button}
            key={key}
            onClick={() => this.onButtonClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
    );
  }
}
