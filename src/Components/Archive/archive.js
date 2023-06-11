import '../Styles/Student.css'
import ArchiveInfo from './archive_info'
import ArOfflineSessionTemplate from './ArOfSTemplate'
import ArBlogTemplate from './ArBlogTemplate';


;

export default function Archive() {
    return (
        <div id='StudentSec'>
            
            <ArchiveInfo/>
            <ArOfflineSessionTemplate props={[
                {
                    head: "Y22 Informal Session",
                    date: "10 June 2023",
                    slides: "https://drive.google.com/drive/folders/1i0hH7tnFbqRiPIbWkSMvn43pBub-Eekw",
                    
                    
                },

            ]} />
            <ArOfflineSessionTemplate props={[
                {
                    head: "Informal Quant and ML Session",
                    date: "3 June 2023",
                    slides: "https://drive.google.com/drive/folders/1iCdKGqqZTWGUWKP6qdinHYtwyOG3CPsL",


                },

            ]} />

            <ArBlogTemplate props={[
                {
                    head: "Blog: New Parliament Building",
                    date: "1 June 2023",
                    slides: "https://www.linkedin.com/feed/update/urn:li:activity:7070107898684555264",
                },

            ]} />

            
        </div>
    )
}