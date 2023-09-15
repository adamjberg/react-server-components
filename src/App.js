import { Suspense } from "react";
import { Counter } from "./Counter";
import { ServerComponent } from "./ServerComponent";

export default async function App() {
  return <div className="main">
    <Suspense fallback={<div>loading...</div>}>
      <ServerComponent />
    </Suspense>
    <Counter />
  </div>;
}
