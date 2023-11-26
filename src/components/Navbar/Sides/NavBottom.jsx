import BottomLeftSide from "./BottomLeftSide";
import BottomCenterLinks from "./BottomCenterLinks";
import BottomRightSide from "./BottomRightSide";
function NavBottom() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "15px",
      }}
    >
      <BottomLeftSide />
      <BottomCenterLinks />
      <BottomRightSide />
    </div>
  );
}

export default NavBottom;
