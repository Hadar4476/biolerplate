import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";

import store from "./store";

// import "@/assets/styles/global.scss";
import "./index.css";
import { Provider } from "react-redux";

import "./locales/i18n"; // Import the i18n instance

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
);
