import { Suspense } from "react";
import { Counter } from "./Counter";
import { ServerComponent } from "./ServerComponent";
import { ServerComponentSkeleton } from "./ServerComponentSkeleton";

export default async function App() {
  return <div className="main">
    <Suspense fallback={<ServerComponentSkeleton/>}>
      <ServerComponent />
    </Suspense>
    <Counter />
  </div>;
}
