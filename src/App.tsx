import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { Router } from "@remix-run/router";
import { HealthyCheckProvider } from "@/app/contexts/HealthyCheckContext";

const queryClient = new QueryClient();

function App({ router }: { router: Router }) {
    return (
        <ChakraProvider>
            <ColorModeProvider>
                <QueryClientProvider client={queryClient}>
                    <HealthyCheckProvider>
                        <RouterProvider router={router} />
                    </HealthyCheckProvider>
                </QueryClientProvider>
            </ColorModeProvider>
        </ChakraProvider>
    );
}

export default App;
