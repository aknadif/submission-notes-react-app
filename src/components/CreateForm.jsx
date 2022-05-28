import React from "react";
import Input from "./Input";
import InputTextArea from "./InputTextArea";
import Button from "./Button";
function CreateForm() {
  return (
    <form action="" className="border-2 border-gray-600 md:w-1/2 mx-auto rounded-lg relative">
      <div className="flex flex-wrap justify-center py-5">
        <Input type="text" name="input_title" placeholder="Title" />
        <InputTextArea name="input_body" placeholder="Input body..." label="Body" />
      </div>
      <div className="text-center md:text-right p-0 -mt-4 pb-4 md:px-14 md:pb-6">
        <Button name="Create" />
      </div>
    </form>
  );
}

export default CreateForm;
