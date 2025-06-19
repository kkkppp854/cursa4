import React from "react";

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo); 
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-danger m-4">
          Помилка!
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
