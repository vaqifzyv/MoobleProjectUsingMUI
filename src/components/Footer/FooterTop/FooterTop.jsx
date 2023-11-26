import FooterTopLogo from "./FooterTopLogo/FooterTopLogo";
import FooterTopLinks from "./FooterTopLinks/FooterTopLinks";
import "./footertop.css";
function FooterTop() {
  return (
    <div
      className="FooterTop"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <FooterTopLogo />
      <FooterTopLinks />
    </div>
  );
}

export default FooterTop;
