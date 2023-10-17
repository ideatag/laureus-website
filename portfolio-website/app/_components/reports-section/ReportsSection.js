import ReportsSectionCard from "./ReportsSectionCard";
import "./ReportsSection.css";
import { data } from "./reportsSectionData";

const ReportsSection = () => (
  <div className="reports-section-container">
    <h3>Jahresberichte</h3>
    <div>
      {data.map((item) => (
        <ReportsSectionCard key={item.title} area={item} />
      ))}
    </div>
  </div>
);

export default ReportsSection;
