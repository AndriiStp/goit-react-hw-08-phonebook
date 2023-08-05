import css from './pages.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={css.head}>
        Hello, please login or register first to access PhoneBook
      </h1>
    </div>
  );
}
