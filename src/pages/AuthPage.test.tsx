import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { MemoryRouter } from "react-router-dom";
import AuthPage from "./AuthPage";

test("AuthPage 테스트", async () => {
    const screen = render(
        <MemoryRouter initialEntries={["/"]}>
            <AuthPage />
        </MemoryRouter>,
    );

    await expect.element(screen.getByText("AuthPage")).toBeInTheDocument();
});
