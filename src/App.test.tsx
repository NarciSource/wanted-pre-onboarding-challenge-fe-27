import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "./App";

test("초기앱 화면 테스트", async () => {
    const screen = render(<App />);

    await expect.element(screen.getByText("Vite + React")).toBeInTheDocument();
});
