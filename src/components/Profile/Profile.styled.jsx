import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 350px;
  margin: 50px auto;
  padding: 20px;

  border-radius: 8px;
  box-shadow: -2px -2px 5px var(--white), 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Avatar = styled.img`
  display: block;
  width: 150px;
  margin-bottom: 30px;

  border-radius: 50%;
  box-shadow: inset -2px -2px 5px var(--white),
    inset 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Username = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: var(--accent);
`;

export const UserInfo = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: var(--primary);
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatsItem = styled.li`
  padding: 10px;
  text-align: center;
  flex-basis: calc(100% / 3);

  border-radius: 8px;
  box-shadow: inset -2px -2px 5px var(--white),
    inset 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 7px;
  font-weight: 500;
  color: var(--primary);
`;

export const Quantity = styled.span`
  display: block;
  font-weight: 500;
  color: var(--accent);
`;
