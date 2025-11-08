import DicriptionCard from "../shared/DiscriptionCard";
import classes from "./MySkills.module.css";
import { MY_SKILLS_DATA } from "@/data/my-skills-data";


export default function MySkills() {
 return(
     
     <section className={classes["mom"]}>
       <h2>My skills</h2>
       <br/>
   {MY_SKILLS_DATA.map((skill,i) => {
    const{title,description}= skill;

    return <DicriptionCard key={i} title={title} description={description}/>
   })}
</section>)
}