import Template from "./Template";
const data = [
  {
    head:"Placement Postulates",
    text: "A series of blogs powered by SOCE where graduating seniors jot down their placement experiences and give advice on how to handle placements"
  }
    ,
  {
    head:"Career Choices",
    text:"A series of live sessions conducted by SOCE where alums of CE IITK are invited as guest speakers, and they clarify the doubts of the students and motivate them for their future career choices."
  }
]

export default function Placement() {
  return (
    <>
      <Template props={data} />
    </>
  );
}