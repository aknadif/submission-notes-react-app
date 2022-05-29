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

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addCard(this.state);
  }

  render() {
    return (
      <form className="border-2 border-gray-600 md:w-1/2 mx-auto rounded-lg relative" onSubmit={this.onSubmitEventHandler}>
        <div className="flex flex-wrap justify-center py-5">
          <Input type="text" name="input_title" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <InputTextArea name="input_body" placeholder="Input body..." label="Body" value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
        </div>
        <div className="text-center md:text-right p-0 -mt-4 pb-4 md:px-14 md:pb-6">
          <Button name="Create" />
        </div>
      </form>
    );
  }
}

export default CreateForm;
