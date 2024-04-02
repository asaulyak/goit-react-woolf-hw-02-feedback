import { Component } from 'react';
import css from './Statistics.module.css';

export class Statistics extends Component {
  state = {
    total: 0,
    positive: 0,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.total === this.calculateTotal()) {
      return;
    }

    this.setState(() => ({
      total: this.calculateTotal(),
      positive: this.calculatePositive(),
    }));
  }

  calculateTotal() {
    return Object.values(this.props.stats).reduce(
      (acc, current) => acc + current,
      0
    );
  }

  calculatePositive() {
    const total = this.calculateTotal();
    const positive = Object.keys(this.props.stats)
      .filter(key => this.props.positiveOptions.includes(key))
      .reduce((acc, key) => acc + this.props.stats[key], 0);

    return Math.floor((positive / total) * 100);
  }

  render() {
    const options = Object.keys(this.props.stats);
    return (
      <>
        {this.state.total ? (
          <div className={css.statistics}>
            {options.map(key => (
              <div key={key}>
                {key}: {this.props.stats[key]}
              </div>
            ))}
            <div>Total: {this.state.total}</div>
            <div>Positive feedback: {this.state.positive}%</div>
          </div>
        ) : (
          <div>No feedback given</div>
        )}
      </>
    );
  }
}
