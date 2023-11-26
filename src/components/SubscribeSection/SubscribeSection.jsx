import "./subscribesection.css";
import SubscribeTop from "./SubscribeTop/SubscribeTop";
import SubscribeBottom from "./SubscribeBottom/SubscribeBottom";

function SubscribeSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        margin: "0px auto",
      }}
    >
      <SubscribeTop />
      <SubscribeBottom />
    </div>
  );
}

export default SubscribeSection;
