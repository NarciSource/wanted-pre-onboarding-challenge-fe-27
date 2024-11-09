import React, { useContext } from "react";
import { FaCircleCheck } from "react-icons/fa6";

import { Input, Stack } from "@chakra-ui/react";

import HealthyCheckContext from "../HealthyCheckContext";

export default function ServerHealthCheck(): React.ReactElement {
    const { serverHost, setServerHost, isServerOnline } = useContext(HealthyCheckContext);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setServerHost(event.target.value);
    };

    return (
        <Stack direction="row" align="center">
            <Input value={serverHost} onChange={handleChange} placeholder="서버 주소 입력" />
            <FaCircleCheck size="36" color={isServerOnline ? "green" : "red"} />
        </Stack>
    );
}
