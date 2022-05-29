import React from "react";
import CardList from "./components/CardList";
import CreateForm from "./components/CreateForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { getInitialData } from "./utils/data-card";
const dayjs = require("dayjs");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddCardHandler = this.onAddCardHandler.bind(this);
  }
  onDeleteHandler(id) {
    const datas = this.state.datas.filter((data) => data.id !== id);
    this.setState({ datas });
  }

  onAddCardHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        datas: [
          ...prevState.datas,
          {
            id: +new Date(),
            title,
            body,
            createdAt: dayjs().format("MM DD, YYYY"),
          },
        ],
      };
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="bg-gray-900">
          <div className="border-b-2 border-gray-600 py-6">
            <h4 className="text-gray-200 text-xl md:text-3xl text-center mb-4">Create Notes</h4>
            <CreateForm addCard={this.onAddCardHandler} />
          </div>
          <div className="border-b-2 border-gray-600 py-6">
            <h4 className="text-gray-200 text-xl md:text-3xl text-center lg:text-left px-0 md:px-28">Active Notes</h4>
            <CardList cards={this.state.datas} onDelete={this.onDeleteHandler} />
          </div>
          <div className="py-6">
            <h4 className="text-gray-200 text-xl md:text-3xl text-center lg:text-right px-0 md:px-28">Archive Notes</h4>
            {/* <CardList cards={this.state.datas} onDelete={this.onDeleteHandler}/> */}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
