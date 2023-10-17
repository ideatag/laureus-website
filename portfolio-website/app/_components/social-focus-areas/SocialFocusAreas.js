import "./SocialFocusAreas.css";
import SocialFocusAreasCard from "./SocialFocusAreasCard";
import { data } from "./socialFocusAreasData";

const SocialFocusAreas = () => (
  <div className="social-areas-container wrapper-container">
    <h1 className="social-areas-title">gesellschaftlichen Schwerpunkte</h1>
    <div className="social-focus-container">
      {data.map((item) => (
        <SocialFocusAreasCard key={item.title} area={item} />
      ))}
    </div>
  </div>
);

export default SocialFocusAreas;
