import Link from "next/link"
import classes from "./event-item.module.css"
import Button from "../ui/button.jsx"
import AddressIcon from "../icons/address-icon"
import ArrowRightIcon from "../icons/arrow-right-icon"
import DateIcon from "../icons/date-icon"



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
                        <DateIcon />
                        {humanReadableDate}
                    </time>
                    <div className={classes.address}>
                        <div> <AddressIcon /></div>
                        <address>
                            {formattedAddress}
                        </address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Evenet</span>
                        <span className={classes.icon}> <ArrowRightIcon /> </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}