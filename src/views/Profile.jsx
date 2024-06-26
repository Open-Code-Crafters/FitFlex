// this component is temperary and will be replaced with the actual workout and exercise components

import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  progressContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  progressBar: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  progressLabel: {
    fontWeight: "bold",
  },
}));

const Profile = () => {
  const classes = useStyles();

  // Add your code here to fetch user progress data
  const userProgress = 75; // Example progress value

  return (
    <div>
      <h1 className={classes.heading}>Profile Dashboard</h1>
      <div className={classes.progressContainer}>
        <LinearProgress
          className={classes.progressBar}
          variant="determinate"
          value={userProgress}
        />
        <span className={classes.progressLabel}>{`${userProgress}%`}</span>
      </div>
    </div>
  );
};

export default Profile;
