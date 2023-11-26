import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

function SatisfactionLeft() {
  return (
    <div className="SatisfactionLeft">
      <div className="SatisfactionLeftTop">
        <Typography
          variant="h4"
          color="#FFF"
          sx={{
            fontFamily: "Inter",
            fontSize: "50px",
            width: "70%",
            marginBottom: "30px",
          }}
        >
          Our Dedication to Your Satisfaction
        </Typography>
        <Typography
          variant="p"
          color="#fff"
          sx={{ fontFamily: "Inter", fontSize: "16px" }}
        >
          , we take pride in our unwavering commitment to quality and customer
          satisfaction. With a track record of excellence, we provide you with
          the finest furniture and a service you can trust.
        </Typography>
      </div>
      <div
        className="SatisfactionLeftBottom"
        style={{ display: "flex", marginTop: "70px", gap: "80px" }}
      >
        <div
          className="SatisfactionLeftBottomFirstRating"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <div className="Ratings">
            <Rating name="read-only" value={5} readOnly />
          </div>
          <Typography
            variant="p"
            color="#fff"
            sx={{ fontSize: "18px", fontFamily: "Inter" }}
          >
            <Typography variant="p" color="#fff" sx={{ fontWeight: 700 }}>
              4.9
            </Typography>{" "}
            / 5 rating
          </Typography>{" "}
          <div className="SatisfactionLeftBottomRatingText">
            <Typography
              variant="p"
              color="#fff"
              sx={{ fontSize: "18px", fontFamily: "Inter" }}
            >
              Qualitity
            </Typography>
          </div>
        </div>
        <div
          className="SatisfactionLeftBottomSecondRating"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <div className="Ratings">
            <Rating name="read-only" value={5} readOnly />;
          </div>
          <Typography
            variant="p"
            color="#fff"
            sx={{ fontSize: "18px", fontFamily: "Inter" }}
          >
            <Typography variant="p" color="#fff" sx={{ fontWeight: 700 }}>
              4.8
            </Typography>{" "}
            / 5 rating
          </Typography>{" "}
          <div className="SatisfactionLeftBottomRatingText">
            <Typography
              variant="p"
              color="#fff"
              sx={{ fontSize: "18px", fontFamily: "Inter" }}
            >
              Customer Satisfaction
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SatisfactionLeft;
