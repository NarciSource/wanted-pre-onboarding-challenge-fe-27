import React, { useState } from "react";

import { Icon, Input, Stack } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

import useServerHealth from "@/hooks/useServerHealth";

export default function ServerHealthCheck(): React.ReactElement {
    const [serverHost, setServerHost] = useState(import.meta.env.VITE_API_HOST);
    const { isServerOnline } = useServerHealth(serverHost);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setServerHost(event.target.value);
    };

    return (
        <Stack direction="row" align="center">
            <Input value={serverHost} onChange={handleChange} placeholder="서버 주소 입력" />
            <Icon fontSize="3xl" color={isServerOnline ? "green" : "red"}>
                <FaCheckCircle />
            </Icon>
        </Stack>
    );
}
