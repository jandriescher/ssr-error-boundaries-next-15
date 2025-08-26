'use client'

import * as React from 'react';

interface ErrorBoundaryProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log("🚀 ~ ErrorBoundary ~ componentDidCatch ~ info:", info)
    console.log("🚀 ~ ErrorBoundary ~ componentDidCatch ~ error:", error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || 'Something went wrong. The error boundary is falling back to this text since no fallback component was passed.';
    }

    return this.props.children;
  }
}

export default ErrorBoundary;