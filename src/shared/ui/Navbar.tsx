import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { FcTodoList } from "react-icons/fc";
import { useColorModeValue, ColorModeButton } from "../../widgets/chakra-ui/color-mode";

import Popover from "./Popover";
import LoginFormLayout from "@/pages/authPage/ui/LoginFormLayout";
import SignUpFormLayout from "@/pages/authPage/ui/SignUpFormLayout";
import useLoggedIn from "../hooks/useLoggedIn";
import ServerHealthCheck from "./ServerHealthCheck";

export default function Navbar(): React.ReactElement {
    const { isLoggedIn, logout } = useLoggedIn();
    const navigate = useNavigate();
    const bgColor = useColorModeValue("gray.100", "gray.600");

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
                        <Text>todos</Text>
                    </Link>
                </Flex>

                <Stack justify="flex-end" direction="row">
                    {isLoggedIn ? (
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                                logout();
                                navigate("/");
                            }}
                            bg={bgColor}
                        >
                            로그아웃
                        </Button>
                    ) : (
                        <Popover name="로그인" Component={<LoginFormLayout />} />
                    )}
                    <Popover name="회원가입" Component={<SignUpFormLayout />} />
                    <ColorModeButton bg={bgColor} />
                </Stack>
            </Flex>
        </Box>
    );
}
