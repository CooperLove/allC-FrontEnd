import { useSelector } from "react-redux";
import { RootState } from "../store/index.ts";
import SideMenu from "../components/SideMenu.tsx";
import "../css/HomePage.css";

function HomePage() {
  const user = useSelector((state: RootState) => state.userData);
  console.log(user.data);
  return (
    <div className="homePage-Container">
      <SideMenu />
      <div className="homePage__Content-Container">Home Page</div>
      {Object.keys(user.data).map((k, index) => {
        return (
          <h4 key={index}>
            Key {k} {Object.values(user.data).at(index)}
          </h4>
        );
      })}
    </div>
  );
}

export default HomePage;
