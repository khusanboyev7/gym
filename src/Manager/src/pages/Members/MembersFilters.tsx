import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  background: linear-gradient(180deg, #0b1220, #020617);
  border-radius: 14px;
  border: 1px solid #1f2937;
`;

const Search = styled.div`
  flex: 1;
  position: relative;

  input {
    width: 100%;
    padding: 10px 14px 10px 38px;
    border-radius: 10px;
    border: 1px solid #1f2937;
    background: #020617;
    color: #fff;
    font-size: 14px;
  }

  &::before {
    content: "🔍";
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    opacity: 0.6;
  }
`;

const Select = styled.select`
  padding: 10px 14px;
  background: #020617;
  border: 1px solid #1f2937;
  border-radius: 10px;
  color: #e5e7eb;
  font-size: 13px;
`;

const Clear = styled.button`
  background: none;
  border: none;
  color: #3b82f6;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

const MembersFilters = () => {
  return (
    <Bar>
      <Search>
        <input placeholder="Search by name, email, or member ID" />
      </Search>
      <Select>
        <option>Plan: All Plans</option>
      </Select>
      <Select>
        <option>Status: Active</option>
      </Select>
      <Select>
        <option>Last 30 Days</option>
      </Select>
      <Clear>✕ Clear Filters</Clear>
    </Bar>
  );
};

export default MembersFilters;
