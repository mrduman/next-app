import Link from "next/link"

export default function EventItem(props) {

    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString("de-DE", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const exploreLink = `/events/${id}`
    const formattedAddress = location.replace(",", "\n");

    return (
        <li>
            <img src={"/" + image} alt={title} />
            <div>
                <h2>
                    {title}
                </h2>
                <time>
                    {humanReadableDate}
                </time>
                <address>
                    {formattedAddress}
                </address>
                <div>
                    <Link href={exploreLink}> Explore Event</Link>
                </div>
            </div>
        </li>
    );
}