import { useContext } from "react";
import { mainContext } from "../store/MainContext";
import styles from "../styles/Home.module.css";
function HomePage() {
  const allCtx = useContext(mainContext);

  const handleAdd = () => { 
    let all = [...allCtx.all]
    all.splice(4,0,"Heitor")
    allCtx.setAll(all)
  }
  
  const handleDelete = (id) => {
    let all = [...allCtx.all]
    all.splice(id, 1)
    allCtx.setAll(all)
    
  }

  return (
    <section className={styles.container}>
      <h1>This is a testing app</h1>
      <div className={styles.subcontainer}>
        {allCtx.all.map((element,idx) => {
          return (
            <div onClick={handleDelete.bind(null,idx)} key={element} className={styles.div}>
              <h1>{element}</h1>
            </div>
          );
        })}
      </div>
      <button onClick={handleAdd}>Add new div</button>
    </section>
  );
}

export default HomePage;
