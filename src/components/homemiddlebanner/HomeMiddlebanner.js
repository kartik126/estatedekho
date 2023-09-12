import img from '../../../public/images/Group 139791@2x.png';
import drone from '../../../public/images/drone.png';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Image from 'next/image';
import Link from 'next/link';
import Roll from 'react-reveal/Roll';
function HomeMiddlebanner() {
  return (
    <div className="row middlebanner_main">
      <div className="col-md-12 mbanner">
        {/* <Link href="http://vtourdemo.odms.in/"> */}
        <a target="_blank">
          <div>
            <Image src={img} alt="" className="A1 cursor-pointer" />
          </div>
        </a>
        {/* </Link> */}
        <div className=" mbanner_content">
          <div>
            <h1>Experience it in Virtual Reality</h1>
            <div style={{ background: '#fff' }}> </div>
          </div>
          <p>
            Our Virtual Reality Model Is A Disruption In The Real Estate Sector.
            Transformed In A Way Such That Real Estate Community Perceives It
            With Love. We Are Here To Take You To A New World Of Virtual Reality
            Through Our Work On Your Projects.
          </p>
          {/* <Link href="http://vtourdemo.odms.in/"> */}
          <a target="_blank">
            <h5>
              Learn More <ExpandCircleDownOutlinedIcon />
            </h5>
          </a>
          {/* </Link> */}
        </div>
        <Roll right>
          <div className="A2">
            <Image src={drone} alt="" id="A3" width={300} height={120} />
          </div>
        </Roll>
      </div>
    </div>
  );
}

export default HomeMiddlebanner;
