import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class AppErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught app error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = 'Une erreur est survenue dans l’application.';
      try {
        if (this.state.error?.message) {
          const parsed = JSON.parse(this.state.error.message);
          if (parsed && parsed.error) {
            errorMessage = `Erreur Firestore (${parsed.operationType || 'action'} sur ${parsed.path || 'données'}) : ${parsed.error}`;
          }
        }
      } catch {
        errorMessage = this.state.error?.message || errorMessage;
      }

      return (
        <div className="min-h-screen africa-arena-bg text-white flex items-center justify-center p-4">
          <div className="max-w-md w-full rounded-3xl bg-[var(--qa-card)] border border-red-500/50 p-6 text-center space-y-4 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/50 flex items-center justify-center mx-auto text-2xl">
              ⚠️
            </div>
            <h1 className="font-display font-extrabold text-xl text-white">
              Oups ! Une petite interruption
            </h1>
            <p className="text-sm text-gray-300 font-medium break-words">
              {errorMessage}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="w-full min-h-[48px] px-6 rounded-2xl bg-[#009E49] hover:brightness-110 text-white font-display font-extrabold text-base shadow-lg transition-all"
            >
              Recharger l'application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
