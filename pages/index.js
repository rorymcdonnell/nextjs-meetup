import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m3",
    title: "First Meetup",
    image:
      "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_960_720.jpg",
    address: "Houses of parliament",
    description: "protest government",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_960_720.jpg",
    address: "Houses of parliament",
    description: "protest government again",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export async function getStaticProps() {}

export default HomePage;
