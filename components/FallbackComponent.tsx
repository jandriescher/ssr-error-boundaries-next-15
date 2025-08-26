import { JSX } from "react";

export default async function FallbackComponent(): Promise<JSX.Element> {
  return (
    <div className="bg-neutral-400 text-neutral-900 rounded-lg p-4 border border-neutral-300 w-[500px]">
      I am a fallback component. You see me because an error was caught successfully.
    </div>
  );
}
