import Link from "next/link"
import classes from "./button.module.css"

export default function Button(props) {
    return (
        <Link href={props.link} >
            <div className={classes.btn}>{props.children}</div>
        </Link>
    )
} 