import { JSX } from "react";

export default async function HealthyServerComponent(): Promise<JSX.Element> {
  return (
    <div className="bg-green-500 text-green-900 rounded-lg p-4 border border-green-400 w-[500px]">
      I am a healthy server component. You will see me.
    </div>
  );
}
