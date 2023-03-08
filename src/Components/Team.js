import "./Placement/placement.css";
import "./Team/team.css";
import Card from "./Team/Card";
import Card1 from "./Team/Team-card";
import Card2 from "./Team/Secy-card";

export default function Postu() {
  return (
    <div className="container" id="place">
      <div className="str">
        <div className="row">
          <h1> Team</h1>
        </div>
        <div className="row">
          <p>
            You can access information about the current and past members of the
            Society of Civil Engineers team through this link [insert link
            here]. From this link, you can find contact information for each
            team member, allowing you to reach out to the appropriate person
            based on your needs. This information can be helpful in connecting
            with the Society of Civil Engineers team and accessing their
            resources and support.
          </p>
          <div className="row postulates-year-row">
            <div className="col postulates-year">
              <button type="button" className="btn-postulates">
                Current Team
              </button>
            </div>
            <div className="col postulates-year">
              <button type="button" className="btn-postulates">
                Past Team
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 phone">
        <div className="col-6">
          <h1 className="text-center ms-5">HOD</h1>
        </div>
        <div className="col-6">
          <h1 className="text-center ms-5">Advisor</h1>
        </div>
      </div>
      <div className="row team-top phone">
        <div className="col-lg-2"></div>
        <Card />
        <div className="col-lg-3"></div>
        <Card />
      </div>
      <div className="row mobile my-4">
        <h1 className="text-center">HOD</h1>
        <Card />
        <h1 className="text-center">Advisor</h1>
        <Card />
      </div>
      <div className="row my-4">
        <h2 className="text-center my-5">Coordinators</h2>
        <Card1 />
      </div>
      <div className="row my-4">
        <h2 className="text-center my-5">Secretary</h2>
        <Card2 />
      </div>
    </div>
  );
}
