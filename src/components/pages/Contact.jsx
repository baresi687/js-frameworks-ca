import { Link } from 'react-router-dom';

function Contact() {
  return (
    <section>
      <div className={'container'}>
        <h1>Contact</h1>
        <Link to={'/cart'}>Placeholder link</Link>
      </div>
    </section>
  );
}

export default Contact;
