import Template from "./Template";
const data = [
  {
    head: "Resume",
    text: "A compilation of resumes for you to take reference when you make your resume."
  },
  {
    head: "SURGE Projects@CE",
    text: "A comprehensive guide of the professors offering SURGE projects and general guidelines on approaching them."
  }
]
export default function Resume() {
  return (
    <>
      <Template props={data} />
    </>
  );
}