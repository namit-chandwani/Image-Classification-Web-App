import React, { Component } from "react";
import * as tf from "@tensorflow/tfjs";

class Home extends Component {
  async loadModelHandler() {
    console.log("Model loading..");
    const model = await tf.loadLayersModel("./models/mobilenet/model.json");
    console.log("Model loaded..");
  }
  uploadImageHandler = () => {};
  predictHandler = () => {};
  render() {
    return (
      <div>
        <section className="text-gray-700 body-font">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
            Image Classification Web App
          </h1>
          <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              <div className="flex w-full justify-center">
                <button
                  onClick={this.loadModelHandler}
                  className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg m-5"
                >
                  Load Model
                </button>
                <button
                  onClick={this.uploadImageHandler}
                  className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg m-5"
                >
                  Upload Image
                </button>
              </div>
              <button
                onClick={this.predictHandler}
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg m-5 h-15"
              >
                Predict
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
