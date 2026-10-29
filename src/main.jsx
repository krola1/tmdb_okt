import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { movieRouter } from "./router/index.jsx";

// create a QueryClient, this stores and manages all our fetched data (the cache)
const myQueryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* wrap App in the provider so every component can use useQuery */}
    <QueryClientProvider client={myQueryClient}>
      <RouterProvider router={movieRouter} />
    </QueryClientProvider>
  </StrictMode>,
);
