import React from 'react';
import ThrowingServerComponent from '../../components/ThrowingServerComponent';
import HealthyServerComponent from '../../components/HealthyServerComponent';

export const dynamic = 'force-dynamic';

const Page = () => {
  return (
    <>
      <h2 className="text-xl font-bold">Page without Error Boundary</h2>
      <span>
        This page renders a healthy component and a throwing component without any error boundary. <br />
        This text will not be visible in the client due to the error bubbling up.
      </span>
      <HealthyServerComponent />
      <ThrowingServerComponent />
    </>
  );
};

export default Page;
