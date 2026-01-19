import styled from "styled-components";
import { useState } from "react";

/* =====================================================
   LAYOUT
===================================================== */

const Header = styled.header`
  height: 72px;
  padding: 0 28px;
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* =====================================================
   LEFT
===================================================== */

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
`;

/* ================= SEARCH ================= */

const SearchBox = styled.div`
  position: relative;
  width: 360px;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 14px 10px 42px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.sidebar};
  color: #e5e7eb;
  font-size: 14px;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
  }
`;

/* =====================================================
   RIGHT
===================================================== */

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

/* ================= ICON BUTTON ================= */

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.colors.sidebar};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e5e7eb;
  cursor: pointer;
  position: relative;

  &:hover {
    background: ${({ theme }) => theme.colors.card};
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 9px;
  height: 9px;
  background: #ef4444;
  border-radius: 50%;
`;

/* =====================================================
   PROFILE TRIGGER
===================================================== */

const ProfileTrigger = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const AvatarSmall = styled.div<{ image?: string }>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({ image }) =>
    image ? `url(${image}) center/cover` : "#1e293b"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #ffffff;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
`;

const Role = styled.span`
  font-size: 12px;
  color: #94a3b8;
`;

/* =====================================================
   ACCOUNT DRAWER
===================================================== */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 90;
`;

const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 420px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.card};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  padding: 28px;
  z-index: 100;
  display: flex;
  flex-direction: column;
`;

/* ================= DRAWER HEADER ================= */

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 28px;
`;

const AvatarLarge = styled.div<{ image?: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ image }) =>
    image ? `url(${image}) center/cover` : "#1e293b"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 800;
  color: #ffffff;
  position: relative;
`;

const ChangeAvatar = styled.label`
  position: absolute;
  bottom: -4px;
  right: -4px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
`;

const HiddenInput = styled.input`
  display: none;
`;

const DrawerName = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
`;

const DrawerRole = styled.div`
  font-size: 14px;
  color: #94a3b8;
`;

/* ================= INFO LIST ================= */

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const InfoItem = styled.div`
  background: ${({ theme }) => theme.colors.sidebar};
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
`;

const InfoLabel = styled.span`
  font-size: 13px;
  color: #94a3b8;
`;

const InfoValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
`;

/* ================= FOOTER ================= */

const DrawerFooter = styled.div`
  margin-top: auto;
`;

const LogoutButton = styled.button`
  width: 100%;
  padding: 14px 0;
  border-radius: 14px;
  border: none;
  background: #ef4444;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #dc2626;
  }
`;

/* =====================================================
   COMPONENT
===================================================== */

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = {
    fullName: "Alex Rivers",
    role: "Manager",
    email: "alex.rivers@gym.com",
    phone: "+1 555 342 1122",
    birthDate: "1994-08-12",
    password: "********",
    avatar: "",
  };

  return (
    <>
      <Header>
        <Left>
          <Title>Gym Manager Dashboard</Title>

          <SearchBox>
            <SearchIcon>🔍</SearchIcon>
            <SearchInput placeholder="Search members, payments, activities..." />
          </SearchBox>
        </Left>

        <Right>
          <IconButton>
            🔔
            <Badge />
          </IconButton>

          <ProfileTrigger onClick={() => setOpen(true)}>
            <AvatarSmall image={user.avatar}>
              {!user.avatar && user.fullName.charAt(0)}
            </AvatarSmall>

            <UserInfo>
              <Name>{user.fullName}</Name>
              <Role>{user.role}</Role>
            </UserInfo>
          </ProfileTrigger>
        </Right>
      </Header>

      {open && (
        <>
          <Overlay onClick={() => setOpen(false)} />

          <Drawer>
            <DrawerHeader>
              <AvatarLarge image={user.avatar}>
                {!user.avatar && user.fullName.charAt(0)}
                <ChangeAvatar>
                  ✎
                  <HiddenInput type="file" />
                </ChangeAvatar>
              </AvatarLarge>

              <div>
                <DrawerName>{user.fullName}</DrawerName>
                <DrawerRole>{user.role}</DrawerRole>
              </div>
            </DrawerHeader>

            <InfoSection>
              <InfoItem>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>{user.email}</InfoValue>
              </InfoItem>

              <InfoItem>
                <InfoLabel>Phone</InfoLabel>
                <InfoValue>{user.phone}</InfoValue>
              </InfoItem>

              <InfoItem>
                <InfoLabel>Date of Birth</InfoLabel>
                <InfoValue>{user.birthDate}</InfoValue>
              </InfoItem>

              <InfoItem>
                <InfoLabel>Password</InfoLabel>
                <InfoValue>{user.password}</InfoValue>
              </InfoItem>
            </InfoSection>

            <DrawerFooter>
              <LogoutButton>Logout</LogoutButton>
            </DrawerFooter>
          </Drawer>
        </>
      )}
    </>
  );
};

export default Navbar;
