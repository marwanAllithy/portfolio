import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";

function AppWithCallbackAfterRender() {
  return (
    <MantineProvider>
      <App />
    </MantineProvider>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);

reportWebVitals();
