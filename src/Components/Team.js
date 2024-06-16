import "./Placement/placement.css";
import "./Team/team.css";
import Card from "./Team/Card";

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
            Society of Civil Engineers team through the below links. From these
            links, you can find contact information for each team member,
            allowing you to reach out to the appropriate person based on your
            needs. This information can be helpful in connecting with the
            Society of Civil Engineers team and accessing their resources and
            support.
          </p>
          <div className="row postulates-year-row">
            <div className="col postulates-year">
              <button type="button" className="btn-postulates">
                <a href="/team/team24">Current Team</a>
              </button>
            </div>
            <div className="col postulates-year">
              <button type="button" className="btn-postulates">
                <a href="/pastteams">Past Teams</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row phone">
        {/* <div className="col-6">
          <h1 className="text-center">Advisor</h1>
        </div>
        <div className="col-6">
          <h1 className="text-center">Advisor</h1>
        </div> */}
      </div>
      <Card />
    </div>
  );
}
