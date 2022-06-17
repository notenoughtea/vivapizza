import './ContactsPage.css';

const ContactsPage = () => (
  <div className="contactsPage">
    <div className="contactsPageContent">
      <input className="feedback" placeholder="Leave a message  . . ." />
      <div className="contactsBlock">
        <div className="contactsStick1" />
        <div className="contactsSection1">
          <div className="contactsTextBlock">
            <h1 className="contactsTitle1">Viva Pizza</h1>
            <p className="contactsText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris mattis facilisi adipiscing scelerisque
              aliquet morbi commodo, lacus, ornare.
              Facilisis habitant vel dignissim amet, bibendum. Sit leo lectus.
            </p>
          </div>
          <div className="phoneBlock">
            <img className="contactsLogo" alt="phone logo" src="./phone1.png" />
            <div className="cellphoneNumber">+ 999999999</div>
          </div>
        </div>
        <div className="contactsStick2" />
        <div className="contactsSection2">
          <div className="contactsTextBlock">
            <h1 className="contactsTitle1">Viva Pizza</h1>
            <h2 className="contactsTitle2">Miami Beach, 22</h2>
            <p className="contactsText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris mattis facilisi adipiscing scelerisque.
            </p>
          </div>
          <div className="phoneBlock">
            <img className="contactsLogo" alt="phone logo" src="./phone1.png" />
            <div className="cellphoneNumber">+ 999999999</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactsPage;
