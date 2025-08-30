import { useState } from "react";
import "./placement.css";
import Card from "./Card";
import chats from "../../database/placement";
export default function Postulate() {
  let [data, setData] = useState(chats);
  // console.log(data);
  return (
    <>
      <div className="container mes" id="place">
        <div className="row">
          <div className="col">
            <h1>Placement Postulates</h1>
            <p>
              SoCE provides a series of blogs where graduating seniors share
              their placement experiences, advice on how to handle the process
              from beginning to end, and insights into their interview
              experiences. These blogs offer valuable guidance to students
              preparing for their own placement interviews.
            </p>
          </div>
        </div>
        <div className="row postulates-year-row">
          <div className="col postulates-year">
            <button
              type="button"
              className="btn-postulates"
              onClick={() => {
                data = chats.filter((d) => d.year === "pg");
                // console.log(data)
                setData(data);
              }}
            >
              PG
            </button>            
          </div>
          <div className="col postulates-year">
            <button
              type="button"
              className="btn-postulates"
              onClick={() => {
                data = chats.filter((d) => d.year === "y21");
                // console.log(data)
                setData(data);
              }}
            >
              Y21
            </button>
          </div>
          <div className="col postulates-year">
            <button
              type="button"
              className="btn-postulates"
              onClick={() => {
                data = chats.filter((d) => d.year === "y20");
                // console.log(data)
                setData(data);
              }}
            >
              Y20
            </button>
          </div>
          <div className="col postulates-year">
            <button
              type="button"
              className="btn-postulates"
              onClick={() => {
                data = chats.filter((d) => d.year === "y19");
                // console.log(data)
                setData(data);
              }}
            >
              Y19
            </button>
          </div>
          <div className="col postulates-year">
            <button
              type="button"
              className="btn-postulates"
              onClick={() => {
                data = chats.filter((d) => d.year === "y18");
                // console.log(data)
                setData(data);
              }}
            >
              Y18
            </button>
          </div>
          <div className="col postulates-year">
            <button
              type="button"
              className="btn-postulates"
              onClick={() => {
                data = chats.filter((d) => d.year === "y17");
                setData(data);
              }}
            >
              Y17
            </button>
          </div>
          <div className="col postulates-year">
            <button
              type="button"
              className="btn-postulates"
              onClick={() => {
                data = chats.filter((d) => d.year === "y16");
                setData(data);
              }}
            >
              Y16
            </button>
          </div>
          <div className="col postulates-year">
            <button
              type="button"
              className="btn-postulates"
              onClick={() => {
                data = chats;
                setData(data);
              }}
            >
              All
            </button>
          </div>
        </div>
      </div>
      <div className="container" id="place">
        <div className="row d-flex justify-content-around">
          <Card postulates={data} />
        </div>
      </div>
    </>
  );
}
