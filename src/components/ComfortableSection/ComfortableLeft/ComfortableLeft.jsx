import "./comfortableleft.css";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

function ComfortableLeft() {
  return (
    <>
      <div className="ComfortableLeft">
        <img src="src/assets/ComfortPhoto.jfif" alt="" />
      </div>
      <div className="ComfortableLeftVictor">
        <div className="ComfortableLeftVictorPhoto">
          <Avatar src="src/assets/ComfortVictor.jfif" />
        </div>
        <div className="ComfortableLeftVictorRight">
          <div className="ComfortableLeftVictorText">
            <Typography
              variant="body1"
              color="#191A15"
              sx={{ fontSize: "16px", fontFamily: "Inter", fontWeight: 500 }}
            >
              Victor Adams
            </Typography>
            <Typography
              variant="body1"
              color="#A6A6A6"
              sx={{ fontSize: "12px", fontFamily: "Inter", fontWeight: 500 }}
            >
              Interior Design and Styling
            </Typography>
          </div>
          <div className="ComfortableLeftVictorRightButton">
            <IconButton
              sx={{
                width: "24px",
                height: "24px",
                background: "#F97316",
                color: "white",
                transition: "0.7s",
                marginRight: "10px",
                ":hover": {
                  background: "#FFA94D",
                },
              }}
            >
              <SendIcon
                sx={{
                  width: "16px",
                  height: "16px",
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>
      <div
        className="ComfortableLeftSecondCard"
        style={{ display: "flex", alignItems: "center" }}
      >
        <IconButton
          sx={{
            background: "#fff",
            color: "#F97316",
            border: "2px solid #F97316",
            transition: "0.7s",
            width: "24px",
            height: "24px",
            ":hover": {
              background: "#F97316",
              color: "#fff",
            },
          }}
        >
          <DoneOutlinedIcon sx={{ width: "16px", height: "16px" }} />
        </IconButton>
        <Typography
          variant="p"
          color="#191A15"
          sx={{ fontSize: "14px", fontFamily: "Inter", fontWeight: 500 }}
        >
          We guarantee your comfort
        </Typography>
      </div>
    </>
  );
}

export default ComfortableLeft;
