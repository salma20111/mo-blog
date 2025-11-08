import Link from "next/link";
import NavLink from "./NavLink";
import { NAV_DATA } from "@/data/nav-link";
import classes from "./NavBar.module.css"

export default function NavBar(){
    return (
    <header className={classes["header"]}>
        <h1>
            <Link href="/">Mo Blog</Link>
        </h1>

    <nav>
        <ul className={classes["links"]}>
          {NAV_DATA.map((link,i) => {
            const {href, text} = link;

            return <NavLink key={i} href={href} text={text} />
          })}
        </ul>
    </nav>
    </header>
    );
}