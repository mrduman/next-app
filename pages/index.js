import EventList from "../componenst/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
import EventsSearch from "./events";
import { Fragment } from "react";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <Fragment>
      <EventsSearch />
    </Fragment>
  );
}
