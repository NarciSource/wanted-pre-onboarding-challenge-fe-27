import React from "react";

import CommonLayout from "@/shared/ui/CommonLayout";
import AuthView from "./ui/AuthView";

export default function AuthPage(): React.ReactElement {
    return <CommonLayout>{(isLoggedIn) => isLoggedIn && <AuthView />}</CommonLayout>;
}
