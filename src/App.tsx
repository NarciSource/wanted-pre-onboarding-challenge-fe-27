import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import { Router } from "@remix-run/router";

const queryClient = new QueryClient();

function App({ router }: { router: Router }) {
    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ChakraProvider>
    );
}

export default App;
