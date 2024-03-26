import "./App.css";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./authStore/store";
import { Suspense } from "react";
import Loader from "./components/loader/Loader";



function App() {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <Suspense fallback={
            <Loader/>
          }>
            <RouterProvider router={router}></RouterProvider>
            <Toaster />
          </Suspense>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
