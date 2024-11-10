import { Box } from "@chakra-ui/react";
import { FaBell, FaFire } from "react-icons/fa6";

import Priority from "../lib/Priority";
import { RiZzzFill } from "react-icons/ri";

export default function PriorityIcon({ priority }: { priority: Priority }): React.ReactElement {
    let component;

    switch (priority) {
        case Priority.URGENT:
            component = <FaFire color="red" />;
            break;
        case Priority.NORMAL:
            component = <FaBell color="green" />;
            break;
        case Priority.LOW:
            component = <RiZzzFill color="orange" />;
            break;
        default:
            component = null;
            break;
    }

    return <Box>{component}</Box>;
}
