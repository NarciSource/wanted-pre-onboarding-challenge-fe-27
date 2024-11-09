import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import TodoItem from "@/entities/TodoItem";

export default function TodoView({
    title,
    content,
    createdAt,
    updatedAt,
}: TodoItem): React.ReactElement {
    return (
        <Box
            overflow="hidden"
            textOverflow="ellipsis"
            borderWidth={1}
            borderColor="gray.300"
            borderRadius="md"
            boxShadow="md"
            mt={3}
            p={5}
            bg="white"
        >
            <Heading paddingTop={5}>{title}</Heading>

            <Text p={10}>{content}</Text>

            <Flex justify="flex-end" borderTopWidth={1} borderColor="gray.300" pt={2}>
                <Stack textStyle="xs">
                    <Text>생성시간: {createdAt.toLocaleString()}</Text>
                    <Text>수정시간: {updatedAt.toLocaleString()}</Text>
                </Stack>
            </Flex>
        </Box>
    );
}
