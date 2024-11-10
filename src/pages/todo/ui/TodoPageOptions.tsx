import { HStack, Text } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/widgets/chakra-ui/radio";
import { Checkbox } from "@/widgets/chakra-ui/checkbox";
import { useState } from "react";

type Options = {
    sort: "createdAt" | "updatedAt" | "priority";
    order: "asc" | "desc";
    priorityFilter?: "urgent" | "normal" | "low";
};

export default function TodoPageOptions({
    options,
    setOptions,
}: {
    options: Options;
    setOptions: React.Dispatch<React.SetStateAction<Options>>;
}) {
    const handleOptionChange = (name: string, value: string | null) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            [name]: value,
        }));
    };

    const [filterChecked, setFilterChecked] = useState(false);

    return (
        <HStack>
            <HStack>
                <Text>정렬기준</Text>
                <RadioGroup
                    value={options.sort}
                    onValueChange={(e) => {
                        handleOptionChange("sort", e.value);
                    }}
                >
                    <Radio value="createdAt">작성 시간</Radio>
                    <Radio value="updatedAt">수정 시간</Radio>
                    <Radio value="priority">우선순위</Radio>
                </RadioGroup>
            </HStack>

            <HStack>
                <Text>정렬</Text>
                <RadioGroup
                    value={options.order}
                    onValueChange={(e) => {
                        handleOptionChange("order", e.value);
                    }}
                >
                    <Radio value="asc">오름차순</Radio>
                    <Radio value="desc">내림차순</Radio>
                </RadioGroup>
            </HStack>

            <HStack>
                <Text>필터링</Text>
                <Checkbox
                    checked={filterChecked}
                    onCheckedChange={(e) => {
                        setFilterChecked(!!e.checked);
                        handleOptionChange("priorityFilter", null);
                    }}
                />

                <RadioGroup
                    value={options.priorityFilter}
                    onValueChange={(e) => handleOptionChange("priorityFilter", e.value)}
                    disabled={!filterChecked}
                >
                    <HStack>
                        <Radio value="urgent">시급</Radio>
                        <Radio value="normal">보통</Radio>
                        <Radio value="low">낮음</Radio>
                    </HStack>
                </RadioGroup>
            </HStack>
        </HStack>
    );
}
