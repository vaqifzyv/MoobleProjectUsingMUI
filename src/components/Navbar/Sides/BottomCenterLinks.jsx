import { Typography } from "@mui/material";

function BottomCenterLinks() {
  return (
    <div>
      <ul style={{ display: "flex", gap: "40px" }}>
        <li>
          <a href="#">
            <Typography
              sx={{
                color: "rgba(153, 153, 153, 0.7)",
                fontFamily: "Poppins",
                "&:hover": {
                  color: "rgba(0,0,0,0.8)",
                  transition: " 0.5s ",
                },
              }}
            >
              Home
            </Typography>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography
              sx={{
                color: "rgba(153, 153, 153, 0.7)",
                fontFamily: "Poppins",
                "&:hover": {
                  color: "rgba(0,0,0,0.8)",
                  transition: " 0.5s ",
                },
              }}
            >
              About
            </Typography>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography
              sx={{
                color: "rgba(153, 153, 153, 0.7)",
                fontFamily: "Poppins",
                "&:hover": {
                  color: "rgba(0,0,0,0.8)",
                  transition: " 0.5s ",
                },
              }}
            >
              Furniture
            </Typography>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography
              sx={{
                color: "rgba(153, 153, 153, 0.7)",
                fontFamily: "Poppins",
                "&:hover": {
                  color: "rgba(0,0,0,0.8)",
                  transition: " 0.5s ",
                },
              }}
            >
              Car Catalogue
            </Typography>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography
              sx={{
                color: "rgba(153, 153, 153, 0.7)",
                fontFamily: "Poppins",
                "&:hover": {
                  color: "rgba(0,0,0,0.8)",
                  transition: " 0.5s ",
                },
              }}
            >
              FAQ
            </Typography>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BottomCenterLinks;
