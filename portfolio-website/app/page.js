import DonationsBanner from "./_components/donations-banner/DonationsBanner";
import LatestLaureusNews from "./_components/latest-laureus-news/LatestLaureusNews";
import BannerSubheader from "./_components/banner-subheader/BannerSubheader";
import SocialFocusAreas from "./_components/social-focus-areas/SocialFocusAreas";
import Header from "./_components/header/Header";
import Dialog from "./_components/subscribe-email-dialog/subscribe-email-dialog";

const Home = () => {
  return (
    <main>
      <Dialog />
      <Header />
      <BannerSubheader />
      <SocialFocusAreas />
      <DonationsBanner />
      {/* <LatestLaureusNews/> */}
    </main>
  );
};

export default Home;
