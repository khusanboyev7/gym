import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/* ================= TYPES ================= */

type MembershipType = "daily" | "monthly" | "yearly" | null;
type PaymentMethod = "cash" | "card" | "online" | null;

/* ================= STYLES ================= */

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 24px;
`;

const Card = styled.div`
  background: linear-gradient(180deg, #0f172a, #0b1220);
  border: 1px solid #1f2937;
  border-radius: 18px;
  padding: 28px;
  color: #e5e7eb;
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 800;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #94a3b8;
`;

/* ===== STEPS ===== */

const Steps = styled.div`
  display: flex;
  gap: 16px;
  margin: 28px 0;
`;

const StepItem = styled.div<{ active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: ${({ active }) => (active ? 1 : 0.4)};
`;

const StepCircle = styled.div<{ active: boolean }>`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#3b82f6" : "#1f2937")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
`;

const StepLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

/* ===== FORM ===== */

const SectionTitle = styled.h3`
  margin-bottom: 18px;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #020617;
  border: 1px dashed #334155;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  margin-bottom: 12px;
`;

const UploadBtn = styled.label`
  cursor: pointer;
  font-size: 13px;
  color: #60a5fa;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 13px;
  color: #94a3b8;
`;

const Input = styled.input`
  background: #020617;
  border: 1px solid #1f2937;
  border-radius: 10px;
  padding: 12px;
  color: #e5e7eb;
`;

/* ===== OPTIONS ===== */

const Option = styled.button<{ active?: boolean }>`
  padding: 16px;
  border-radius: 14px;
  border: 1px solid #1f2937;
  background: ${({ active }) => (active ? "#3b82f6" : "#020617")};
  color: #e5e7eb;
  font-weight: 700;
  cursor: pointer;
  text-align: left;
`;

/* ===== ACTIONS ===== */

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 12px 22px;
  border-radius: 12px;
  border: ${({ primary }) => (primary ? "none" : "1px solid #334155")};
  background: ${({ primary }) => (primary ? "#3b82f6" : "transparent")};
  color: #e5e7eb;
  font-weight: 800;
  cursor: pointer;
`;

/* ===== SUMMARY ===== */

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
`;

const Total = styled.div`
  margin-top: 18px;
  font-size: 24px;
  font-weight: 900;
  color: #3b82f6;
  text-align: right;
`;

/* ================= COMPONENT ================= */

export default function CreateMember() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [membership, setMembership] = useState<MembershipType>(null);
  const [payment, setPayment] = useState<PaymentMethod>(null);

  const prices = {
    daily: 10,
    monthly: 50,
    yearly: 500,
  };

  const total = membership ? prices[membership] + 25 : 25;

  return (
    <Wrapper>
      {/* LEFT */}
      <Card>
        <Header>
          <Title>Create New Member</Title>
          <Subtitle>Register a new athlete to the gym system</Subtitle>
        </Header>

        {/* STEPS */}
        <Steps>
          <StepItem active={step === 1}>
            <StepCircle active={step >= 1}>1</StepCircle>
            <StepLabel>Personal Details</StepLabel>
          </StepItem>

          <StepItem active={step === 2}>
            <StepCircle active={step >= 2}>2</StepCircle>
            <StepLabel>Membership</StepLabel>
          </StepItem>

          <StepItem active={step === 3}>
            <StepCircle active={step >= 3}>3</StepCircle>
            <StepLabel>Payment</StepLabel>
          </StepItem>
        </Steps>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <SectionTitle>Personal Information</SectionTitle>

            <AvatarWrapper>
              <Avatar>👤</Avatar>
              <UploadBtn>
                Upload Profile Photo
                <input type="file" hidden />
              </UploadBtn>
            </AvatarWrapper>

            <Grid>
              <Group>
                <Label>Full Name</Label>
                <Input placeholder="John Doe" />
              </Group>
              <Group>
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
              </Group>
              <Group>
                <Label>Phone</Label>
                <Input placeholder="+1 555 000 000" />
              </Group>
              <Group>
                <Label>Date of Birth</Label>
                <Input type="date" />
              </Group>
              <Group style={{ gridColumn: "span 2" }}>
                <Label>Emergency Contact</Label>
                <Input placeholder="Name & phone number" />
              </Group>
            </Grid>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <SectionTitle>Select Membership</SectionTitle>
            <Grid>
              <Option
                active={membership === "daily"}
                onClick={() => setMembership("daily")}
              >
                Daily Pass — $10
              </Option>
              <Option
                active={membership === "monthly"}
                onClick={() => setMembership("monthly")}
              >
                Monthly Membership — $50
              </Option>
              <Option
                active={membership === "yearly"}
                onClick={() => setMembership("yearly")}
              >
                Yearly Membership — $500
              </Option>
            </Grid>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <SectionTitle>Payment Method</SectionTitle>
            <Grid>
              <Option
                active={payment === "cash"}
                onClick={() => setPayment("cash")}
              >
                💵 Cash Payment
              </Option>
              <Option
                active={payment === "card"}
                onClick={() => setPayment("card")}
              >
                💳 Credit / Debit Card
              </Option>
              <Option
                active={payment === "online"}
                onClick={() => setPayment("online")}
              >
                🌐 Online Payment
              </Option>
            </Grid>
          </>
        )}

        <Actions>
          <Button
            onClick={() =>
              step === 1 ? navigate("/manager/dashboard") : setStep(step - 1)
            }
          >
            Cancel
          </Button>

          <Button primary onClick={() => step < 3 && setStep(step + 1)}>
            {step === 3 ? "Complete Registration" : "Next Step →"}
          </Button>
        </Actions>
      </Card>

      {/* RIGHT */}
      <Card>
        <SectionTitle>Membership Summary</SectionTitle>

        <SummaryRow>
          <span>Plan</span>
          <span>{membership ?? "Not selected"}</span>
        </SummaryRow>

        <SummaryRow>
          <span>Base Price</span>
          <span>${membership ? prices[membership] : 0}</span>
        </SummaryRow>

        <SummaryRow>
          <span>Registration Fee</span>
          <span>$25</span>
        </SummaryRow>

        <Total>${total}</Total>
      </Card>
    </Wrapper>
  );
}
