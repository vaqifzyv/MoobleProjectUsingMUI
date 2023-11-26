import "./craftedcard.css";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

function CraftedCard(props) {
  const { image, cardDesc, cardId } = props;

  return (
    <div className="craftedCard">
      <div className="cardImage">
        <img src={image} />
      </div>
      <div className="cardInfo">
        <Typography
          variant="body1"
          color="#505050"
          sx={{ fontSize: "20px", fontFamily: "Rubik", fontWeight: 600 }}
        >
          {cardDesc}
        </Typography>
      </div>
      <div
        className="cardBottom"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          className="CardPrice"
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <Typography
            variant="body1"
            color="#9C9C9C"
            sx={{
              fontSize: "16px",
              fontFamily: "Rubik",
              fontWeight: 500,
              textDecorationLine: "line-through",
            }}
          >
            $105.00
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "18px", fontFamily: "Rubik", fontWeight: 500 }}
          >
            $95.00
          </Typography>
        </div>
        <div className="craftedicon">
          <IconButton>
            <LocalGroceryStoreOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default CraftedCard;
