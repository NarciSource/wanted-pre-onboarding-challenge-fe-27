import React from "react";

import { Box, Flex, Image } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";
import { useColorModeValue } from "@/components/ui/color-mode";

import Navbar from "./Navbar";
import useLoggedIn from "@/app/hooks/useLoggedIn";

interface CommonLayoutProps {
    children: (message: boolean) => React.ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <div>
            <Flex justify="center">
                <Navbar />
            </Flex>
            <Box
                px={{ base: 4 }}
                pt="24"
                paddingInline="15%"
                minH="100vh"
                bg={useColorModeValue("white", "gray.700")}
            >
                {children(isLoggedIn)}
                {!isLoggedIn && (
                    <Flex justify="center" align="center">
                        <Image src={`./images/logo.png`} alt="logo" align="center" w={700} />
                    </Flex>
                )}
            </Box>

            <Toaster />
        </div>
    );
}
