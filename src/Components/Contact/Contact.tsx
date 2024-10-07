
import { useContact } from "./hook/useContact";
const Contact = () => {


    const { data: contact } = useContact();
    console.log(contact);
    


  return (
    <div>
        {contact?.map((contact ) => (
            <div key={contact.id}>
                <h1>{contact.first_contact}</h1>
                <h1>{contact.second_contact}</h1>
            </div>
        ))}
    </div>
  )
}

export default Contact;