import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ChakraProvider>
    );
}

export default App;
