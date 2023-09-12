import { Component } from 'react';
import Link from 'next/link';
import { DOMAIN } from 'utils/constant';
import { SEO } from 'components/seo';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import contactus from '../../public/images/contactus.png';
import Image from 'next/image';
class ContactUs extends Component {
  render() {
    return (
      <>
        <SEO
          title="estatedekho.com Contact Details & Office Addresses Across India
          "
          description="Find estatedekho Contact Details & Office Addresses across India. Register at estatedekho.com to buy, Sell and Rent Property."
          keywords="contact us, estatedekho office address, estatedekho offices in India, Real Estate Site Address."
          canonical={DOMAIN + this.props.router.pathname}
          // image={iypDefaultIcon}
        />
        <Header />
        <div
          className="d-flex flex-row justify-content-center align-items-center home-main padding-web padding-mobile "
          style={{ background: '#f0f3f7', height: '90vh' }}
        >
          <div className="row d-flex flex-row justify-content-between align-items-center rounded-4 contact-us-block">
            <div className="col-sm">
              <h1 style={{ fontSize: '23px', color: 'rgb(25, 70, 155)' }}>
                Contact <span style={{ fontWeight: '700' }}>Us</span>{' '}
              </h1>
              <p
                className="pt-3"
                style={{ fontSize: '14px', fontWeight: 600, lineHeight: 0 }}
              >
                Corporate Office:
              </p>
              <p style={{ fontSize: '14px' }}>
                1-90/7/B/121, PATRIKA NAGAR, MADHAPUR, 1-90/7/B/121, Hyderabad,
                Telangana, 500081
              </p>
              <p
                className="pt-3"
                style={{ fontSize: '14px', fontWeight: 600, lineHeight: 0 }}
              >
                Administrative Office:
              </p>
              <p style={{ fontSize: '14px' }}>
                2nd Floor-ACR tower, Araghar Chowk, Dehradun, Uttarakhand 248001
              </p>
              <p style={{ fontSize: '14px' }}>
                10, Yashoda Nagar, Yelahanka, Bengaluru, Karnataka 560064
              </p>
              <p
                className="pt-3"
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                In case of any queries:
              </p>
              <div className="display-col d-flex flex-row pt-2">
                <p style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>
                  <CallIcon /> <a href="tel:8585854850"> +91 8585854850</a>
                </p>{' '}
                <span className="px-2 display">|</span>
                <p style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>
                  <MailOutlineIcon />{' '}
                  <a href="mailto:info@estatedekho.com">info@estatedekho.com</a>
                </p>
              </div>
            </div>
            <div className="col-sm d-flex justify-content-end display">
              <Image src={contactus} width={300} height={240} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ContactUs;
