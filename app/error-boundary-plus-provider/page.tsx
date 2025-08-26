import React from 'react';
import ThrowingServerComponent from '../../components/ThrowingServerComponent';
import ErrorBoundary from '../../components/ErrorBoundary';
import { RandomContextProvider } from '../context/randomContext';
import HealthyServerComponent from '../../components/HealthyServerComponent';

export const dynamic = 'force-dynamic';

const Page = () => {
  return (
    <>
      <h2 className="text-xl font-bold">Error Boundary With Provider Page</h2>
      <span>
        This page renders a healthy component and a throwing component wrapped in an error boundary with a default fallback and a basic context provider.
      </span>
      <HealthyServerComponent />
      <ErrorBoundary>
        <RandomContextProvider value={undefined}>
          <ThrowingServerComponent />
        </RandomContextProvider>
      </ErrorBoundary>
    </>
  );
};

export default Page;
