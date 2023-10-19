import '../Styles/Student.css'
import ArchiveInfo from './archive_info'
import ArOfflineSessionTemplate from './ArOfSTemplate'
import ArBlogTemplate from './ArBlogTemplate';


;

export default function Archive() {
    return (
      <div id="StudentSec">
        <ArchiveInfo />
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