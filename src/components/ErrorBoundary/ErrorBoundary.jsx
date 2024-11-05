import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Оновлюємо стан, щоб відобразити UI, що сталася помилка
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Логуємо помилку в зовнішній сервіс (якщо потрібно)
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Ви можете замінити цей UI на свій кастомний фолбек
      return <h1>Щось пішло не так. Спробуйте ще раз пізніше.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
