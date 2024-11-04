import React from "react";
import LoginLayout from "../../components/auth/LoginLayout";
import SignUpComponent from "../../components/auth/SignUpComponent";

export default function AuthPage(): React.ReactElement {
    return (
        <div>
            <h2>AuthPage</h2>
            <LoginLayout />
            <SignUpComponent />
        </div>
    );
}
