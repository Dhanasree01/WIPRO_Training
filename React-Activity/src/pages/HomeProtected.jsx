import Home from "./Home";
import withAuth from "../hoc/withAuth";

const HomeProtected = withAuth(Home);

export default HomeProtected;
