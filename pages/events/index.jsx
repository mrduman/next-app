import { getAllEvents } from "../../dummy-data";
import EventList from "../../componenst/events/event-list";


export default function AllEventsPage() {

    const events = getAllEvents();
    return (
        <EventList items={events} />
    )
}