import React from "react";

import {
    PopoverRoot,
    PopoverTrigger,
    Button,
    PopoverContent,
    PopoverArrow,
    PopoverBody,
    PopoverCloseTrigger,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function Popover({
    name,
    Component,
}: {
    name: string;
    Component: React.ReactElement;
}): React.ReactElement {
    return (
        <PopoverRoot>
            <PopoverTrigger asChild>
                <Button size="sm" variant="outline" bg={useColorModeValue("gray.100", "gray.600")}>
                    {name}
                </Button>
            </PopoverTrigger>
            <PopoverContent position="fixed" zIndex={99} bg="white">
                <PopoverArrow />
                <PopoverBody>{Component}</PopoverBody>
                <PopoverCloseTrigger />
            </PopoverContent>
        </PopoverRoot>
    );
}
