import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./craftednavigation.css";

function CraftedNavigation() {
  return (
    <div className="CraftedNavigation">
      <div className="CraftedNavigationLeft">
        <Button
          variant="text"
          sx={{
            borderColor: "#000",
            padding: "10px 20px",
            borderRadius: "25px",
            color: "#F73308",
            marginRight: "10px",
            fontFamily: "Poppins",
            backgroundColor: "#F5F5F5",
            transition: " 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#F73308",
              color: "#FFFFFF",
              borderColor: "#F73308",
            },
          }}
        >
          Check Our Product
        </Button>
        <Typography
          variant="body1"
          color="#121212"
          sx={{ fontFamily: "Inter", fontSize: "24px", fontWeight: 700 }}
        >
          Crafted with excellent material
        </Typography>
      </div>
      <div className="CraftedNavigationRight">
        <Button
          variant="outlined"
          sx={{
            borderColor: "#000",
            borderRadius: "25px",
            color: "#333",
            fontFamily: "Inter",
            height: "50%",
            "&:hover": {
              borderColor: "#333",
              backgroundColor: "#333",
              color: "#fff",
              transition: "background-color 0.3s ",
            },
          }}
        >
          Best Seller
        </Button>
        <ul>
          <li>
            <a href="#">Chair</a>
          </li>
          <li>
            <a href="#">Table</a>
          </li>
          <li>
            <a href="#">Bed</a>
          </li>
          <li>
            <a href="#">Closet</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CraftedNavigation;
