import "./searchbar.css";
import Typography from "@mui/material/Typography";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Button from "@mui/material/Button";

function SearchBar() {
  return (
    <div className="searchBar">
      <div className="searchBarItems">
        <div>
          <Typography
            variant="p"
            color="#909090"
            sx={{ fontSize: "11px", fontFamily: "Poppins" }}
          >
            Comfort
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SelfImprovementIcon
            style={{ color: "#f97316", marginRight: "10px" }}
          />
          <Typography
            variant="p"
            color="#999"
            sx={{ fontSize: "11px", fontFamily: "Poppins" }}
          >
            Cozy Seating
          </Typography>
        </div>
      </div>
      <div className="searchBarItems">
        <div>
          <Typography
            variant="p"
            color="#909090"
            sx={{ fontSize: "11px", fontFamily: "Poppins" }}
          >
            Quality Assurance
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ThumbUpOutlinedIcon
            style={{ color: "#f97316", marginRight: "10px" }}
          />
          <Typography
            variant="p"
            color="#999"
            sx={{ fontSize: "11px", fontFamily: "Poppins" }}
          >
            Cozy Seating
          </Typography>
        </div>
      </div>
      <div className="searchBarItems">
        <div>
          <Typography
            variant="p"
            color="#909090"
            sx={{ fontSize: "11px", fontFamily: "Poppins" }}
          >
            Free Shipping
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Inventory2OutlinedIcon
            style={{ color: "#f97316", marginRight: "10px" }}
          />
          <Typography
            variant="p"
            color="#999"
            sx={{ fontSize: "11px", fontFamily: "Poppins" }}
          >
            No-Cost Delivery
          </Typography>
        </div>
      </div>

      <div
        className="searchBarItems"
        style={{
          borderLeft: "1px solid #909090",
          paddingLeft: "20px",
        }}
      >
        <div>
          <Typography
            variant="p"
            color="#909090"
            sx={{ fontSize: "11px", fontFamily: "Poppins" }}
          >
            Secure Checkout
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <VerifiedOutlinedIcon
            style={{ color: "#f97316", marginRight: "10px" }}
          />
          <Typography
            variant="p"
            color="#999"
            sx={{ fontSize: "11px", fontFamily: "Poppins" }}
          >
            Secure Payments
          </Typography>
        </div>
      </div>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#000",
          padding: "10px 20px",
          borderRadius: "25px",
          color: "#333",
          marginRight: "10px",
          fontFamily: "Poppins",
          "&:hover": {
            borderColor: "#333",
            backgroundColor: "#333",
            color: "#fff",
            transition: "background-color 0.3s ",
          },
        }}
      >
        See More
      </Button>
    </div>
  );
}

export default SearchBar;
