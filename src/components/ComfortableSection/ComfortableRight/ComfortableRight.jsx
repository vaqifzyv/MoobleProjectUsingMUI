import "./comfortableright.css";
import Typography from "@mui/material/Typography";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

function ComfortableRight() {
  return (
    <div className="ComfortableRight">
      <div className="ComfortableRightTop">
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
          Elevate Your Mood with Comfortable Furniture
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
          Your surroundings have a profound impact on your mood. Discover how
          our high-quality furniture can transform your space into a haven of
          comfort and happiness. Create an environment that nurtures your
          well-being and elevates your spirits with the perfect blend of style
          and coziness.
        </Typography>
      </div>
      <div className="ComfortableRightCenter" style={{ marginTop: "24px" }}>
        <div className="ComfortableRightFirst">
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
            Unmatched Comfort
          </Typography>
        </div>
        <div className="ComfortableRightSecond">
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
            Crafted for Quality
          </Typography>
        </div>
        <div className="ComfortableRightThird">
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
            Stylish Elegance
          </Typography>
        </div>
      </div>
      <div className="ComfortableRightBottom" style={{ marginTop: "24px" }}>
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
export default ComfortableRight;
