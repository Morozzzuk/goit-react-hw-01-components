import styled from '@emotion/styled';

export const Transactions = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  gap: 10px;
  padding: 10px;
  width: 500px;
  border: 1px solid var(--accent);
`;

export const TableHead = styled.thead`
  width: 100%;
`;

export const HeadRow = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  gap: 10px;
`;

export const HeadTitle = styled.th`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-basis: calc(100% / 3);

  font-size: 20px;
  font-weight: 500;
  color: var(--accent);
  border: 1px solid var(--accent);
  /* background-color: yellow; */
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const BodyRow = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  gap: 10px;
  :hover {
    cursor: pointer;
    background-color: var(--light-grey);
  }
`;

export const BodyText = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-basis: calc(100% / 3);

  font-size: 16px;
  font-weight: 500;
  color: var(--primary);
  border: 1px solid var(--accent);
`;
