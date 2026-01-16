import StatCard from "../../components/ui/StatCard/StatCard";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Dashboard = () => {
  return (
    <>
      <Grid>
        <StatCard title="Daily Attendance" value="142 / 200" change="+12%" />
        <StatCard title="New Members This Week" value="24" change="+5%" />
        <StatCard title="Pending Payments" value="$3,450" change="-8%" />
      </Grid>
    </>
  );
};

export default Dashboard;
