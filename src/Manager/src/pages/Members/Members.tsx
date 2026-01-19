import styled from "styled-components";
import MembersFilters from "./MembersFilters";
import MembersTable from "./MembersTable";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button<{ primary?: boolean }>`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #1f2937;
  background: ${({ primary }) => (primary ? "#3b82f6" : "#0b1220")};
  color: #fff;
  cursor: pointer;
`;

const Members = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <h1>Member Management</h1>
        <Btn primary onClick={() => navigate("/manager/members/create")}>
          + Add New Member
        </Btn>
      </Header>

      <MembersFilters />
      <MembersTable />
    </Wrapper>
  );
};

export default Members;
