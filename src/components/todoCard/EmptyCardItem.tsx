import React from "react";

import { Card, Skeleton } from "@chakra-ui/react";

export default function EmptyCardItem(): React.ReactElement {
    return (
        <Card.Root variant="elevated" margin={3} h={300} w={300}>
            <Skeleton w="100%" h="100%" />
        </Card.Root>
    );
}
