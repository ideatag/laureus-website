import "./AmbassadorCard.css";

const AmbassadorCard = ({
  backgroundImage,
  ambassadorFirstName,
  ambassadorSecondName,
  sport,
  countryName,
  flagImage,
}) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(0deg,#00153a,rgba(0,21,58,0)), url(${backgroundImage})`,
  };
  return (
    <div className="ambassador-card-container">
      <div className="ambassador-card" style={cardStyle}/>
      <div className="ambassador-card-content">
        <h3 className="label-ambassador">AMBASSADOR</h3>
        <h2 className="first-name-ambassador">{ambassadorFirstName}</h2>
        <h2 className="second-name-ambassador">{ambassadorSecondName}</h2>
        <h3 className="sport-category">{sport}</h3>
        <div className="country-data">
          <img src={flagImage} alt="Country Flag" className="flag-image" />
          <p>{countryName}</p>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorCard;
