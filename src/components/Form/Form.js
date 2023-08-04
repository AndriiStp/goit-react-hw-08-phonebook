import css from './Form.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const Form = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAdd = e => {
    e.preventDefault();
    const form = e.target;
    const id = nanoid();
    const { name, number } = form.elements;

    const existingContact = contacts.find(
      contact =>
        contact.nameInput.toLowerCase() ===
        form.elements.name.value.toLowerCase()
    );

    if (!existingContact) {
      const nameInput = name.value;
      const numberInput = number.value;

      if (nameInput.trim() === '' || numberInput.trim() === '') {
        alert('Please fill all required fields!');
        return;
      }
      dispatch(addContact({ id, nameInput, numberInput }));
      form.reset();
    } else {
      alert(`A contact with the name ${name.value} already exists`);
    }
  };

  return (
    <form className={css.form} onSubmit={handleAdd}>
      <label className={css.label} htmlFor="name">
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, spaces, hyphens, and apostrophes are allowed"
          required
        />
      </label>

      <label className={css.label} htmlFor="number">
        Tel:
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Valid Phone Number: Optional '+' Symbol, Digits, Spaces, Hyphens, and Parentheses"
          required
        />
      </label>
      <button className={css.submit_button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default Form;
