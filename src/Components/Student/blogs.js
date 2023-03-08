import Template from "./Template";
const data = [
  {
    head:"Blogs",
    link:"https://medium.com/@soceiitk",
    text: "SoCE publishes various informative blogs on a timely basis to provide information on trending topics or any informative content that sparks curiosity. These blogs are designed to keep students and faculty up-to-date with the latest developments and trends in the field of civil engineering, as well as provide insights into related topics that may be of interest.  "
  }
    ,
  {
    head:"Social Media Posts",
    link:"https://www.instagram.com/soce.iitk/?hl=en",
    text:"SOCE publishes various informative posts on a timely basis to provide information on trending topics or any informative content that sparks curiosity. These posts are designed to keep students and faculty up-to-date with the latest developments and trends in the field of civil engineering, as well as provide insights into related topics that may be of interest."
  }
]

export default function Blogs() {
  return (
    <>
      <Template props={data} />
    </>
  );
}