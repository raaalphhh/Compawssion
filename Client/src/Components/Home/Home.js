import React from "react";
import HomeLandingContainer from "./HomeLandingContainer";
import PlanningToAdoptAPet from "./PlanningToAdoptAPet";
import CardBelowHome from "./CardBelowHome";
import Meetyourfurryfriend from "./MeetYourFurryFriend";

const Home = (props) => {
  return (
    <>
      <CardBelowHome/>
      <HomeLandingContainer description={props.description} />
      <PlanningToAdoptAPet />
      <Meetyourfurryfriend />
    </>
  );
};

export default Home;


/*
const Home = (props) => {
  return (
    <>
      <HomeLandingContainer description={props.description} />
      
      <PlanningToAdoptAPet />
    </>
  );
};
*/