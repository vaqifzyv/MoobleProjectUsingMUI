import "./qualityleft.css";
import Typography from "@mui/material/Typography";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import "./qualityLeft.css";

function QualityLeft() {
  return (
    <div className="QualityLeft">
      <div className="qualityLeftTop">
        <Typography
          variant="h4"
          color="#191A15"
          sx={{
            fontSize: "44px",
            fontFamily: "Inter",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          Elevate Your Space with Uncompromising Quality
        </Typography>
        <Typography
          variant="p"
          color="#4F4F4F"
          sx={{
            fontSize: "14px",
            fontFamily: "Inter",
            fontWeight: 400,
          }}
        >
          Experience the epitome of furniture quality. Our products are
          meticulously crafted with an unwavering commitment to excellence. From
          the finest materials to expert craftsmanship, each piece embodies
          durability, comfort, and timeless style. Elevate your space with the
          assurance of exceptional quality and lasting beauty
        </Typography>
      </div>
      <div className="qualityLeftCenter" style={{ marginTop: "24px" }}>
        <div className="qualityLeftCenterFirst">
          <IconButton
            sx={{
              background: "#F97316",
              color: "white",
              transition: "0.7s",
              marginRight: "10px",
              ":hover": {
                background: "#FFA94D",
              },
            }}
          >
            <DoneOutlinedIcon />
          </IconButton>
          <Typography
            variant="p"
            color="#191A15"
            sx={{ fontSize: "16px", fontFamily: "Inter", fontWeight: 500 }}
          >
            Experience Unparalleled Quality
          </Typography>
        </div>
        <div className="qualityLeftCenterSecond">
          <IconButton
            sx={{
              background: "#F97316",
              color: "white",
              transition: "0.7s",
              marginRight: "10px",
              ":hover": {
                background: "#FFA94D",
              },
            }}
          >
            <DoneOutlinedIcon />
          </IconButton>
          <Typography
            variant="p"
            color="#191A15"
            sx={{ fontSize: "16px", fontFamily: "Inter", fontWeight: 500 }}
          >
            Experience Unparalleled Quality
          </Typography>
        </div>
        <div className="qualityLeftCenterThird">
          <IconButton
            sx={{
              background: "#F97316",
              color: "white",
              transition: "0.7s",
              marginRight: "10px",
              ":hover": {
                background: "#FFA94D",
              },
            }}
          >
            <DoneOutlinedIcon />
          </IconButton>
          <Typography
            variant="p"
            color="#191A15"
            sx={{ fontSize: "16px", fontFamily: "Inter", fontWeight: 500 }}
          >
            Experience Unparalleled Quality
          </Typography>
        </div>
      </div>
      <div className="qualityLeftBottom" style={{ marginTop: "24px" }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: "30px",
            background: "#000",
            color: "#fff",
            fontSize: "16px",
            ":hover": {
              background: "#333",
            },
          }}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
export default QualityLeft;
