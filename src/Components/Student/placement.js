import Template from "./Template";
const data = [
  {
    head:"Placement Postulates",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
  }
    ,
  {
    head:"Career Choices",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
  }
]

export default function Placement() {
  return (
    <>
      <Template props={data} />
    </>
  );
}