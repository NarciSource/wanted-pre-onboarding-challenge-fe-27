import React from "react";

import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

import Popover from "./Popover";
import LoginFormLayout from "@/components/auth/LoginFormLayout";
import SignUpFormLayout from "@/components/auth/SignUpFormLayout";
import { FcTodoList } from "react-icons/fc";

export default function Navbar(): React.ReactElement {
    return (
        <Box
            zIndex={10}
            position="fixed"
            left={0}
            width="100%"
            py={{ base: 2 }}
            px={{ base: 4 }}
            bg={useColorModeValue("white", "white")}
            borderBottomWidth={1}
            borderColor="gray.300"
            boxShadow="sd"
        >
            <Flex maxW="960px" minH="60px" align="center" m="auto">
                <Flex justify="center" flex={{ base: 1, md: "auto" }}>
                    <Link
                        href="/"
                        fontFamily="heading"
                        fontSize="5xl"
                        color={useColorModeValue("gray.800", "white")}
                    >
                        <FcTodoList />
                        <Text>todos</Text>
                    </Link>
                </Flex>

                <Stack justify="flex-end" direction="row">
                    <Popover name="로그인" Component={<LoginFormLayout />} />
                    <Popover name="회원가입" Component={<SignUpFormLayout />} />
                </Stack>
            </Flex>
        </Box>
    );
}
