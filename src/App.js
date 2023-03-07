import './App.css';
import { router } from './routes/router';
import { RouterProvider} from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
