import React from "react";
import Input from "./Input";
import InputTextArea from "./InputTextArea";
import Button from "./Button";
class CreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  }

  onTagChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        tag: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="border-2 border-gray-600 md:w-1/2 mx-auto rounded-lg relative" onSubmit={this.onSubmitEventHandler}>
        <div className="flex flex-wrap justify-center py-5">
          <Input type="text" name="input_title" placeholder="Title" value={this.state.title} onChange={this.onNameChangeEventHandler} />
          <InputTextArea name="input_body" placeholder="Input body..." label="Body" value={this.state.body} onChange={this.onTagChangeEventHandler}/>
        </div>
        <div className="text-center md:text-right p-0 -mt-4 pb-4 md:px-14 md:pb-6">
          <Button name="Create" />
        </div>
      </form>
    );
  }
}

export default CreateForm;
