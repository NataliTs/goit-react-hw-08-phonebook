import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

const Contacts = () => {
  return (
    <div>
      <h2>Contacts</h2>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default Contacts;
