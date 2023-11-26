import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./firstfuniturecard.css";

function FirstFurnitureCard(props) {
  const { image, cardDesc, cardId } = props;

  return (
    <div
      className="firstfuniturecard"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div className="cardLeft">
        <Typography
          variant="body1"
          color="#121212"
          sx={{ fontFamily: "Rubik", fontSize: "24px" }}
        >
          {cardDesc}
        </Typography>
        <Button
          variant="text"
          sx={{
            color: "#000",
            background: "#fff",
            fontFamily: "Rubik",
            fontSize: "14px",
            padding: "6px 12px",
          }}
        >
          See More
        </Button>
      </div>
      <div className="cardPhoto">
        <img src={image} />
      </div>
    </div>
  );
}

export default FirstFurnitureCard;
