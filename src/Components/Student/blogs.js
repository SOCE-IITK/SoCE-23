import Template from "./Template";
const data = [
  {
    head: "Blogs",
    link: "https://medium.com/@soceiitk",
    text: "SoCE publishes various informative blogs on a timely basis to provide information on trending topics or any informative content that sparks curiosity. These blogs are designed to keep students and faculty up-to-date with the latest developments and trends in the field of civil engineering, as well as provide insights into related topics that may be of interest.  ",
  },
  {
    head: "Projects",
    link: "https://docs.google.com/document/d/1G9wK7dc8vq8QPtkxdiCWRFgOs5JC0gK5DCMGTOMYaoE/edit?usp=sharing",
    text: "SoCE provides summer and winter projects to CE IITK students. These projects are offered by seniors and postgraduate students to their juniors, providing them with valuable opportunities to gain practical experience and develop skills relevant to their academic and career pursuits.",
  },
  {
    head: "Resume",
    link: "https://drive.google.com/drive/folders/1BsFrnh5fE0Moi9J_6K9URX5r3N2UdEaa?usp=sharing",
    text: "We offer a collection of internship and placement resumes from various senior years, which you can use as a reference while crafting your own resume for different profiles and applying to companies of your choice. This compilation is designed to provide you with helpful insights and inspiration as you navigate the application process. Click on 'Read more' button to access the resumes and prepare your best resume out of it.",
  },
];

export default function Blogs() {
  return (
    <>
      <Template props={data} />
    </>
  );
}