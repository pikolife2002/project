import {RouterProvider} from "react-router-dom";
import {
    createBrowserRouter,
} from "react-router-dom";
import {Box} from "@mui/material";
import {Header} from "./components/Header";
import {HomePage} from "./pages/HomePage";
import {AnimalPage} from "./pages/AnimalPage";

function App() {
    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <HomePage />,
    //     },
    //     {path: "/animal/:animalId", element: <AnimalPage />},
    //     {path: '*', element: <HomePage />},
    //
    // ]);

  return (
      <Box>
          <Box sx={{ mb: 2 }}>
            <Header />
          </Box>

          <AnimalPage />

          {/*<RouterProvider router={router} />*/}
       </Box>
  );
}


export default App;
