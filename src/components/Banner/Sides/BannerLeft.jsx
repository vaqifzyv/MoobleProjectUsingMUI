import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import IconButton from "@mui/material/IconButton";

function BannerLeft() {
  return (
    <div className="bannerLeft">
      <Typography
        variant="h2"
        color="#333"
        sx={{
          fontSize: "64px",
          fontWeight: 700,
          width: "70%",
          fontFamily: "Inter",
        }}
      >
        Perfect Harmony: Comfort & Style
      </Typography>
      <Typography
        variant="subtitle1"
        color="#999"
        sx={{
          fontSize: "20px",
          fontWeight: 400,
          width: "80%",
          fontFamily: "Inter",
          marginBottom: "24px",
        }}
      >
        Explore furniture that harmoniously combines comfort and style to
        elevate your home
      </Typography>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#000",
          padding: "10px 20px",
          borderRadius: "25px",
          color: "#333",
          fontFamily: "Poppins",
          marginRight: "10px",
          "&:hover": {
            borderColor: "#333",
            backgroundColor: "#333",
            color: "#fff",
            transition: "background-color 0.3s ",
          },
        }}
      >
        Explore Our Offers
      </Button>
      <IconButton>
        <PlayCircleIcon />
      </IconButton>
      <Typography
        variant="p"
        color="initial"
        sx={{ fontSize: "12px", color: "#999", fontFamily: "Inter" }}
      >
        Watch Video
      </Typography>
    </div>
  );
}

export default BannerLeft;
