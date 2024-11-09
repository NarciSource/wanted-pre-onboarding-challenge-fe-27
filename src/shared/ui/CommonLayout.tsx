import React from "react";

import { Box, Flex, Image } from "@chakra-ui/react";
import { useColorModeValue } from "../../widgets/chakra-ui/color-mode";
import { Toaster } from "../../widgets/chakra-ui/toaster";

import useLoggedIn from "@/shared/hooks/useLoggedIn";
import Navbar from "./Navbar";

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