import React from "react";
import { IoOptions } from "react-icons/io5";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";

import { HStack, Text } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/widgets/chakra-ui/radio";

interface Parameters {
    order: "asc" | "desc";
    handleOptionChange: (name: string, value: string | null) => void;
}

export default function TodoOrderOption({
    order,
    handleOptionChange,
}: Parameters): React.ReactElement {
    return (
        <HStack align="center">
            <IoOptions />
            <Text color="gray" whiteSpace="nowrap">
                정렬
            </Text>

            <RadioGroup
                value={order}
                onValueChange={(e) => {
                    handleOptionChange("order", e.value);
                }}
                size="sm"
            >
                <Radio title="오름차순" value="asc" px={1}>
                    <AiOutlineSortAscending />
                </Radio>
                <Radio title="내림차순" value="desc" px={1}>
                    <AiOutlineSortDescending />
                </Radio>
            </RadioGroup>
        </HStack>
    );
}
