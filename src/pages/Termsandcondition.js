import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import React, { Component } from 'react';
import Image from 'next/image';
import bg from '../../public/images/privacybg.jpg';
import { SEO } from 'components/seo';
import { DOMAIN } from 'utils/constant';

class Termsandcondition extends Component {
  render(props) {
    return (
      <>
        <SEO
          title={
            (this.props.seoData && this.props.title) ||
            'Terms and Conditions | Payment Terms - Estatedekho'
          }
          description={
            (this.props.seoData && this.props.seoData.description) ||
            ' estatedekho.com - Read Terms & Conditions, details on Payment Terms, Restrictions or Prohibitions, Property Rights, Disclaimer & Warranties.'
          }
          keywords={
            (this.props.seoData && this.props.seoData.keywords) ||
            'Terms and Conditions page, Estatedekho Terms, Payment Terms, Administration Terms, Real Estate Conditions.'
          }
          canonical={DOMAIN}
          // image={iypDefaultIcon}
        />
        <Header />
        <div className="row home_container">
          <div className="d-flex justify-content-center row news-topbanner pt-50 px-2">
            <div className="col-sm">
              <Image src={bg} alt="" height={1000} />
              <h1>Terms & Conditions</h1>
            </div>
          </div>
          <div className=" px-2 content">
            <h1
              className="py-3"
              style={{ fontSize: '17px', fontWeight: '600' }}
            >
              Terms & Conditions
            </h1>
            <p
              style={{ fontSize: '17px', lineHeight: '1.5', color: '#7f7f7f' }}
            >
              When You are using any of the services provided by Us on the
              Website then you are accepting to the guidelines, rules, policies,
              terms and conditions of the service We reserve the right to
              change, modify, add or remove portions of Terms of Use, at any
              time without any prior written notice to you.
              <br />
              <br /> - It is your responsibility to analyze the Terms of Use
              periodically for updates or any changes.
              <br /> - If you are continuing the use of the Website following
              the posting of changes that will mean that you accept and agree to
              the policy. <br />- As long as you follow with these Terms of Use,
              We allow you a personal, non-exclusive, non-transferable, limited
              privilege to enter and use the Website.
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Termsandcondition;
