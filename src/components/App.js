import profilePhoto from './assets/profilePhoto.png';

import img1 from './assets/photo1.png';
import img2 from './assets/photo2.png';
import img3 from './assets/photo3.png';
import img4 from './assets/photo_4.png';
import img5 from './assets/photo5.png';
import img6 from './assets/photo6.png';

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="wrapper">
          <div className="header__content">
            <div className="logo">
              <img src={profilePhoto} alt="" className="logo__img" />

              <h3 className="logo__name">Rodney Cotton</h3>

              <p className="logo__city">Helsinki, Finland</p>
            </div>

            <div className="info-block">
              <div className="info-block__block">
                <span className="info-block__block__number">100</span>

                <span className="info-block__block__name">Posts</span>
              </div>

              <div className="info-block__block">
                <span className="info-block__block__number">2,243</span>

                <span className="info-block__block__name">Follower</span>
              </div>

              <div className="info-block__block">
                <span className="info-block__block__number">1,432</span>

                <span className="info-block__block__name">Following</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="content">
        <div className="wrapper">
          <div className="content__block">
            <img src={img1} alt="" className="photo content__img1" />
            <img src={img2} alt="" className="photo content__img2" />
            <img src={img3} alt="" className="photo content__img3" />
            <img src={img4} alt="" className="photo content__img4" />
            <img src={img5} alt="" className="photo content__img5" />
            <img src={img6} alt="" className="photo content__img6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
