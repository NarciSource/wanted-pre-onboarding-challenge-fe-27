import { HStack, Text } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/widgets/chakra-ui/radio";

type Options = {
    sort: "createdAt" | "updatedAt" | "priority";
    order: "asc" | "desc";
};

export default function TodoPageOptions({
    options,
    setOptions,
}: {
    options: Options;
    setOptions: React.Dispatch<React.SetStateAction<Options>>;
}) {
    const handleOptionChange = (name: string, value: string) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            [name]: value,
        }));
    };

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
        </HStack>
    );
}
