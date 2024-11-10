import React, { useState } from "react";
import { IoOptions } from "react-icons/io5";
import { FaBell, FaFire } from "react-icons/fa6";
import { RiZzzFill } from "react-icons/ri";

import { HStack, Text } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/widgets/chakra-ui/radio";
import { Switch } from "@/widgets/chakra-ui/switch";

interface Parameters {
    priorityFilter: "urgent" | "normal" | "low" | undefined;
    handleOptionChange: (name: string, value: string | null) => void;
}

export default function TodoFilterOption({
    priorityFilter,
    handleOptionChange,
}: Parameters): React.ReactElement {
    const [filterChecked, setFilterChecked] = useState(false);

    return (
        <HStack align="center">
            <IoOptions />
            <Text whiteSpace="nowrap">필터링</Text>

            <Switch
                checked={filterChecked}
                onCheckedChange={(e) => {
                    setFilterChecked(!!e.checked);
                    handleOptionChange("priorityFilter", null);
                }}
            />

            <RadioGroup
                value={priorityFilter}
                onValueChange={(e) => handleOptionChange("priorityFilter", e.value)}
                disabled={!filterChecked}
                size="sm"
                _disabled={{ opacity: "0.5" }}
            >
                <Radio title="시급" value="urgent" px={1} _checked={{ color: "red" }}>
                    <FaFire />
                </Radio>
                <Radio title="보통" value="normal" px={1} _checked={{ color: "green" }}>
                    <FaBell />
                </Radio>
                <Radio title="낮음" value="low" px={1} _checked={{ color: "orange" }}>
                    <RiZzzFill />
                </Radio>
            </RadioGroup>
        </HStack>
    );
}
