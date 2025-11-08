import classes from "./DiscriptionCard.module.css"

export default function DicriptionCard({title, description}) {
     return ( 
             <div className={classes["card"]}>
                <h3 className={classes["title"]}>{title}</h3>
                <p className={classes["descripton"]}>{description}</p>
             </div>

               )
}