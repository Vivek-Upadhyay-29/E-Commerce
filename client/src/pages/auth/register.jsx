import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CommonForm from "@/components/common/form";
import { registerFormControl } from "@/config";

const initialSate = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [FormData, setFormData] = useState(initialSate)
  function onSubmit(){
    
  }
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new Account
        </h1>
        <p className="mt-2">
          Already have an Account
          <Link className="font-medium ml-2 text-primary hover:underline"
           to="/auth/login">
           
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControl}
        buttonText={'Sign Up'}
        formData={FormData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegister;
