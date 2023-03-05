import Template from "./Template";
const data = [
  {
    head: "Summer Projects",
    text: "These are the projects being offered this summer for the student community of CE IITK."
  },
  {
    head: "Competitions",
    text: "Frequently organized fun competitions to break the monotonic academic workload during the hectic semesters."
  }
]
export default function Summer() {
  return (
    <>
      <Template props={data} />
    </>
  );
}