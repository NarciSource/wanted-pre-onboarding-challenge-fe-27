import React from "react";

import { Box, Flex, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@/shared/chakra-ui/color-mode";
import { Toaster } from "@/shared/chakra-ui/toaster";

import useLoggedIn from "@/shared/lib/useLoggedIn";
import Navbar from "./Navbar";

interface CommonLayoutProps {
    children: (message: boolean) => React.ReactNode;
    AuthPanel?: React.ReactNode;
}

export default function CommonLayout({
    children,
    AuthPanel,
}: CommonLayoutProps): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <div>
            <Flex justify="center">
                <Navbar AuthPanel={AuthPanel} />
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
