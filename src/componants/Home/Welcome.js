 import classes from "./Welcome.module.css";
 
 
 const Welcome = () => {

    console.log(classes["welcome"]);
    return(
           <section className={classes["welcome"]}>
             <h1 className={classes["title"]}>MO blog</h1>
             <p className={classes["info"]}>helllo this blog will teach you web programing from zero </p>
           </section>
           );
};

export default Welcome;