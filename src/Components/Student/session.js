import Template from "./Template";
const data = [
  {
    head: "Sessions",
    link: "https://www.instagram.com/p/CkygSwajDAS/?hl=en",
    text: "The student community's academic needs are regularly addressed through organized sessions that provide valuable information to assist with their academic life and semester requirements. These sessions offer support to students seeking guidance, resources, and strategies to succeed academically.",
  },
  {
    head: "Merchandises",
    link: "https://www.instagram.com/p/CmQho1RPrCn/?hl=en",
    text: "Display your pride as a Civil Engineer from IITK with the official SoCE merchandise designed for the civil engineering community. The merchandise serves as a symbol of your connection to the department, allowing you to proudly showcase your affiliation and support for your fellow civil engineering peers."
  }
]
export default function Session() {
  return (
    <>
      <Template props={data} />
    </>
  );
}