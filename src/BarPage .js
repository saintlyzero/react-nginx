import { Link } from "react-router-dom";

const BarPage = () => {
  return (
    <div class="page-container">
      <h1>--Page Bar--</h1>
      <p className="page-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed
        elementum tempus egestas sed sed. Adipiscing commodo elit at imperdiet
        dui accumsan. Rhoncus urna neque viverra justo nec ultrices. Lacus sed
        viverra tellus in hac habitasse. Nulla malesuada pellentesque elit eget.
        Senectus et netus et malesuada. A erat nam at lectus urna duis
        convallis. At elementum eu facilisis sed. Nisi porta lorem mollis
        aliquam ut porttitor. Lacus sed viverra tellus in hac habitasse platea.
        Amet consectetur adipiscing elit pellentesque habitant morbi tristique
        senectus et. At elementum eu facilisis sed odio morbi. Viverra orci
        sagittis eu volutpat odio facilisis mauris sit. Ultricies integer quis
        auctor elit sed vulputate mi sit.
      </p>
      <h2>
        <Link className="back-button" to={`/`}>
          {"<--"}
        </Link>
      </h2>
    </div>
  );
};

export default BarPage;
