import { Link } from "react-router-dom";

const AuthorArea = () => {
  return (
    <>
      <div className='author-area author-area-bg  px-5 pt-100 pb-70'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-8'>
              <div className='section-title'>
                <h2>Top Author</h2>
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='author-btn text-end'>
                <Link to='/authors'>
                  <a className='default-btn border-radius-5' href={() => false}>
                    Explore More
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className='row pt-45 justify-content-center'>
            <div className='col-lg-3 col-6'>
              <div className='author-card'>
              <Link to='/author-profile'>
                <a href={() => false}>
                  <img src={require('../../assets/imgs/trending/trending-img1.svg').default} alt='Images' />
                </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src={require('../../assets/imgs/author/author-user1.jpg')} alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3><Link to='/author-profile'>
                    <a href={() => false}>Olivia Jenar</a></Link>
                  </h3>
                  <span>@Jenar</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2941</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                            <i className='ri-twitter-fill'></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6'>
              <div className='author-card'>
              <Link to='/author-profile'>
                <a href={() => false}>
                  <img src={require('../../assets/imgs/trending/trending-img2.svg').default} alt='Images' />
                </a>
                </Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src={require('../../assets/imgs/author/author-user2.jpg')} alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3><Link to='/author-profile'>
                    <a href={() => false}>James Parker</a></Link>
                  </h3>
                  <span>@Parker</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2945</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                            <i className='ri-twitter-fill'></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6'>
              <div className='author-card'>
              <Link to='/author-profile'>
                <a href={() => false}>
                  <img src={require('../../assets/imgs/trending/trending-img3.svg').default} alt='Images' />
                </a></Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src={require('../../assets/imgs/author/author-user3.jpg')} alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3><Link to='/author-profile'>
                    <a href={() => false}>Lucas Adison</a></Link>
                  </h3>
                  <span>@Adison</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>4205</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                            <i className='ri-twitter-fill'></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-6'>
              <div className='author-card'>
              <Link to='/author-profile'>
                <a href={() => false}>
                  <img src={require('../../assets/imgs/trending/trending-img4.svg').default} alt='Images' />
                </a></Link>
                <div className='content'>
                  <div className='author-user'>
                    <img src={require('../../assets/imgs/author/author-user4.jpg')} alt='Images' />
                    <i className='ri-check-line'></i>
                  </div>

                  <h3><Link to='/author-profile'>
                    <a href={() => false}>Amelia Rosia</a></Link>
                  </h3>
                  <span>@Rosia</span>

                  <div className='author-content'>
                    <div className='content-left'>
                      <span>Followers</span>
                      <h4>2306</h4>
                    </div>

                    <div className='content-right'>
                      Follow
                      <ul className='author-social'>
                        <li>
                          <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <i className='ri-facebook-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <i className='ri-instagram-fill'></i>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                            <i className='ri-twitter-fill'></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='author-area-shape'>
          <img src={require('../../assets/imgs/author/author-shape.png')} alt='Images' />
        </div>
      </div>
    </>
  );
};

export default AuthorArea;
