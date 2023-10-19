import Template from "./Template";
const data = [
  {
    head: "Resume",
    link: "https://drive.google.com/drive/folders/1BsFrnh5fE0Moi9J_6K9URX5r3N2UdEaa?usp=sharing",
    text: "We offer a collection of internship and placement resumes from various senior years, which you can use as a reference while crafting your own resume for different profiles and applying to companies of your choice. This compilation is designed to provide you with helpful insights and inspiration as you navigate the application process. Click on 'Read more' button to access the resumes and prepare your best resume out of it.",
  },
  {
    head: "SURGE Info.",
    link: "https://docs.google.com/presentation/d/16aynAi7si6xusKQDUBU2DoO7xBxIhYdg/edit?usp=sharing&ouid=113101467709173957270&rtpof=true&sd=true",
    text: "A comprehensive guide has been created for students applying for SURGE, which is prepared by seniors who have completed SURGE projects in the past. The guide provides general guidelines on how to approach the application process, including tips and strategies for selecting projects and securing letters of recommendation. This detailed guide aims to assist students in navigating the SURGE application process with confidence and success.",
  },
  
];
export default function Resume() {
  return (
    <>
      <Template props={data} />
    </>
  );
}
