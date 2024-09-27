import { Label } from "@radix-ui/react-label";
import { BadgeCheck } from "lucide-react";

export const registerFormControl = [
  {
    name: "username",
    Label: "User Name",
    placeholder: "Enter your user name",
    compnentType: "input",
    type: "text",
  },
  {
    name: "email",
    Label: "Email",
    placeholder: "Enter your email",
    compnentType: "input",
    type: "email",
  },
  {
    name: "password",
    Label: "Password",
    placeholder: "Enter your password",
    compnentType: "input",
    type: "password",
  },
];
export const LoginFormControl = [

  {
    name: "email",
    Label: "Email",
    placeholder: "Enter your email",
    compnentType: "input",
    type: "email",
  },
  {
    name: "password",
    Label: "Password",
    placeholder: "Enter your password",
    compnentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];
