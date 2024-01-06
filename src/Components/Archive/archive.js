import "../Styles/Student.css";
import ArchiveInfo from "./archive_info";
import ArOfflineSessionTemplate from "./ArOfSTemplate";
import ArBlogTemplate from "./ArBlogTemplate";

export default function Archive() {
  return (
    <div id="StudentSec">
      <ArchiveInfo />
      <ArBlogTemplate
        props={[
          {
            head: "Winter Projects 2023",
            date: "30 November 2023",

            insta:
              "https://www.instagram.com/p/C0PDuu3IS6s/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
          },
        ]}
      />
      <ArBlogTemplate
        props={[
          {
            head: "Unveiling the Mystique: Virupaksha Temple in Hampi",
            date: "15 November 2023",

            insta:
              "https://www.instagram.com/p/CzqvIK8oKLs/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
            linkedin:
              "https://www.linkedin.com/feed/update/urn:li:activity:7130545012118798336",
          },
        ]}
      />
      <ArBlogTemplate
        props={[
          {
            head: "Career Choices ",
            date: "12 November 2023",
            slides:
              "https://www.linkedin.com/feed/update/urn:li:activity:7128667220385103873",

            insta:
              "https://www.instagram.com/p/CzdZ2w9RFVX/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
            linkedin:
              "https://www.linkedin.com/feed/update/urn:li:activity:7128667220385103873",
          },
        ]}
      />

      <ArBlogTemplate
        props={[
          {
            head: "Research Seminar Series ",
            date: "12 October 2023",
            slides:
              "https://www.linkedin.com/feed/update/urn:li:activity:7070107898684555264",

            insta:
              "https://www.instagram.com/p/CyVsr5No0SX/?igshid=MzRlODBiNWFlZA==",
            linkedin:
              "https://www.linkedin.com/feed/update/urn:li:activity:7118591146502557696",
          },
        ]}
      />
      <ArBlogTemplate
        props={[
          {
            head: "CE-CUP'23 ",
            date: "11 October 2023",

            insta:
              "https://www.instagram.com/p/CyQkf2Fo_VJ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
          },
        ]}
      />
      <ArOfflineSessionTemplate
        props={[
          {
            head: "Intro to MITACS Globalink",
            date: "21 August 2023",
            slides:
              "https://drive.google.com/drive/folders/1FnbBGsngKu1MHouj9sFlZyH1D2mQqCPg",
          },
        ]}
      />
      <ArOfflineSessionTemplate
        props={[
          {
            head: "Y22 3rd Sem Informal Session",
            date: "28 July 2023",
            slides:
              "https://drive.google.com/drive/folders/1C94XBvQAlmp1vliu9lpfDGOz4_XI7gDE",
          },
        ]}
      />
      <ArOfflineSessionTemplate
        props={[
          {
            head: "Y22 Informal Session",
            date: "10 June 2023",
            slides:
              "https://drive.google.com/drive/folders/1i0hH7tnFbqRiPIbWkSMvn43pBub-Eekw",
          },
        ]}
      />
      <ArOfflineSessionTemplate
        props={[
          {
            head: "Informal Quant and ML Session",
            date: "3 June 2023",
            slides:
              "https://drive.google.com/drive/folders/1iCdKGqqZTWGUWKP6qdinHYtwyOG3CPsL",
          },
        ]}
      />

      <ArBlogTemplate
        props={[
          {
            head: "Blog: New Parliament Building",
            date: "1 June 2023",
            slides:
              "https://www.linkedin.com/feed/update/urn:li:activity:7070107898684555264",

            insta:
              "https://www.instagram.com/p/Cs8NlxsL2v2/?igshid=MzRlODBiNWFlZA==",
            linkedin:
              "https://www.linkedin.com/feed/update/urn:li:activity:7070107898684555264",
          },
        ]}
      />
    </div>
  );
}
