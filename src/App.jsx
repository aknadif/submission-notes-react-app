import React from "react";
import CardList from "./components/CardList";
import CreateForm from "./components/CreateForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="bg-gray-900">
        <div className="border-b-2 border-gray-600 py-6">
          <h4 className="text-gray-200 text-xl md:text-3xl text-center mb-4">Create Notes</h4>
          <CreateForm />
        </div>
        <div className="border-b-2 border-gray-600 py-6">
          <h4 className="text-gray-200 text-xl md:text-3xl text-center lg:text-left px-0 md:px-28">Active Notes</h4>
          <CardList />
        </div>
        <div className="py-6">
          <h4 className="text-gray-200 text-xl md:text-3xl text-center lg:text-right px-0 md:px-28">Archive Notes</h4>
          <CardList />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
