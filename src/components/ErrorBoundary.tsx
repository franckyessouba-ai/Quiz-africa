import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class AppErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      message: error?.message || 'Unexpected error',
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('QUIZ AFRICA ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0A100D] text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full rounded-3xl bg-[#111D16] border border-[#F5B700]/45 p-6 text-center space-y-4">
            <h1 className="font-display font-extrabold text-xl text-[#F5B700]">
              QUIZ AFRICA
            </h1>
            <p className="text-sm text-white/80">
              Une erreur temporaire est survenue. Appuie sur le bouton ci-dessous pour recharger.
            </p>
            <button
              type="button"
              onClick={() => {
                this.setState({ hasError: false, message: '' });
                window.location.reload();
              }}
              className="min-h-[44px] px-5 rounded-xl bg-[#009E49] text-white font-bold text-sm"
            >
              Recharger l’application
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
