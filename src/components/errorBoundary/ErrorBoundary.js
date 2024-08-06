import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log(error, info);
  }

  render() {
    if (this.state.error) {
      return <h1>Something went wrong!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

// использование експортируем в модуль где вызывается проблемный модуль
// оборачиваем  вызов проблемного модуля
// <ErrorBoundary>
//    <Module />
// </ErrorBoundary>
