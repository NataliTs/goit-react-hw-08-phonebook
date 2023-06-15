import {
  Contact,
  ContactContainer,
  DeleteBtn,
  Number,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const getVisibleContacts = [...contacts].filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactContainer>
      {isLoading && <Loader />}
      {!getVisibleContacts?.length && !error && !isLoading && (
        <p>No contacts found</p>
      )}
      {error && <p>{error}</p>}
      <ul>
        {getVisibleContacts.map(({ id, name, number }) => (
          <Contact key={id}>
            {name}: <Number>{number}</Number>
            <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
              <RiDeleteBin6Line />
            </DeleteBtn>
          </Contact>
        ))}
      </ul>
    </ContactContainer>
  );
};
