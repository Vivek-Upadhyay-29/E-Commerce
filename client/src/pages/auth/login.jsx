import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CommonForm from "@/components/common/form";
import { LoginFormControl } from "@/config";

const initialSate = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [FormData, setFormData] = useState(initialSate);
  function onSubmit() {}
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an Account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={LoginFormControl}
        buttonText={"Sign In"}
        formData={FormData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
