import styled from "styled-components";

const Card = styled.div`
  background: #111418;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

type Props = {
  title: string;
  value: string | number;
  change?: string;
};

const StatCard = ({ title, value, change }: Props) => (
  <Card>
    <p>{title}</p>
    <h2>{value}</h2>
    {change && <span>{change}</span>}
  </Card>
);

export default StatCard;
