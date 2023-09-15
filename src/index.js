import { Router } from "./Router";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<Root />);

function Root() {
  return <Router />;
}
