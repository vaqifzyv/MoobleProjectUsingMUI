import SatisfactionLeft from "./SatisfactionLeft/SatisfactionLeft";
import SatisfactionRight from "./SatisfactionRight/SatisfactionRight";

function SatisfactionSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "95%",
        margin: "0px auto",
        backgroundColor: "#000",
        padding: "50px 100px",
        marginBlock: "120px",
      }}
    >
      <SatisfactionLeft />
      <SatisfactionRight />
    </div>
  );
}

export default SatisfactionSection;
