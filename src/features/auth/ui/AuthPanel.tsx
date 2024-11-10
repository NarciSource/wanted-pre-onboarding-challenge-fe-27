import React from "react";
import { useNavigate } from "react-router-dom";

import { Stack, Button } from "@chakra-ui/react";
import { useColorModeValue, ColorModeButton } from "@/widgets/chakra-ui/color-mode";

import LoginFormLayout from "./LoginFormLayout";
import SignUpFormLayout from "./SignUpFormLayout";
import Popover from "@/shared/ui/Popover";
import useLoggedIn from "@/shared/lib/useLoggedIn";

export default function AuthPanel(): React.ReactElement {
    const { isLoggedIn, logout } = useLoggedIn();
    const navigate = useNavigate();
    const bgColor = useColorModeValue("gray.100", "gray.600");

    return (
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
    );
}
