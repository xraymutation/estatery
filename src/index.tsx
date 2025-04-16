import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TabsProvider } from "./contexts/tabs";
import { MenuProvider } from "./contexts/menu";
import reportWebVitals from "./reportWebVitals";
import { TestimonialsProvider } from "./contexts/testimonials";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TestimonialsProvider>
      <MenuProvider>
        <TabsProvider initialTab="apartment">
          <App />
        </TabsProvider>
      </MenuProvider>
    </TestimonialsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
