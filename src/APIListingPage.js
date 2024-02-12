import { useParams } from "react-router-dom";

function APIListingPage() {
  const { orgName } = useParams();
  console.log(orgName)

  if (orgName == "ABCOrganization") {
    return (
      <div>
        <li> <a href="http://localhost:3000/ABCOrganization/APILandingPage/paymentsAPI"> Payment API </a></li>
        <li>API2</li>
        <li>API3</li>
      </div>
    );
  } else {
    return (
      <div>
        <li>API4</li>
        <li>API5</li>
        <li>API6</li>
      </div>
    );
  }
}

export default APIListingPage;