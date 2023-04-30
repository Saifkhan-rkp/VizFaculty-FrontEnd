import "./App.css";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./authStore/store";
import { Suspense } from "react";



function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={client}>
        <Suspense fallback={<div className="w-full h-full border-4 border-dashed rounded-full border-sky-700 animate-spin"/>}>
          <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
            <Toaster />
          </Provider>
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
