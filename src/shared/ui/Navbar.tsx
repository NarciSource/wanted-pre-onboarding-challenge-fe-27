import React from "react";

import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { FcTodoList } from "react-icons/fc";
import { useColorModeValue } from "@/widgets/chakra-ui/color-mode";

import ServerHealthCheck from "./ServerHealthCheck";

export default function Navbar({ AuthPanel }: { AuthPanel: React.ReactNode }): React.ReactElement {
    return (
        <Box
            zIndex={10}
            position="fixed"
            top={0}
            left={0}
            width="100%"
            py={{ base: 2 }}
            px={{ base: 4 }}
            bg={useColorModeValue("white", "gray.800")}
            borderBottomWidth={1}
            borderColor="gray.300"
            boxShadow="sd"
        >
            <Flex maxW="960px" h="60px" align="center" m="auto">
                <Stack justify="flex-start">
                    <ServerHealthCheck />
                </Stack>

                <Flex justify="center" flex={{ base: 1, md: "auto" }}>
                    <Link
                        href="./"
                        fontFamily="heading"
                        fontSize="5xl"
                        color={useColorModeValue("gray.800", "white")}
                    >
                        <FcTodoList />
                        <Text _hover={{ color: "#535bf2" }}>todos</Text>
                    </Link>
                </Flex>

                {AuthPanel}
            </Flex>
        </Box>
    );
}
