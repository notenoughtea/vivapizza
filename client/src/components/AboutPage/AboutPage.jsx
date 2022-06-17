import './AboutPage.css';

const AboutPage = () => (
  <div className="aboutPage">
    <h1 className="aboutPageTitle">ABOUT US</h1>
    <div className="bottomCorner" />
    <div className="aboutContent">
      <div className="aboutPageSection1">
        <div className="stick1" />
        <div className="plate">
          <img className="aboutImg" alt="pizza sample" src="./pizzasample.png" />
        </div>
        <p className="aboutText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum pharetra lorem at suscipit vulputate. Sed id tincidunt purus, et ornare sapien.
          Duis id leo in elit ultricies euismod. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Vestibulum commodo, ante nec faucibus tempor,
          dolor augue molestie justo, vel mollis libero ex vel ipsum.
          Vestibulum rutrum consequat erat,
          sed dictum urna pulvinar id. Cras vitae tellus blandit, porttitor tellus et,
          hendrerit lorem. Sed laoreet.
          Etiam ultricies ex eu sapien dapibus efficitur ut et massa.
          Vestibulum rhoncus dignissim arcu id tempor.
        </p>
      </div>
      <div className="aboutPageSection2">
        <div className="stick2" />
        <p className="aboutText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum pharetra lorem at suscipit vulputate. Sed id tincidunt purus, et ornare sapien.
          Duis id leo in elit ultricies euismod. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Vestibulum commodo, ante nec faucibus tempor,
          dolor augue molestie justo, vel mollis libero ex vel ipsum.
          Vestibulum rutrum consequat erat.
          Sed dictum urna pulvinar id. Cras vitae tellus blandit, porttitor tellus et.
          Sed laoreet.
          Etiam ultricies ex eu sapien dapibus efficitur ut et massa.
          Vestibulum rhoncus dignissim arcu id tempor.
        </p>
        <div className="plate">
          <img className="aboutImg" alt="pizza sample" src="./pizzasample.png" />
        </div>
      </div>

    </div>
  </div>

);

export default AboutPage;
