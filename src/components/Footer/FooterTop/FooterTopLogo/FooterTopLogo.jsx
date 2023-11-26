import "./footertoplogo.css";
import Typography from "@mui/material/Typography";

function FooterTopLogo() {
  return (
    <div
      className="FooterTopLogo"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <img src="src/assets/mooble-logo.png" alt="" />
      <Typography
        variant="p"
        color="#3F3636"
        sx={{ fontSize: "16px", fontFamily: "Inter", width: "200px" }}
      >
        Discover a wide variety of styles and options to suit your unique
        preferences and needs.
      </Typography>
    </div>
  );
}

export default FooterTopLogo;
