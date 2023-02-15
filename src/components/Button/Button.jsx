import PropTypes from 'prop-types';
import css from './button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={css.Button} onClick={onClick} type="button">
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
