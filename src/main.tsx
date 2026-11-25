import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App.tsx';
import { AppErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

declare const __PWA_DEV_ENABLED__: boolean;

if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  const shouldRegisterSw =
    import.meta.env.PROD || (typeof __PWA_DEV_ENABLED__ !== 'undefined' && __PWA_DEV_ENABLED__);

  if (shouldRegisterSw) {
    registerSW({ immediate: true });
  } else {
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => Promise.all(registrations.map((r) => r.unregister())))
      .then(() => {
        if ('caches' in window) {
          return caches
            .keys()
            .then((keys) =>
              Promise.all(
                keys
                  .filter((k) => k.includes('workbox') || k.includes('vite-pwa'))
                  .map((k) => caches.delete(k))
              )
            );
        }
      })
      .catch(() => undefined);
  }
}

createRoot(document.getElementById('root')!).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);
