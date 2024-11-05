import React from "react";

import { Box, Flex, Image } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";

import Navbar from "./Navbar";
import useLoggedIn from "@/hooks/useLoggedIn";

interface CommonLayoutProps {
    children: React.ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <div>
            <Flex justify="center">
                <Navbar />
            </Flex>
            {isLoggedIn ? (
                <Box px={{ base: 4 }} pt="24" paddingInline="15%" minH="100vh">
                    {children}
                </Box>
            ) : (
                <Flex justify="center" align="center">
                    <Image src={`./images/logo.png`} alt="logo" align="center" w={700} />
                </Flex>
            )}
            <Toaster />
        </div>
    );
}
