import Button from "./Button";

const Navigation = ({ handleViewClick }) => {
  return (
    <nav>
      <ul>
        <li>
          <Button onClick={() => handleViewClick("home")} text={"Home"} />
        </li>
        <li>
          <Button onClick={() => handleViewClick("list")} text={"List"} />
        </li>
        <li>
          <Button
            onClick={() => handleViewClick("settings")}
            text={"Settings"}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
