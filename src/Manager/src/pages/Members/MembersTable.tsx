import styled from "styled-components";

const Card = styled.div`
  background: linear-gradient(180deg, #0b1220, #020617);
  border: 1px solid #1f2937;
  border-radius: 18px;
  overflow: hidden;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 2.6fr 1.6fr 1.4fr 1.2fr 1.6fr 40px;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #1f2937;
`;

const Head = styled(Row)`
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

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;

const Name = styled.div`
  font-weight: 600;
`;

const Email = styled.div`
  font-size: 12px;
  color: #94a3b8;
`;

const Status = styled.span<{ type: string }>`
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;

  ${({ type }) =>
    type === "active" && `background:rgba(34,197,94,.15);color:#22c55e;`}
  ${({ type }) =>
    type === "expired" && `background:rgba(239,68,68,.15);color:#ef4444;`}
  ${({ type }) =>
    type === "pending" && `background:rgba(251,191,36,.15);color:#fbbf24;`}
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 16px;
  font-size: 13px;
  color: #94a3b8;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const PageBtn = styled.button<{ active?: boolean }>`
  min-width: 32px;
  height: 32px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid #1f2937;
  background: ${({ active }) => (active ? "#3b82f6" : "#020617")};
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

const ArrowBtn = styled(PageBtn)`
  font-weight: 700;
`;

const members = [
  {
    name: "Alexander Wright",
    email: "alex.wright@email.com",
    plan: "Pro Annual",
    join: "Jan 12, 2023",
    status: "active",
    last: "Today, 08:45 AM",
    avatar: "/assets/images/avatar.png",
  },
  {
    name: "Sophia Chen",
    email: "sophia.c@email.com",
    plan: "Basic Monthly",
    join: "Mar 05, 2024",
    status: "active",
    last: "Yesterday, 06:12 PM",
    avatar: "/assets/images/avatar.png",
  },
  {
    name: "Marcus Jonson",
    email: "m.jonson@email.com",
    plan: "Elite Annual",
    join: "Nov 22, 2022",
    status: "expired",
    last: "2 weeks ago",
    avatar: "/assets/images/avatar.png",
  },
  {
    name: "Elena Rose",
    email: "elena.rose@email.com",
    plan: "Student Discount",
    join: "May 10, 2024",
    status: "active",
    last: "Today, 11:20 AM",
    avatar: "/assets/images/avatar.png",
  },
  {
    name: "David Miller",
    email: "miller.d@email.com",
    plan: "Pro Annual",
    join: "Jun 15, 2023",
    status: "pending",
    last: "4 days ago",
    avatar: "/assets/images/avatar.png",
  },
];

const MembersTable = () => {
  return (
    <Card>
      <Head>
        <Cell>Member</Cell>
        <Cell>Membership Plan</Cell>
        <Cell>Join Date</Cell>
        <Cell>Status</Cell>
        <Cell>Last Check-In</Cell>
        <Cell />
      </Head>

      {members.map((m) => (
        <Row key={m.email}>
          <Member>
            <Avatar src={m.avatar} />
            <div>
              <Name>{m.name}</Name>
              <Email>{m.email}</Email>
            </div>
          </Member>

          <Cell>{m.plan}</Cell>
          <Cell>{m.join}</Cell>
          <Cell>
            <Status type={m.status}>{m.status}</Status>
          </Cell>
          <Cell>{m.last}</Cell>
          <Cell>⋮</Cell>
        </Row>
      ))}

      <Footer>
        <span>Showing 1 to 10 of 1,248 members</span>
        <Pagination>
          <ArrowBtn>{"<"}</ArrowBtn>
          <PageBtn active>1</PageBtn>
          <PageBtn>2</PageBtn>
          <PageBtn>3</PageBtn>
          <PageBtn>…</PageBtn>
          <PageBtn>125</PageBtn>
          <ArrowBtn>{">"}</ArrowBtn>
        </Pagination>
      </Footer>
    </Card>
  );
};

export default MembersTable;
