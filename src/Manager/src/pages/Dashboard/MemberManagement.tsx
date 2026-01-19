import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  background: linear-gradient(180deg, #0f1318, #0b0e13);
  border-radius: 20px;
  border: 1px solid #1f2937;
  padding: 24px;
`;

// Header, Table, Row, Cell, Badge va boshqa styled-components avvalgidek
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;
const Controls = styled.div`
  display: flex;
  gap: 10px;
`;
const Select = styled.select`
  background: #111827;
  border: 1px solid #1f2937;
  color: #fff;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 13px;
`;
const Table = styled.div`
  width: 100%;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 1.6fr 1.2fr 1fr 1.4fr;
  align-items: center;
  padding: 16px 12px;
  border-bottom: 1px solid #1f2937;
`;
const HeadRow = styled(Row)`
  padding: 12px;
  font-size: 12px;
  color: #64748b;
  text-transform: uppercase;
`;
const Cell = styled.div`
  font-size: 14px;
  color: #e5e7eb;
`;
const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Avatar = styled.div<{ bg: string }>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
const Name = styled.div`
  font-weight: 600;
  color: #fff;
`;
const Email = styled.div`
  font-size: 12px;
  color: #64748b;
`;
const Badge = styled.span<{ type: string }>`
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  width: fit-content;
  ${({ type }) =>
    type === "active" && "background: rgba(34,197,94,.15); color:#22c55e;"}
  ${({ type }) =>
    type === "due" && "background: rgba(251,191,36,.15); color:#fbbf24;"}
  ${({ type }) =>
    type === "overdue" && "background: rgba(239,68,68,.15); color:#ef4444;"}
`;
const Days = styled.span<{ negative?: boolean }>`
  color: ${({ negative }) => (negative ? "#ef4444" : "#fff")};
  font-weight: 600;
`;
const ActionBtn = styled.button<{ primary?: boolean }>`
  background: ${({ primary }) => (primary ? "#2563eb" : "#111827")};
  border: 1px solid #1f2937;
  color: #fff;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  font-size: 12px;
  color: #64748b;
`;
const Pagination = styled.div`
  display: flex;
  gap: 10px;
`;
const PageBtn = styled.button`
  background: #111827;
  border: 1px solid #1f2937;
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
`;

const members = [
  {
    name: "Marcus Wright",
    email: "m.wright@example.com",
    plan: "Premium Monthly",
    status: "active",
    days: 142,
    initials: "MW",
    color: "#2563eb",
  },
  {
    name: "Sarah Kincaid",
    email: "sarah.k@gmail.com",
    plan: "Annual Pass",
    status: "due",
    days: 4,
    initials: "SK",
    color: "#7c3aed",
  },
  {
    name: "James Thompson",
    email: "jt.fitness@outlook.com",
    plan: "Basic Tier",
    status: "active",
    days: 28,
    initials: "JT",
    color: "#2563eb",
  },
  {
    name: "Elena Portillo",
    email: "portillo.e@workmail.com",
    plan: "Premium Monthly",
    status: "overdue",
    days: -2,
    initials: "EP",
    color: "#dc2626",
  },
];

const MemberManagement = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <Title>Member Management</Title>
        <Controls>
          <Select>
            <option>All Members</option>
            <option>Active</option>
            <option>Due Soon</option>
            <option>Overdue</option>
          </Select>
        </Controls>
      </Header>

      <Table>
        <HeadRow>
          <Cell>Member Name</Cell>
          <Cell>Membership Type</Cell>
          <Cell>Status</Cell>
          <Cell>Days Left</Cell>
          <Cell>Actions</Cell>
        </HeadRow>

        {members.map((m) => (
          <Row key={m.email}>
            <Member>
              <Avatar bg={m.color}>{m.initials}</Avatar>
              <div>
                <Name>{m.name}</Name>
                <Email>{m.email}</Email>
              </div>
            </Member>
            <Cell>{m.plan}</Cell>
            <Cell>
              <Badge type={m.status}>{m.status.toUpperCase()}</Badge>
            </Cell>
            <Cell>
              <Days negative={m.days < 0}>{m.days}</Days>
            </Cell>
            <Cell>
              {m.status === "active" ? (
                <ActionBtn
                  onClick={() => navigate(`/members/details/${m.email}`)}
                >
                  Details
                </ActionBtn>
              ) : (
                <ActionBtn
                  primary
                  onClick={() => navigate(`/members/payment/${m.email}`)}
                >
                  Receive Payment
                </ActionBtn>
              )}
            </Cell>
          </Row>
        ))}
      </Table>

      <Footer>
        <span>Showing 1–4 of 1,248 members</span>
        <Pagination>
          <PageBtn>Previous</PageBtn>
          <PageBtn>Next</PageBtn>
        </Pagination>
      </Footer>
    </Wrapper>
  );
};

export default MemberManagement;
