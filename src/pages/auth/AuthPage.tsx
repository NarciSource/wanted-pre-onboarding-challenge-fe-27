import React from "react";
import LoginLayout from "../../components/auth/LoginLayout";
import SignUpLayout from "../../components/auth/SignUpLayout";

export default function AuthPage(): React.ReactElement {
    return (
        <div>
            <h2>AuthPage</h2>
            <LoginLayout />
            <SignUpLayout />
        </div>
    );
}
