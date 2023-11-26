import Typography from "@mui/material/Typography";
import "./logos.css";

function Logos() {
  return (
    <div
      style={{
        width: "60%",
        margin: "0px auto",
        marginTop: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body1"
        color="#333"
        style={{ fontSize: "25px", fontWeight: 700, opacity: 0.6 }}
      >
        Lowe’s
      </Typography>

      <Typography
        variant="body1"
        color="#333"
        style={{ fontSize: "25px", fontWeight: 700, opacity: 0.6 }}
      >
        DeWalt
      </Typography>
      <Typography
        variant="body1"
        color="#333"
        style={{ fontSize: "25px", fontWeight: 700, opacity: 0.6 }}
      >
        Home Depot
      </Typography>
      <Typography
        variant="body1"
        color="#333"
        style={{ fontSize: "25px", fontWeight: 700, opacity: 0.6 }}
      >
        IKEA
      </Typography>
      <Typography
        variant="body1"
        color="#333"
        style={{ fontSize: "25px", fontWeight: 700, opacity: 0.6 }}
      >
        Makita
      </Typography>
      <Typography
        variant="body1"
        color="#333"
        style={{ fontSize: "25px", fontWeight: 700, opacity: 0.6 }}
      >
        3M
      </Typography>
    </div>
  );
}

export default Logos;
