import Template from "./Template";
const data = [
  {
    head: "Resume",
    link: "https://drive.google.com/drive/folders/1BsFrnh5fE0Moi9J_6K9URX5r3N2UdEaa?usp=sharing",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
  },
  {
    head: "SURGE Projects@CE",
    link: "https://docs.google.com/presentation/d/16aynAi7si6xusKQDUBU2DoO7xBxIhYdg/edit?usp=sharing&ouid=113101467709173957270&rtpof=true&sd=true",
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