import Template from "./Template";
const data = [
  {
    head: "Summer Projects",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
  },
  {
    head: "Competitions",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
  }
]
export default function Summer() {
  return (
    <>
      <Template props={data} />
    </>
  );
}