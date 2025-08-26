import React from 'react';
import ThrowingServerComponent from '../../components/ThrowingServerComponent';
import ErrorBoundary from '../../components/ErrorBoundary';
import HealthyServerComponent from '../../components/HealthyServerComponent';
import FallbackComponent from '../../components/FallbackComponent';

export const dynamic = 'force-dynamic';

const Page = () => {
  return (
    <>
      <h2 className="text-xl font-bold">Error Boundary With Div Page</h2>
      <HealthyServerComponent />
      <span>
        This page renders a healthy component and a throwing component wrapped in an error boundary with a fallback component and a plain div.
      </span>
      <ErrorBoundary fallback={<FallbackComponent />}>
        <div>
          <ThrowingServerComponent />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Page;
