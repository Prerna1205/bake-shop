import React, { Component } from "react";
import "./index.css";
class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  static getDerivedStateFromError() {
    return {
      error: true,
    };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="fallback_error">
          <div>
            <img
              src="https://media.istockphoto.com/id/1280157375/vector/tiny-people-examining-operating-system-error-warning.jpg?s=612x612&w=0&k=20&c=mU4y63zVwMykkj6qmtnBjqABKihsK0nOsaeN_W81mFA="
              alt="falback_image"
            />
            <p className="err_msg">
              {" "}
              Oops! There was an error processing your request!
            </p>
            <div>
            <button
              onClick={() => {
                this.setState({
                  error: false,
                });
                // this.props.onClose();
              }}
            >
            Try Again!
            </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
