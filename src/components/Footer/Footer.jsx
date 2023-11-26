import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "0px auto",
      }}
    >
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default Footer;
