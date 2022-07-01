import './Mainpage.css';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Mainpage = () => {

  return (
    <div>
      <div className="topCorner" />
      <div className="content">
        <Navbar />
        <div className="mainPanel">
          <div className="mainPageBlock">
            <h1 className="mainPageTitle">Viva Pizza</h1>
            <h2 className="slogan">Viva Italia, viva pizza</h2>
            <p className="mainPageText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pharetra lorem at suscipit vulputate.
              Sed id tincidunt purus, et ornare sapien.
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
          <img className="leaf" alt="leaf" src="./leaf.png" />
        </div>
        <div className="bigplate">
          <img className="mainPagePic" alt="pizza sample" src="./pizzasample.png" />
        </div>
        <div className="clockBlock">
          <img className="clock" alt="clock" src="./clock.png" />
          <div className="worktime">
            <p>
              Понедельник-Четверг: 9:00-21:00
            </p>
            <p>
              Пятница-Суббота: 7:00-23:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mainpage;
