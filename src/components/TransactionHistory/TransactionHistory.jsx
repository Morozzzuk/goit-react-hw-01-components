import PropTypes from 'prop-types';
import { getRandomColor } from '../Statistics/getRandomColor';
import {
  Transactions,
  TableHead,
  HeadRow,
  HeadTitle,
  TableBody,
  BodyRow,
  BodyText,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Transactions>
      <TableHead>
        <HeadRow>
          <HeadTitle style={{ backgroundColor: getRandomColor() }}>
            Type
          </HeadTitle>
          <HeadTitle style={{ backgroundColor: getRandomColor() }}>
            Amount
          </HeadTitle>
          <HeadTitle style={{ backgroundColor: getRandomColor() }}>
            Currency
          </HeadTitle>
        </HeadRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <BodyRow key={id}>
              <BodyText>{type}</BodyText>
              <BodyText>{amount}</BodyText>
              <BodyText>{currency}</BodyText>
            </BodyRow>
          );
        })}
      </TableBody>
    </Transactions>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
