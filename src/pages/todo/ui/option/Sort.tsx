import React from "react";
import { IoOptions } from "react-icons/io5";
import { IoIosTime, IoMdFlag } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";

import { HStack, Text } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/widgets/chakra-ui/radio";

interface Parameters {
    sort: "createdAt" | "updatedAt" | "priority";
    handleOptionChange: (name: string, value: string | null) => void;
}

export default function TodoSortOption({
    sort,
    handleOptionChange,
}: Parameters): React.ReactElement {
    return (
        <HStack align="center">
            <IoOptions />
            <Text color="gray" whiteSpace="nowrap">
                정렬기준
            </Text>

            <RadioGroup
                value={sort}
                onValueChange={(e) => {
                    handleOptionChange("sort", e.value);
                }}
                size="sm"
            >
                <Radio title="작성 시간" value="createdAt" px={1}>
                    <IoIosTime />
                </Radio>
                <Radio title="수정 시간" value="updatedAt" px={1}>
                    <FiEdit3 />
                </Radio>
                <Radio title="우선 순위" value="priority" px={1}>
                    <IoMdFlag />
                </Radio>
            </RadioGroup>
        </HStack>
    );
}
