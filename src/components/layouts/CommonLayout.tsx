import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

interface CommonLayoutProps {
    children: React.ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps): React.ReactElement {
    return (
        <div>
            <Flex justify="center">
                <Navbar />
            </Flex>
            <Box px={{ base: 4 }} pt="24" mx="auto" maxW="960px" minH="100vh" w="100%">
                {children}
            </Box>
        </div>
    );
}
