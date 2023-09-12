import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import React, { Component } from 'react';
import bg from '../../public/images/privacybg.jpg';
import Image from 'next/image';
import { SEO } from 'components/seo';
import { DOMAIN } from 'utils/constant';
class Privacypolicy extends Component {
  render() {
    return (
      <>
        <SEO
          title={
            (this.props.seoData && this.props.title) ||
            'Real Estate Privacy Policy In India - Estatedekho'
          }
          description={
            (this.props.seoData && this.props.seoData.description) ||
            'The Policy is effective from the date and time a person registers with estatedekho by means of filling up the Registration shape and accepting the phrases and situations laid out within the Site Policy.'
          }
          keywords={
            (this.props.seoData && this.props.seoData.keywords) ||
            ' Property privacy policy, real estate policy, site policy, estatedekho policy, estatedekho.com'
          }
          canonical={DOMAIN}
          // image={iypDefaultIcon}
        />
        <Header />
        <div className="home_container">
          <div className="d-flex justify-content-center row news-topbanner px-2">
            <div className="col-sm">
              <Image src={bg} alt="" height={1000} />
              <h1>Privacy Policy</h1>
            </div>
          </div>
          <div className="py-3 px-2 content">
            <h1 style={{ fontSize: '17px', fontWeight: '600' }}>
              Privacy Policy
            </h1>
            <p
              style={{ fontSize: '17px', lineHeight: '1.5', color: '#7f7f7f' }}
            >
              Welcome to the Estate Dekho website!!! We are here to connect
              different people in the real estate market and deliver them
              hassle-free services. We respect the privacy of our customers and
              we keep them a high priority. We are here to provide you with the
              safe buying and selling experience. Please go through the below
              privacy policies and terms of use to get more information about
              our services. This policy will help you to understand how we
              manage your personal data which is collected through inquiry
              forms. Our ultimate goal is to provide you with a safe, credible,
              and trustworthy platform to buy and sell.
            </p>
            <h1 style={{ fontSize: '17px', fontWeight: '600' }}>
              Collection of Information
            </h1>
            <p
              style={{ fontSize: '17px', lineHeight: '1.5', color: '#7f7f7f' }}
            >
              Please take few minutes to read the following policy so that you
              understand how we treat your information. As we continuously
              improve and expand our services, this policy might change, so
              please check it periodically. This privacy policy describes how we
              collect, uses and share information you provide us through the
              mobile app. We seek all your permissions with respect to the data
              we collect. We ensure that, no data of our customers is breached.
              Also, with respect to, location we seek your consent whenever
              location access is sought on mobile application. We have strict
              protocols with respect to data security. We adhere to all the
              guidelines specified as per the application listing policies.
              Particularly with respect to location, We prior intimated the team
              regarding this feautre and took consent from the team with respect
              to tracking the locations of the team concerned.
            </p>
            <h1 style={{ fontSize: '17px', fontWeight: '600' }}>
              Application of policy and abusement
            </h1>
            <p
              style={{ fontSize: '17px', lineHeight: '1.5', color: '#7f7f7f' }}
            >
              Estate Dekho has committed to providing you with a friendly and
              safe environmental community to all of its members. This policy is
              applicable to everyone who uses our services. So we also expect
              from all our members/customers to cooperate in complying with
              these rules so that everyone can have a pleasant experience.
            </p>
            <h1 style={{ fontSize: '17px', fontWeight: '600' }}>
              Sharing your information with third parties
            </h1>
            <p
              style={{ fontSize: '17px', lineHeight: '1.5', color: '#7f7f7f' }}
            >
              We collect different information from the visitors who visit our
              website. Like other online services, we also use different cookies
              and third party analytics, log data to collect and analyze the
              information of our visitors who are searching our services. We
              collect different information including, personal data (name,
              address, email id, age), some sensitive information (health
              updates, passwords) and other information like when you are
              visiting our websites and signing up with your mail or trying to
              interact with our services. This policy is not applied to, nor do
              we take responsibilities of any information that is collected by
              the third party using our website or any link present on our
              website through any advertisements. We use small data files like
              cookies to better understand how to interact with you for our
              services, and are able to monitor how often or the number of times
              you are returning to our websites. We use persistent cookies to
              remember your preferences while you create your account. Most of
              the internet browsers accept cookies automatically, if you don
              {"'"}t want to accept it then you can change your browser settings
              but some services will not work after you disable cookies.
              Sometimes the additional information (prediction of your income
              range and how likely you want to purchase a home) that we get from
              the third parties and use it to help our agents to serve you
              better.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Privacypolicy;
