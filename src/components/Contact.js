import PropTypes from 'prop-types';
import "./Contact.css";


function Contact({ online,name,avatar }) {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={avatar}
        alt="avatar"
      />
      <div>
        <div className="name">{name}</div>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <div className="status-text">{online ? "online" : "offline"}</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
Contact.propsTypes={
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
    image:PropTypes.element.isRequired,

}