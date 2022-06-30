import { ErrorContainer } from "./Error.styles";
import { TbMoodSad } from "react-icons/tb";
import { Link } from "react-router-dom";
const Error = (props) => {
  return (
    <ErrorContainer>
      <TbMoodSad size={98} color={"grey"} />
      <h1>404</h1>
      <p>{props.error}</p>
      <div>
        <button onClick={() => window.location.reload()}>Try Again</button>
        {props.notFound && <Link to="/">Back to Page</Link>}
      </div>
    </ErrorContainer>
  );
};
export default Error;
