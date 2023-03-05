import Template from "./Template";
const data = [
  {
    head: "Sessions",
    text: "Various formal and Informal sessions to provide information regarding particular topic or field of interest by student community."
  },
  {
    head: "Merchandises",
    text: "Wear your pride of being a Civil Engineer from IITK with our fresh merch."
  }
]
export default function Session() {
  return (
    <>
      <Template props={data} />
    </>
  );
}