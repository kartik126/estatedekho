import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from 'next/image';
import { SEO } from 'components/seo';
import { DOMAIN } from 'utils/constant';
import Header from 'components/header/Header';
import building from '../../public/images/building.gif';
import Footer from 'components/footer/Footer';
import anvesh from '../../public/images/anvesh.png';
import anirudh from '../../public/images/anirudh.png';
import ranjith from '../../public/images/ranjith.jpeg';
import ashwarya from '../../public/images/aishwarya.jpeg';
import vision from '../../public/images/diagram.png';
import leadership from '../../public/images/leadership.png';

class AboutUsPage extends Component {
  state = {
    activeKey: '',
  };

  render() {
    return (
      <>
        <SEO
          title="About Us | To Know More About Estatedekho"
          description=" estatedekho.com is India's fastest growing Real Estate site to buy, sell and rent Properties. At estatedekho, you can advertise a property, search for a property at a reasonable price."
          keywords="About us, About estatedekho.com, Real Estate, Real Estate Site, Flat, Plot, Apartment, Villa, Farmlands, Properties in India,"
          canonical={DOMAIN + this.props?.router.pathname}
          // image={iypDefaultIcon}
        />
        <Header />
        <div className="home_container">
          <div
            className="space-mb row column-reverse"
            // style={{ borderBottom: '0.1px solid #dedede' }}
          >
            <div className="col-sm-12 col-lg-7 py-5">
              <h1 className="text-center-mb px-5 pd-0 property-details-heading">
                About <span style={{ fontWeight: '700' }}>EstateDekho</span>
              </h1>
              <p
                className="text-center-mb py-4 fade-in px-5 pd-0"
                style={{
                  color: '#7f7f7f',

                  fontWeight: 400,
                  margin: '0px 0px 32px',
                  lineHeight: 1.45455,
                  letterSpacing: '-0.12px',
                }}
              >
                Welcome to Estate Dekho! We are a customer-driven,
                technology-focused real estate platform, challenging industry
                norms and setting new standards. Since we launched in 2020, our
                team has dedicated themselves to using customer feedback, the
                latest technology, and their passion to change the game in the
                real estate industry. <br />
                <br />
                As innovators, we keep looking for new and better ways to create
                solutions that suit customer needs. We invest in developing
                solutions and new services so our customers get the best value.{' '}
                <br />
                <br />
                We pride ourselves on staying at the cutting edge of the real
                estate industry by investing in data and digital infrastructure,
                working with the latest technology, and leveraging the
                industry’s leading partners.
                <br />
                <br />
                We’re driven to push boundaries, grow the market, and leave our
                mark. We are constantly growing and strive to become the leader
                in customer-centric innovation in the real estate industry.
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center col-sm-12  col-lg-5 pt-36">
              <Image src={building} alt="" width={450} height={400} />
            </div>
          </div>
          <div
            className="space-mb row d-flex justify-content-center"
            style={{
              height: 'fit-content',
            }}
          >
            <div className="d-flex justify-content-center align-items-center">
              <Image src={vision} width={40} height={40} />
              <h1 className="property-details-heading pt-3 px-3 ">
                Our Vision
              </h1>
            </div>

            <p
              className=" text-center py-4 fade-in px-5 pd-0"
              style={{
                color: '#7f7f7f',

                fontSize: '16px',
                fontWeight: 400,
                margin: '0px 0px 32px',
                lineHeight: 1.45455,
                letterSpacing: '-0.12px',
                width: '60%',
              }}
            >
              {' '}
              {`At Estate Dekho, our vision is to create an unparalleled experience for builders and developers that is defined by innovative technology and tailored services. With our wide range of efficient tools, we strive to promote efficiency and profitability in our users' ventures.`}
            </p>
          </div>
          <div
            className="space-mb row d-flex justify-content-center"
            style={{ borderBottom: '0.1px solid #dedede' }}
          >
            <div className="d-flex justify-content-center align-items-center">
              <Image src={leadership} width={40} height={40} />
              <h1 className="property-details-heading  px-3">Our Mission </h1>
            </div>
            <p
              className=" text-center py-4 fade-in px-5 pd-0"
              style={{
                color: '#7f7f7f',

                fontSize: '16px',
                fontWeight: 400,
                margin: '0px 0px 32px',
                lineHeight: 1.45455,
                letterSpacing: '-0.12px',
                width: '60%',
              }}
            >
              {' '}
              To Provide One Stop Solution for end-to-end Business management
              and achieve True Cross Vertical Integration
            </p>
          </div>
          <div>
            <h1 className="property-details-heading text-center-mb text-left px-5 pt-5">
              Leadership
            </h1>
          </div>
          <div className="row space-mb py-5">
            <div className="col-sm-6 d-flex align-items-center justify-content-center about-us-img">
              <Image
                className="border border-1"
                src={anvesh}
                width={250}
                height={250}
              />
            </div>
            <div className="col-sm-6 pt-36">
              <h1
                className="text-center"
                style={{ fontSize: '22px', fontWeight: '600' }}
              >
                ANVESH
              </h1>
              <p className="text-center" style={{ fontSize: '15px' }}>
                Chairman
              </p>
              <p
                className=" py-4"
                style={{ textAlign: 'justify', color: '#7f7f7f' }}
              >
                {`Anvesh, Chairman: Since childhood, Anvesh was enthralled by the transformative nature of construction and real estate development. His family's 30-year-old construction business allowed him to gain a deep insight into the industry. He went on to earn his bachelor's degree in Civil Engineering from Osmania University and then earned a master's degree in Project Management and Family Business Administration from Middlesex University, Dubai. Later, he worked for some of the top construction companies in Dubai, gaining invaluable international exposure. Today, Anvesh leads the organisation in his role as Chairman, ensuring effective operations, providing exemplary guidance, and serving as its symbol of authority. He further focuses on building strong teams and creating an atmosphere of effective leadership for the organisation's success.`}
              </p>
            </div>
          </div>
          <div className="row space-mb column-reverse py-5">
            <div className="col-sm-6 pt-36">
              <h1
                className="text-center"
                style={{ fontSize: '22px', fontWeight: '600' }}
              >
                RANJITH
              </h1>
              <p className="text-center" style={{ fontSize: '15px' }}>
                Co-founder & MD
              </p>

              <p
                className="py-4"
                style={{ textAlign: 'justify', color: '#7f7f7f' }}
              >
                {` During his internship, Ranjith had a vision to start a performance marketing company that could generate leads for businesses. After collaborating with the Telangana Government, T-Hub at IIIT, Hyderabad Campus, he launched this company and it soon began to scale. It was then, while working with top real estate brands, that he identified the existing gaps in the market and the importance of effective lead generation and management. Knowing firsthand how costly this service was, he decided to fill these gaps by offering a comprehensive CRM solution that would make it easier for real estate businesses to access leads and market insights. With this purpose in mind, he launched Estate Dekho. Since its inception, Ranjith has managed to transform Estate Dekho into one of the top 5 real estate portals in India, multiplying the company's revenue by 10 times within a short span of two years. His ambition now is to aggressively scale Estate Dekho throughout the country, and disrupt the real estate and allied e-commerce market.`}
              </p>
            </div>
            <div className="col-sm-6 d-flex align-items-center justify-content-center about-us-img">
              <Image
                className="border border-1"
                src={ranjith}
                width={250}
                height={250}
              />
            </div>
          </div>
          <div className="row space-mb column-reverse py-5">
            <div className="col-sm-6 d-flex align-items-center justify-content-center about-us-img">
              <Image
                className="border border-1"
                src={ashwarya}
                width={250}
                height={250}
              />
            </div>
            <div className="col-sm-6 pt-36">
              <h1
                className="text-center"
                style={{ fontSize: '22px', fontWeight: '600' }}
              >
                AISHWARYA
              </h1>
              <p className="text-center" style={{ fontSize: '15px' }}>
                Co-founder & CEO
              </p>
              <p
                className="py-4"
                style={{ textAlign: 'justify', color: '#7f7f7f' }}
              >
                {`Aishwarya has developed an expansive global perspective through her studies and travels around India and the world. This has enabled her to foster an open-minded and inquisitive outlook. She earned a bachelor’s degree in Civil Engineering from NIT Calicut and topped her University during her master's in Underground Structural Engineering from IIT Delhi. She was then invited by the German government on a prestigious DAAD scholarship to conduct research at Leibniz University, Germany. In addition to her technical and academic expertise, Aishwarya is also an artist and has headed companies in the hospitality and domestic air catering businesses. Now, as CEO of Estate Dekho, Aishwarya is driving the change with a mission to set the highest industry standards. Her wealth of knowledge in fine art, design, technology and problem-solving, combined with her attention to detail, helps the company reach their goals with a creative and technologically advanced approach.`}
              </p>
            </div>
          </div>
          <div className="row space-mb py-5">
            <div className="col-sm-6 pt-36">
              <h1
                className="text-center"
                style={{ fontSize: '22px', fontWeight: '600' }}
              >
                ANIRUDH
              </h1>
              <p className="text-center" style={{ fontSize: '15px' }}>
                Co-founder & CFO
              </p>
              <p
                className="py-4"
                style={{ textAlign: 'justify', color: '#7f7f7f' }}
              >
                {`Anirudh, an MBA Gold Medalist with a strong background in corporate strategy and distribution consulting, has worked at several Fortune 500 companies including KPMG, Honeywell and Xiaomi. His deep relationships within the Real Estate Industry of Telangana give him invaluable insights that lead to successful business decisions as CFO of Estate Dekho. He is passionate about driving growth for this integrated service enterprise forward through his impressive level of energy and professionalism.`}
              </p>
            </div>
            <div className="col-sm-6 d-flex align-items-center justify-content-center about-us-img">
              <Image
                className="border border-1"
                src={anirudh}
                width={250}
                height={250}
              />
            </div>
          </div>

          {/* <div
            className="d-flex justify-content-center col"
            style={{ position: 'relative' }}
          >
            <Image src={about} width={470} height={550} />
          </div> */}
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsPage);
