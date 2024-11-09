import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "@remix-run/router";

import { Provider as ChakraProvider } from "@/widgets/chakra-ui/provider";
import { ColorModeProvider } from "@/widgets/chakra-ui/color-mode";
import { HealthyCheckProvider } from "@/shared/HealthyCheckContext";

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
