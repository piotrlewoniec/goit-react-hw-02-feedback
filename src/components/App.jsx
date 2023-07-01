import React, { Component } from 'react';
import { Section } from 'components/section/Section';
import { FeedbackOptions } from 'components/feedbackoptions/FeedbackOptions';
import { Notification } from 'components/notification/Notification';
import { Statistics } from 'components/statistics/Statistics';
import css from './App.module.css';
const options = ['Good', 'Neutral', 'Bad'];

export class App extends Component {
  static propTypes = {};

  static defaultProps = {
    initialValue: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      good: this.props.initialValue,
      neutral: this.props.initialValue,
      bad: this.props.initialValue,
    };
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    } else {
      return Math.round((this.state.good / total) * 100);
    }
  }

  handlAddGood = evt => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handlAddNeutral = evt => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handlAddBad = evt => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <div
        className={css.app_holder}
        // style={{
        //   // height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   flexDirection: 'column',
        //   alignItems: 'flex-start',
        //   fontSize: 40,
        //   color: '#010101',
        // }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={[
              this.handlAddGood,
              this.handlAddNeutral,
              this.handlAddBad,
            ]}
          />
          <h1 className={css.app_stattitle}>Statistics</h1>
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

// 1 - Widget odpowiedzi
// Jak większość firm, kawiarnia Expresso zbiera feedback od swoich klientów. Twoim zadaniem jest stworzenie aplikacji dla zbierania statystyk. Są tylko trzy warianty odpowiedzi: dobry, neutralny, zły.

// Krok 1
// Aplikacja powinna wyświetlać ilość zebranych odpowiedzi dla każdej kategorii. Aplikacja nie powinna przechowywać statystyk odpowiedzi między różnymi sesjami (odświeżenie strony).

// Stan aplikacji obowiązkowo powinien wyglądać następująco, nie można dodawać nowych właściwości:

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }

// Interfejs może wyglądać tak:

// Krok 2
// Rozszerz funkcjonalność aplikacji tak, aby w interfejsie wyświetlało się więcej statystyk o zebranych odpowiedziach. Dodaj wyświetlanie ogólnej ilości zebranych odpowiedzi ze wszystkich kategorii i procent pozytywnych odpowiedzi. W tym celu utwórz metody pomocnicze countTotalFeedback() i countPositiveFeedbackPercentage() podliczające te wartości, bazując na danych w stanie (obliczane dane).

// Krok 3
// Wykonaj refaktor aplikacji. Stan aplikacji powinien zostawać w komponencie root <App>.

// Przenieś wyświetlanie statystyk do oddzielnego komponentu <Statistics good={} neutral={} bad={} total={} positivePercentage={}>.
// Przenieś blok przycisków do komponentu <FeedbackOptions options={} onLeaveFeedback={}>.
// Utwórz komponent <Section title="">, który renderuje sekcję z nagłówkiem i dziećmi (children). Zamień każdy z <Statistics> i <FeedbackOptions> w utworzony komponent sekcji.

// Krok 4
// Rozszerz funkcjonalność aplikacji tak, aby blok statystyk renderował się dopiero po otrzymaniu przynajmniej jednej odpowiedzi. Wiadomość o braku statystyk przenieś do komponentu <Notification message="There is no feedback">.
