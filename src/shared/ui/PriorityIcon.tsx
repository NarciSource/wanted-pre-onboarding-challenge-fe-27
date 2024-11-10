import { Box } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa6";

import Priority from "../lib/Priority";

export default function PriorityIcon({ priority }: { priority: Priority }): React.ReactElement {
    let color;

    switch (priority) {
        case Priority.URGENT:
            color = "red";
            break;
        case Priority.NORMAL:
            color = "yellow";
            break;
        case Priority.LOW:
            color = "green";
            break;
        default:
            color = "transparent";
            break;
    }

    return (
        <Box>
            <FaCircle color={color} />
        </Box>
    );
}
