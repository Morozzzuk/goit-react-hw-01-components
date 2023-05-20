import styled from '@emotion/styled';

export const Section = styled.section`
  width: 350px;
  margin: 0 auto;
  margin-bottom: 70px;

  border-radius: 10px;
  box-shadow: -2px -2px 5px var(--white), 3px 3px 5px rgba(0, 0, 0, 0, 5);
`;

export const Title = styled.h2`
  padding: 20px 0;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: var(--accent);
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 5px;
`;

export const StatItem = styled.li`
  padding: 10px;
  text-align: center;
  flex-basis: calc(100% / 5);

  border-radius: 8px;
  box-shadow: inset -2px -2px 5px var(--white),
    inset 3px 3px 5px rgba(0, 0, 0, 0, 5);
`;

export const StatLabel = styled.span`
  display: block;
  margin-bottom: 7px;

  font-weight: 500;
  font-size: 16px;
  color: var(--white);
`;

export const StatPercentage = styled.span`
  display: block;
  font-weight: 500;
  font-size: 20px;
  color: var(--white);
`;
