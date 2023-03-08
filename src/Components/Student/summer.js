import Template from "./Template";
const data = [
  {
    head: "Projects",
    link: "https://docs.google.com/document/d/1G9wK7dc8vq8QPtkxdiCWRFgOs5JC0gK5DCMGTOMYaoE/edit?usp=sharing",
    text: "SoCE provides summer and winter projects to CE IITK students. These projects are offered by seniors and postgraduate students to their juniors, providing them with valuable opportunities to gain practical experience and develop skills relevant to their academic and career pursuits."
  },
  {
    head: "Competitions",
    link: "",
    text: "To break the monotony of the academic workload during hectic semesters, fun competitions are frequently organized to provide students with a chance to take a break and enjoy themselves. These competitions are designed to be enjoyable and engaging, allowing students to relax and have fun while also fostering a sense of community and camaraderie among peers."
  }
]
export default function Summer() {
  return (
    <>
      <Template props={data} />
    </>
  );
}