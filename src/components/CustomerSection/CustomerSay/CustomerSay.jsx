import React from "react";
import Draggable from "react-draggable";
import "./customersay.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

function CustomerSay() {
  return (
    <div className="customerSayContainer">
      <Draggable axis="x" bounds="parent">
        <div className="box box1">
          <div className="quoteIcon">
            <FormatQuoteIcon sx={{ width: "70px", height: "70px" }} />
          </div>

          <div className="customerSayText" style={{ marginBottom: "24px" }}>
            <Typography
              variant="p"
              color="#505050"
              sx={{
                fontSize: "16px",
                fontFamily: "Inter",
              }}
            >
              I am genuinely impressed with the quality of the recliner chair I
              bought. The comfort it provides is beyond compare, and the design
              perfectly complements our living room. What sets apart is not just
              their exceptional products but also their commitment to customer
              satisfaction. They went the extra mile to ensure I was completely
              satisfied with my purchase, which is a rarity in today's market.
            </Typography>
          </div>
          <div
            className="customerSayBottom"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              className="customerSayBottomLeft"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Avatar src="src/assets/ComfortVictor.jfif" />
              <Typography
                variant="p"
                color="#121212"
                sx={{ fontFamily: "Rubik", fontSize: "18px" }}
              >
                Victor
              </Typography>
            </div>
            <div className="customerSayBottomRight">
              <Rating name="read-only" value={5} readOnly />
            </div>
          </div>
        </div>
      </Draggable>

      <Draggable axis="x" bounds="parent">
        <div className="box box2">
          <div className="quoteIcon">
            <FormatQuoteIcon sx={{ width: "70px", height: "70px" }} />
          </div>

          <div className="customerSayText" style={{ marginBottom: "24px" }}>
            <Typography
              variant="p"
              color="#505050"
              sx={{
                fontSize: "16px",
                fontFamily: "Inter",
              }}
            >
              I recently purchased a beautiful dining table and it has
              completely transformed our dining area. The craftsmanship and
              attention to detail are truly remarkable. The table is not only a
              functional piece of furniture but also a work of art that our
              family and guests admire. The process from selection to delivery
              was smooth, and the customer support team was incredibly helpful
              throughout.
            </Typography>
          </div>
          <div
            className="customerSayBottom"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              className="customerSayBottomLeft"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Avatar src="src/assets/Roberts.jfif" />
              <Typography
                variant="p"
                color="#121212"
                sx={{ fontFamily: "Rubik", fontSize: "18px" }}
              >
                Michael Roberts
              </Typography>
            </div>
            <div className="customerSayBottomRight">
              <Rating name="read-only" value={5} readOnly />
            </div>
          </div>
        </div>
      </Draggable>

      <Draggable axis="x" bounds="parent">
        <div className="box box3">
          <div className="quoteIcon">
            <FormatQuoteIcon sx={{ width: "70px", height: "70px" }} />
          </div>

          <div className="customerSayText" style={{ marginBottom: "24px" }}>
            <Typography
              variant="p"
              color="#505050"
              sx={{
                fontSize: "16px",
                fontFamily: "Inter",
              }}
            >
              My experience has been consistently outstanding. I've furnished my
              entire home with their products, and every piece has exceeded my
              expectations. From the bedroom to the home office, offers a wide
              range of stylish and well-crafted furniture. What truly sets them
              apart is their dedicated customer support.
            </Typography>
          </div>
          <div
            className="customerSayBottom"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              className="customerSayBottomLeft"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Avatar src="src/assets/Marta.jfif" />
              <Typography
                variant="p"
                color="#121212"
                sx={{ fontFamily: "Rubik", fontSize: "18px" }}
              >
                Michael Roberts
              </Typography>
            </div>
            <div className="customerSayBottomRight">
              <Rating name="read-only" value={4} readOnly />
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default CustomerSay;
