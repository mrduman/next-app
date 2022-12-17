import { getAllEvents } from "../../dummy-data";
import EventList from "../../componenst/events/event-list";
import { Fragment } from "react";
import EventsSearch from "../../componenst/events/event-search";
import { useRouter } from "next/router";

export default function AllEventsPage() {

    const events = getAllEvents();
    const router = useRouter();

    function findEventHandler(year, month) {
        const fullPath = `/events/${year}/${month}/`;

        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </Fragment>
    )
}