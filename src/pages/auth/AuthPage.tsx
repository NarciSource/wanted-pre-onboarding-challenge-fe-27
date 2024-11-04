import React from "react";
import LoginFormLayout from "../../components/auth/LoginFormLayout";
import SignUpFormLayout from "../../components/auth/SignUpFormLayout";

export default function AuthPage(): React.ReactElement {
    return (
        <div>
            <h2>AuthPage</h2>
            <LoginFormLayout />
            <SignUpFormLayout />
        </div>
    );
}
