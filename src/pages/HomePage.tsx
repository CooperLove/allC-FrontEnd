import { useSelector } from "react-redux";
import { RootState } from "../store/index.ts";

function HomePage() {
  const user = useSelector((state: RootState) => state.userData);
  console.log(user.data);
  return (
    <div>
      <h1>Home Page</h1>
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
