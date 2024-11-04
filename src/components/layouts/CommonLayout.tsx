import React from "react";

import { Box, Flex } from "@chakra-ui/react";

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
            <Box px={{ base: 4 }} pt="24" paddingInline="15%" minH="100vh">
                {children}
            </Box>
        </div>
    );
}
