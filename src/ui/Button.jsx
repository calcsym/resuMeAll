import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    btn: 'color-inherit uppercase py-[0.8rem] px-[1.6rem] font-inherit text-[1.5rem] border-none rounded-[5px] cursor-pointer',
    position:
      'font-weight-700 position-absolute z-1000 text-[1.4rem] bottom-16 left-1/2 transform -translate-x-1/2 bg-[var(--color-brand--2)] text-[var(--color-dark--1)] shadow-[0_0.4rem_1.2rem_rgba(36,42,46,0.16)]',
    secondary:
      'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
    back: 'font-weight-600 bg-none border border-current',
    userButton:
      'bg-[var(--color-dark--2)] rounded-[7px] border-none py-[0.6rem] px-[1.2rem] color-inherit font-inherit text-[1.2rem] font-weight-700 uppercase cursor-pointer'
  };

  if (to)
    return (
      <Link to={to} className={`${styles.btn} ${styles[type]}`}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${styles.btn} ${styles[type]}`}
      >
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
