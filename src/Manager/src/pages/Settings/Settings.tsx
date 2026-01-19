import styled from "styled-components";
import { useState } from "react";


const Page = styled.div`
  padding: 32px;
  max-width: 900px;
`;


const Title = styled.h1`
  font-size: 28px;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 6px;
`;

const Subtitle = styled.p`
  color: #94a3b8;
  margin-bottom: 32px;
`;


const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  padding: 24px;
  margin-bottom: 24px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 24px 0;
`;


const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: end;
  margin-bottom: 16px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #94a3b8;
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 12px 14px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.sidebar};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: #ffffff;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }
`;

const SecondaryButton = styled(Button)`
  background: #1e293b;

  &:hover {
    background: #334155;
  }
`;


const CodeRow = styled.div`
  display: flex;
  gap: 10px;
`;

const CodeInput = styled.input`
  width: 48px;
  height: 52px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.sidebar};
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;


const AvatarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #1e293b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
`;

const HiddenInput = styled.input`
  display: none;
`;


const Settings = () => {

  const [user, setUser] = useState({
    fullName: "Alex Rivers",
    email: "alex.rivers@gym.com",
    phone: "+1 555 342 1122",
    birthDate: "1994-08-12",
    password: "alex@123456", 
  });


  const [newEmail, setNewEmail] = useState("");
  const [emailStep, setEmailStep] = useState(1);
  const [emailCode, setEmailCode] = useState(["", "", "", "", "", ""]);


  const [newPhone, setNewPhone] = useState("");
  const [phoneStep, setPhoneStep] = useState(1);
  const [phoneCode, setPhoneCode] = useState(["", "", "", "", "", ""]);


  const [newPassword, setNewPassword] = useState("");


  const verifyEmailCode = () => {
    setUser({ ...user, email: newEmail });
    setEmailStep(1);
    setNewEmail("");
  };

  const verifyPhoneCode = () => {
    setUser({ ...user, phone: newPhone });
    setPhoneStep(1);
    setNewPhone("");
  };

  const changePassword = () => {
    setUser({ ...user, password: newPassword });
    setNewPassword("");
  };

  return (
    <Page>
      <Title>Account Settings</Title>
      <Subtitle>Manage your personal information and security</Subtitle>


      <Card>
        <CardTitle>Profile</CardTitle>

        <AvatarRow>
          <Avatar>{user.fullName.charAt(0)}</Avatar>

          <label>
            <Button as="span">Change Avatar</Button>
            <HiddenInput type="file" />
          </label>
        </AvatarRow>
      </Card>


      <Card>
        <CardTitle>Email Address</CardTitle>

        {emailStep === 1 && (
          <Row>
            <Field>
              <Label>Current Email</Label>
              <Input value={user.email} disabled />
            </Field>

            <SecondaryButton onClick={() => setEmailStep(2)}>
              Change
            </SecondaryButton>
          </Row>
        )}

        {emailStep === 2 && (
          <>
            <Field>
              <Label>New Email</Label>
              <Input
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </Field>

            <Divider />

            <Button onClick={() => setEmailStep(3)}>
              Send Verification Code
            </Button>
          </>
        )}

        {emailStep === 3 && (
          <>
            <Label>Enter 6-digit code sent to email</Label>

            <CodeRow>
              {emailCode.map((_, i) => (
                <CodeInput
                  key={i}
                  maxLength={1}
                  onChange={(e) => {
                    const copy = [...emailCode];
                    copy[i] = e.target.value;
                    setEmailCode(copy);
                  }}
                />
              ))}
            </CodeRow>

            <Divider />

            <Button onClick={verifyEmailCode}>Verify Email</Button>
          </>
        )}
      </Card>


      <Card>
        <CardTitle>Phone Number</CardTitle>

        {phoneStep === 1 && (
          <Row>
            <Field>
              <Label>Current Phone</Label>
              <Input value={user.phone} disabled />
            </Field>

            <SecondaryButton onClick={() => setPhoneStep(2)}>
              Change
            </SecondaryButton>
          </Row>
        )}

        {phoneStep === 2 && (
          <>
            <Field>
              <Label>New Phone</Label>
              <Input
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
              />
            </Field>

            <Divider />

            <Button onClick={() => setPhoneStep(3)}>Send SMS Code</Button>
          </>
        )}

        {phoneStep === 3 && (
          <>
            <Label>Enter SMS code</Label>

            <CodeRow>
              {phoneCode.map((_, i) => (
                <CodeInput
                  key={i}
                  maxLength={1}
                  onChange={(e) => {
                    const copy = [...phoneCode];
                    copy[i] = e.target.value;
                    setPhoneCode(copy);
                  }}
                />
              ))}
            </CodeRow>

            <Divider />

            <Button onClick={verifyPhoneCode}>Verify Phone</Button>
          </>
        )}
      </Card>


      <Card>
        <CardTitle>Password</CardTitle>

        <Field>
          <Label>Current Password</Label>
          <Input value={user.password} />
        </Field>

        <Divider />

        <Field>
          <Label>New Password</Label>
          <Input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Field>

        <Divider />

        <Button onClick={changePassword}>Change Password</Button>
      </Card>
    </Page>
  );
};

export default Settings;
