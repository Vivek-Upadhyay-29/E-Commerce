import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Sheet} from "lucide-react";
import React, { useState } from "react";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};
function AdminProducts() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
function onSubmit(){
  
}
  const [formData, setFormData] = useState(initialFormData);
  return (
    <>
      <div className="mb-5  w-full flex justify-end">
        <Button onClick={() => openCreateProductsDialog(true)}>
          Add New Products
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
        }}
      >
       <SheetContent>

       </SheetContent>


{/*         
      //   <SheetContent side="right" className="overflow-auto">
      //   <SheetHeader>
      //       <SheetTitle>Add New Products</SheetTitle>
      //     </SheetHeader>
      //   </SheetContent > */}

        </Sheet>
      {/* 
     
        <SheetContent >
         
          
          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={currentEditedId !== null ? "Edit" : "Add"}
              formControls={addProductFormElements}
              isBtnDisabled={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet> */}
    </>
  );
}

export default AdminProducts;
