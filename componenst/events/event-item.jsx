import Link from "next/link"
import classes from "./event-item.module.css"

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
        <li className={classes.item}>
            <img src={"/" + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>
                        {title}
                    </h2>
                    <time className={classes.date}>
                        {humanReadableDate}
                    </time>
                    <div className={classes.address}>
                        <address>
                            {formattedAddress}
                        </address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link href={exploreLink}> Explore Event</Link>
                </div>
            </div>
        </li>
    );
}