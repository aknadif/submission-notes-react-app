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
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onOutArchiveHandler = this.onOutArchiveHandler.bind(this);
    this.onAddCardHandler = this.onAddCardHandler.bind(this);
    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onDeleteHandler(id) {
    const datas = this.state.datas.filter((data) => data.id !== id);
    this.setState({ datas });
  }

  onArchiveHandler(id) {
    const datas = this.state.datas.map((data) => {
      if (data.id === id) {
        data.archived = true;
      }
      return data;
    });
    this.setState({ datas });
  }

  onOutArchiveHandler(id) {
    const datas = this.state.datas.map((data) => {
      if (data.id === id) {
        data.archived = false;
      }
      return data;
    });
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
            archived: false,
            createdAt: dayjs().format("MM DD, YYYY"),
          },
        ],
      };
    });
  }

  onSearchChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        search: event.target.value,
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar onChange={this.onSearchChangeEventHandler} value={this.state.search} />
        <div className="bg-white dark:bg-gray-900 transition duration-700">
          <div className="border-b-2 border-sky-400 dark:border-gray-600 py-6">
            <h4 className="text-sky-600 dark:text-gray-200 text-xl md:text-3xl text-center mb-4">Create Notes</h4>
            <CreateForm addCard={this.onAddCardHandler} />
          </div>
          <div className="border-b-2 border-sky-400 dark:border-gray-600 py-6">
            <h4 className="text-sky-600 dark:text-gray-200 text-xl md:text-3xl text-center lg:text-left px-0 md:px-28">Active Notes</h4>
            {this.state.datas.length > 0 ? (
              <CardList
                cards={this.state.datas.filter((val) => {
                  if (this.state.search === "") {
                    return val;
                  } else if (val.title.toLowerCase().includes(this.state.search.toLocaleLowerCase())) {
                    return val;
                  }
                  return null;
                })}
                onDelete={this.onDeleteHandler}
                onArchive={this.onArchiveHandler}
                archived={false}
              />
            ) : (
              <div className="text-center text-sky-600 dark:text-gray-200 text-xl md:text-3xl">Empty Notes</div>
            )}
          </div>
          <div className="py-6">
            <h4 className="text-sky-600 dark:text-gray-200 text-xl md:text-3xl text-center lg:text-right px-0 md:px-28">Archive Notes</h4>
            {this.state.datas.filter((val) => val.archived === true).length > 0 ? (
              <CardList
                cards={this.state.datas.filter((val) => {
                  if (this.state.search === "") {
                    return val;
                  } else if (val.title.toLowerCase().includes(this.state.search.toLocaleLowerCase())) {
                    return val;
                  }
                  return null;
                })}
                onDelete={this.onDeleteHandler}
                onOutArchive={this.onOutArchiveHandler}
                archived={true}
              />
            ) : (
              <div className="text-center text-sky-600 dark:text-gray-200 text-xl md:text-3xl">Empty Notes</div>
            )}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
