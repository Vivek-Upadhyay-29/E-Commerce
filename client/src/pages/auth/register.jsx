import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CommonForm from "@/components/common/form";
import { registerFormControl } from "@/config";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { registerUser } from "@/store/auth-slice/authSlice";
import { useToast } from "@/hooks/use-toast";

const initialSate = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [FormData, setFormData] = useState(initialSate);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(FormData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
        navigate("/auth/login");
      }else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }
  console.log(FormData);
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new Account
        </h1>
        <p className="mt-2">
          Already have an Account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControl}
        buttonText={"Sign Up"}
        formData={FormData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegister;
