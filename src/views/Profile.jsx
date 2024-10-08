// this component is temperary and will be replaced with the actual workout and exercise components


const Profile = () => {
  // Add your code here to fetch user progress data
  const userProgress = 75; // Example progress value

  return (
    <div>
      <h1>Profile Dashboard</h1>
      <div>
        <div style={{ width: '100%', height: '20px', backgroundColor: '#f2f2f2' }}>
          <div style={{ width: `${userProgress}%`, height: '100%', backgroundColor: '#007bff' }}></div>
        </div>
        <span>{`${userProgress}%`}</span>
      </div>
    </div>
  );
};

export default Profile;
