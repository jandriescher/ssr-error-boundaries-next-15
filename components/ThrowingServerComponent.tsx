import { JSX } from "react";
import { somethingThatThrows } from "../app/shared/somethingThatThrows";

export default async function ThrowingServerComponent(): Promise<JSX.Element> {
  somethingThatThrows();
  return (
    <div className="bg-red-800 text-red-100 rounded-lg shadow p-4 border border-red-700 w-[500px]">
      I am a throwing server component. You will never see me.
    </div>
  );
}
