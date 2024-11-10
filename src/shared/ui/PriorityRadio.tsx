import { Control, FieldValues, Path, useController } from "react-hook-form";

import { HStack } from "@chakra-ui/react";
import { RadioCardItem, RadioCardRoot } from "@/widgets/chakra-ui/radio-card";

export default function PriorityRadio<T extends FieldValues>({ control }: { control: Control<T> }) {
    // controlled 방식 특정 컴포넌트 제어
    const { field } = useController({
        control,
        name: "priority" as Path<T>,
    });

    return (
        <RadioCardRoot size="md" {...field}>
            <HStack>
                <RadioCardItem
                    colorPalette="red"
                    cursor="pointer"
                    border={0}
                    _checked={{ boxShadow: "none", bg: "transparent" }}
                    title="시급"
                    value="urgent"
                />
                <RadioCardItem
                    colorPalette="yellow"
                    cursor="pointer"
                    border={0}
                    _checked={{ boxShadow: "none", bg: "transparent" }}
                    title="보통"
                    value="normal"
                />
                <RadioCardItem
                    colorPalette="green"
                    cursor="pointer"
                    border={0}
                    _checked={{ boxShadow: "none", bg: "transparent" }}
                    title="낮음"
                    value="low"
                />
            </HStack>
        </RadioCardRoot>
    );
}
