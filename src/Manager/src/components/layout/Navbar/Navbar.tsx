import styled from "styled-components";

const Container = styled.header`
  height: 72px;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #ffffff; 
  font-size: 20px;
  font-weight: 700;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 320px;

  input {
    width: 100%;
    padding: 10px 40px 10px 36px; 
    border-radius: ${({ theme }) => theme.radius.md};
    border: none;
    background-color: ${({ theme }) => theme.colors.sidebar};
    color: #f9f9f9; 
    font-size: 14px;

    &::placeholder {
      color: #f0f0f0; 
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border: 2px solid #ffffff; 
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    left: 23px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 8px;
    height: 2px;
    background-color: #ffffff; 
    transform-origin: left center;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ffffff; 
  font-weight: 600;
  font-size: 14px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const Navbar = () => {
  return (
    <Container>
      <Title>Gym Manager Dashboard</Title>

      <SearchWrapper>
        <input placeholder="Search members, classes or transactions..." />
      </SearchWrapper>

      <Profile>
        Alex Rivers (Manager)
        <Avatar src="/assets/images/avatar.png" alt="Alex Rivers" />
      </Profile>
    </Container>
  );
};

export default Navbar;
