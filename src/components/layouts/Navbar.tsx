import React from "react";

import { Box, Button, Flex, Link, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

export default function Navbar(): React.ReactElement {
    return (
        <Box zIndex={10} position="fixed" left={0} width="100%" py={{ base: 2 }} px={{ base: 4 }}>
            <Flex maxW="960px" minH="60px" align="center" m="auto">
                <Flex justify="center" flex={{ base: 1, md: "auto" }}>
                    <Link
                        href="/"
                        fontFamily="heading"
                        fontSize="5xl"
                        color={useColorModeValue("gray.800", "white")}
                    >
                        todos
                    </Link>
                </Flex>

                <Stack justify="flex-end" direction="row">
                    <Button colorPalette="teal" variant="subtle">
                        로그인
                    </Button>
                    <Button colorPalette="teal" variant="subtle">
                        회원가입
                    </Button>
                </Stack>
            </Flex>
        </Box>
    );
}
