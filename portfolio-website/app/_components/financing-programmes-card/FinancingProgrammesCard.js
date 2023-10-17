import "./FinancingProgrammesCard.css";

const FinancingProgrammesCard = ({
  backgroundImage,
  financingProgrammesTitle,
  sportNames,
  countryName,
  flagImage,
}) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const isMultipleSports = Array.isArray(sportNames);

  const hasFlag = Boolean(flagImage);

  return (
    <section className="financing-programmes-card-section">
      <div className="financing-programmes-card-container">
        <div className="financing-programmes-card" style={cardStyle} />
        <div className="financing-programmes-card-content">
          <div className="country-data-container">
            {hasFlag && (
              <img src={flagImage} alt="Country Flag" className="flag-image" />
            )}
            <p>{countryName}</p>
          </div>
          <h2 className="title-financing-programmes">{financingProgrammesTitle}</h2>
          <div className="sport-category-container">
            {isMultipleSports ? (
              sportNames.map((sportName, index) => (
                <div key={index} className="sport-category-item">
                  <img src="/images/earth.svg" alt="Category" className="sport-category-icon" />
                  <h3 className="sport-category">{sportName}</h3>
                </div>
              ))
            ) : (
              <div className="sport-category-item">
                <img src="/images/earth.svg" alt="Category" className="sport-category-icon" />
                <h3 className="sport-category">{sportNames}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

{/* <FinancingProgrammesCard
backgroundImage="/images/finance.jpg"
countryName="sport for good ciry paris"
financingProgrammesTitle="Académie Football Paris 18"
sportNames={["Football", "Education"]}
/> 
<FinancingProgrammesCard
backgroundImage="/images/finance.jpg"
countryName="usa"
flagImage="/images/flag.png"
financingProgrammesTitle="Asociación Pro Personas con Parálisis Cerebral"
sportNames="Education"
/> */}



export default FinancingProgrammesCard;