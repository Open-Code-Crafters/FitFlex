import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ExerciseCard from "./components/ExerciseCard";
import { useState } from "react";
export default function Root() {
  const [arr,setArr] = useState(["btn 1", "btn 2", "btn 3", "btn 4", "btn 5", "btn 6", "btn 7", "btn 8", "btn 9"]);
  const handleDelete=(name)=>{
      setArr(arr.filter((ele)=>ele!=name))
  }
  
  return (
    <>
      <FontAwesomeIcon icon={faHome} />
      Website for fitness
      <br />
      <Grid container spacing={3 } >
          {arr.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Paper>
                {/* <Button variant="contained" color="primary">{item}</Button> */}
                <ExerciseCard name={item} index={index} handleDelete={handleDelete}/>
              </Paper>
            </Grid>
          ))}
      </Grid>
      <br />

      <Grid container>
        <Grid>

        </Grid>
      </Grid>
    </>
  );
}
