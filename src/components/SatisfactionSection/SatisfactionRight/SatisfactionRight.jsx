import "./satisfactionRight.css";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import HardwareOutlinedIcon from "@mui/icons-material/HardwareOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import Typography from "@mui/material/Typography";

function SatisfactionRight() {
  return (
    <div
      className="SatisfactionRight"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        justifyContent: "space-between",
      }}
    >
      <div
        className="SatisfactionRightFirst"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div className="SatisfactionRightFirstIcon">
          <BedOutlinedIcon sx={{ color: "#f97316" }} />
        </div>
        <div
          className="SatisfactionRightCards"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Typography
            variant="h4"
            color="#fff"
            sx={{ fontSize: "28px", fontFamily: "Inter" }}
          >
            Quality Craftsmanship
          </Typography>
          <Typography
            variant="p"
            color="#fff"
            sx={{ fontSize: "14px", fontFamily: "Inter", fontWeight: 500 }}
          >
            Our furniture is meticulously handcrafted to stand the test of time,
            ensuring it can be enjoyed for generations to come.
          </Typography>
        </div>
      </div>
      <div
        className="SatisfactionRightSecond"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div className="SatisfactionRightSecondIcon">
          <HardwareOutlinedIcon sx={{ color: "#f97316" }} />
        </div>
        <div
          className="SatisfactionRightCards"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Typography
            variant="h4"
            color="#fff"
            sx={{ fontSize: "28px", fontFamily: "Inter" }}
          >
            Extensive Selection
          </Typography>
          <Typography
            variant="p"
            color="#fff"
            sx={{ fontSize: "14px", fontFamily: "Inter", fontWeight: 500 }}
          >
            Discover a wide variety of styles and options to suit your unique
            preferences and needs.
          </Typography>
        </div>
      </div>
      <div
        className="SatisfactionRightThird"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div className="SatisfactionRightThirdIcon">
          <SupportAgentOutlinedIcon sx={{ color: "#f97316" }} />
        </div>
        <div
          className="SatisfactionRightCards"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Typography
            variant="h4"
            color="#fff"
            sx={{ fontSize: "28px", fontFamily: "Inter" }}
          >
            Dedicated Customer Support
          </Typography>
          <Typography
            variant="p"
            color="#fff"
            sx={{ fontSize: "18px", fontFamily: "Inter", fontWeight: 500 }}
          >
            Quiuckly navigate you anda engage with your adience
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default SatisfactionRight;
