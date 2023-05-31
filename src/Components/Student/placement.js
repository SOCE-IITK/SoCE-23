import Template from "./Template";
const data = [
  {
    head:"Placement Postulates",
    link:"/postulates",
    text: "SoCE provides a series of blogs where graduating seniors share their placement experiences, advice on how to handle the process from beginning to end, and insights into their interview experiences. These blogs offer valuable guidance to students preparing for their own placement interviews."
  }
    ,
  {
    head:"Career Choices",
    link:"https://drive.google.com/drive/folders/1EZ1EkrFAj9WP9YT6mdJFJeUDmRvH-vzL?usp=sharing",
    text:"SOCE conducts a series of live sessions featuring CE IITK alumni as guest speakers. These sessions aim to clarify doubts and provide guidance to students on their future career choices. Alumni share their experiences and insights, offer advice and motivation to students, and inspire them to pursue their career goals."
  }
]

export default function Placement() {
  return (
    <>
      <Template props={data} />
    </>
  );
}