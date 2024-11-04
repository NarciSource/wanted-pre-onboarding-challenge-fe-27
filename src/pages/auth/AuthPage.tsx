import React from "react";
import LoginComponent from "../../components/auth/LoginComponent";
import SignUpComponent from "../../components/auth/SignUpComponent";

export default function AuthPage(): React.ReactElement {
    return (
        <div>
            <h2>AuthPage</h2>
            <LoginComponent />
            <SignUpComponent />
        </div>
    );
}
