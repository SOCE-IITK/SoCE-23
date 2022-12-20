import Template from "./Template";
const data = 
  {
    head1:"Summer Projects",
    text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
    head2:"Competitions",
    text2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
  }
export default function Summer() {
  return (
    <>
    <Template props={data}/>
    </>
  );
}