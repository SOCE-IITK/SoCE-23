import Template from "./Template";
const data = [
  {
    head: "Resume",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
  },
  {
    head: "SURGE Projects@CE",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
  }
]
export default function Resume() {
  return (
    <>
      <Template props={data} />
    </>
  );
}