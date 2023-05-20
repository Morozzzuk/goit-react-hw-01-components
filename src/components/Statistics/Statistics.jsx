import PropTypes from 'prop-types';
import { getRandomColor } from './getRandomColor';
import {
  Section,
  Title,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} style={{ backgroundColor: getRandomColor() }}>
              <StatLabel>{label}</StatLabel>
              <StatPercentage>{percentage}%</StatPercentage>
            </StatItem>
          );
        })}
      </StatList>
    </Section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
