import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import './Footer.css';
import styled from "styled-components";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RssFeedIcon from '@material-ui/icons/RssFeed';

const Footer = () => {
  // handle events
  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  // handle notification
  const [notification, setNotification] = useState(true);

  // handle submit
  const onSubmit = (data) => {
    console.log('data', data);
    setNotification(true)
    reset()
  }

  // handle timer for notification
  useEffect(() =>{
    let timer;
    if(notification){
      timer = setTimeout(() =>{
        setNotification(false)
      }, 10000)
    }
    return () =>clearTimeout(timer)
  },[notification])
  return (
    <React.Fragment>
      <main>
        <div className="footer-section">
          <div className="footer">
            <p className="sub-text">
            <span>Stay connected.</span> Get news, updates, and information about ways we can all grow and protect the Internet.
            </p>
            {notification && (
              <div className='sub-texts'>
                <p>Thanks for Subscribing to the X company news!</p>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                {/* body */}
                <div className="flex">
                  <div class="input-btn">
                    <input
                      type="email"
                      autoComplete="off"
                      placeholder="Your Email Address"
                      className='validation'
                      {...register("email", {
                        required: false,
                        pattern: {
                          value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                          message: "Please enter a valid email",
                        },
                      })}
                      onKeyUp={() => {
                        trigger("email");
                      }}
                    />
                
                  </div>
                  

                  {/* btn section */}
                  <div className="btn">
                    <input
                      type="submit"
                      value="Subscribe"
                      className="h-10 px-2 rounded-r bg-red-800 text-white font-bold  "
                    />
                  </div>
                </div>
                {errors.email && (
                      <span className="text-sm text-red-500">
                        {errors.email.message}
                      </span>
                    )}
              </div>
            </form>
          </div>
        </div>
        <Container>
          <Twitter style={{ fontSize: '2.5rem' }} /> 
          <LinkedIn style={{ fontSize: '2.5rem' }} />
          <Facebook style={{ fontSize: '2.5rem' }} />
          <Instagram style={{ fontSize: '2.5rem' }} />
          <Youtube style={{ fontSize: '2.5rem' }} />
          <Wifi style={{ fontSize: '2.5rem' }} />
        </Container>
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">United Kingdom</Footer.Link>
                    <Footer.Link href="#">Australia</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
      </main>
    </React.Fragment>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: white;
  padding: 0 0 2rem;
  cursor: pointer;
` 

const Facebook = styled(FacebookIcon)`

`
const Instagram = styled(InstagramIcon)`
`
const Twitter = styled(TwitterIcon)`
`
const Youtube = styled(YouTubeIcon)`
`
const LinkedIn = styled(LinkedInIcon)`
`
const Wifi = styled(RssFeedIcon)`
`
export const Footers = styled.div`
  padding: 80px 60px;
  background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

