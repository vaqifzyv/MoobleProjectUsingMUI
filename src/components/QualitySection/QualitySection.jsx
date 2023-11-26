import QualityLeft from "./QualityLeft/QualityLeft";
import QualityRight from "./QualityRight/QualityRight";

function QualitySection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        margin: "0 auto",
        marginTop: "120px",
      }}
    >
      <QualityLeft />
      <QualityRight />
    </div>
  );
}

export default QualitySection;
