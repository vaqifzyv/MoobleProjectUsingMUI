import { Button } from "@mui/material";

function BottomRightSide() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Button
        variant="text"
        sx={{
          padding: "10px 20px",
          borderRadius: "25px",
          color: "rgba(251, 146, 60)",
          textDecoration: "underline",
          fontFamily: "Poppins",
          "&:hover": {
            backgroundColor: "rgba(251, 190, 60,0.2)",
            transition: "background-color 0.3s ",
          },
        }}
      >
        Sign In
      </Button>
      <Button
        variant="contained"
        sx={{
          padding: "10px 20px",
          borderRadius: "25px",
          backgroundColor: "rgba(251, 146, 60)",
          fontFamily: "Poppins",
          "&:hover": {
            backgroundColor: "rgba(251, 190, 60)",
            transition: "background-color 0.3s ",
          },
        }}
      >
        Sign Up
      </Button>
    </div>
  );
}

export default BottomRightSide;
