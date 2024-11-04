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
                <Button size="sm" variant="outline">
                    {name}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverBody>{Component}</PopoverBody>
                <PopoverCloseTrigger />
            </PopoverContent>
        </PopoverRoot>
    );
}
