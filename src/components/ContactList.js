import './ContactList.css';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContact } from '../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const nomalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nomalizedFilter),
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <ul className="list">
        {visibleContacts.map(({ id, name, number }) => (
          <li className="contactItem" key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <IconButton
              onClick={() => dispatch(deleteContact(id))}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    </>
  );
}
