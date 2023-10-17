import "./DonationsPageHeader.css";
import { donationsPageHeaderData } from "./donationsPageHeaderData";
import DonationsPageHeaderCard from "./DonationsPageHeaderCard";
import DonationsForm from "../donations-form/DonationsForm";

const DonationsPageHeader = () => (
  <div className="donations-page-container">
    <header className="donations-page-header">
      <h3 className="donations-page-header-main-title">
        Charity Is An Act Of A Soft Heart
      </h3>
      <h5 className="donations-page-header-sub-title">
        Wir haben in den letzten 20 Jahren mehr als 6 Millionen benachteiligten
        Kindern und Jugendlichen aus aller Welt geholfen.
      </h5>
      <div className="donations-page-header-social-media-section">
        {donationsPageHeaderData.map((item) => (
          <DonationsPageHeaderCard key={item.title} area={item} />
        ))}
      </div>
    </header>
    <DonationsForm />
  </div>
);

export default DonationsPageHeader;
