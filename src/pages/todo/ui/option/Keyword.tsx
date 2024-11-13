import React from "react";
import { LuSearch } from "react-icons/lu";

import { InputGroup } from "@/shared/chakra-ui/input-group";
import { Input } from "@chakra-ui/react";

interface Parameters {
    handleOptionChange: (name: string, value: string | null) => void;
}

export default function TodoKeywordOption({ handleOptionChange }: Parameters): React.ReactElement {
    return (
        <InputGroup startElement={<LuSearch />} w="150px">
            <Input
                placeholder="키워드 검색"
                onChange={(e) => {
                    handleOptionChange("keyword", e.target.value);
                }}
            />
        </InputGroup>
    );
}
