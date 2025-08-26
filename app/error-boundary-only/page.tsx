import ErrorBoundary from '../../components/ErrorBoundary';
import HealthyServerComponent from '../../components/HealthyServerComponent';
import ThrowingServerComponent from '../../components/ThrowingServerComponent';

export const dynamic = 'force-dynamic';

const Page = () => {
  return (
    <>
      <h2 className="text-xl font-bold">Error Boundary Only Page</h2>
      <span>
        This page renders a healthy component and a throwing component wrapped in an error boundary with a with a default fallback. <br />
        The error is being caught in Next 15 while in Next 14 the error was not.
      </span>
      <HealthyServerComponent />
      <ErrorBoundary>
        <ThrowingServerComponent />
      </ErrorBoundary>
    </>
  );
};

export default Page;
  