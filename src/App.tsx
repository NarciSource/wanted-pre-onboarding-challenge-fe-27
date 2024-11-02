import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider as ChakraProvider } from "@/components/ui/provider";

function App() {
    return (
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
}

export default App;
