import { Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "./leftside.css";

function LeftSide() {
  return (
    <div className="leftSide">
      <Typography
        variant="p"
        color="initial"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          fontFamily: "Inter",
        }}
      >
        <LocalPhoneOutlinedIcon sx={{ color: "orange", width: "20px" }} />
        +994514422006
      </Typography>
      <Typography
        variant="p"
        color="initial"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          fontFamily: "Inter",
        }}
      >
        <EmailOutlinedIcon sx={{ color: "orange", width: "20px" }} />
        zvaqif00@gmail.com
      </Typography>
    </div>
  );
}

export default LeftSide;
