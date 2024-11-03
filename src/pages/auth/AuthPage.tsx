import React from "react";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

export default function AuthPage(): React.ReactElement {
    return (
        <div>
            <h2>AuthPage</h2>
            <LoginPage />
            <SignUpPage />
        </div>
    );
}
