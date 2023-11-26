import CraftedNavigation from "./CraftedNavigation/CraftedNavigation";
import CraftedCards from "./CraftedCards/CraftedCards";
function CraftedSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "0px auto",
      }}
    >
      <CraftedNavigation />
      <CraftedCards />
    </div>
  );
}

export default CraftedSection;
