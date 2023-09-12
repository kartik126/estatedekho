import Image from 'next/image';
import img from '../../../public/images/Group 37@2x.png';
import img2 from '../../../public/images/Group 1764@2x.png';
import img3 from '../../../public/images/Group 139794@2x.png';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
function QuickLinks() {
  return (
    <div className="row quicklink_main">
      <div className="row topvilla_heading">
        <div className=" d-flex justify-content-sm-between align-items-center col-md-12">
          <h1>
            Quick
            <span style={{ fontWeight: '700' }}> Links</span>
          </h1>
        </div>
      </div>
      <div className="row quicklink_view">
        <div className=" d-flex justify-content-center col-md-4">
          <div className="card ">
            <div className="row p-3" style={{ height: '150px' }}>
              <div className="col-md-5">
                <Image
                  className="card-img-top "
                  src={img}
                  alt="Card cap"
                  width={121}
                  height={100}
                />
              </div>
            </div>

            <div className="row card-body">
              <div className="col-md-12" style={{ padding: ' 5px 23px' }}>
                <h5 className="card-title">
                  Government Portals <ExpandCircleDownOutlinedIcon />
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: '14px',
                    color: '#212429',
                    fontWeight: '500',
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center col-md-4">
          <div className="card ">
            <div className="row p-3" style={{ height: '150px' }}>
              <div className="col-md-5">
                <Image
                  className="card-img-top "
                  src={img2}
                  alt="Card cap"
                  width={121}
                  height={100}
                />
              </div>
            </div>

            <div className="row card-body">
              <div className="col-md-12" style={{ padding: ' 5px 23px' }}>
                <h5 className="card-title">
                  Home Loans
                  <ExpandCircleDownOutlinedIcon />
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: '14px',
                    color: '#212429',
                    fontWeight: '500',
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center col-md-4">
          <div className="card ">
            <div className="row p-3" style={{ height: '150px' }}>
              <div className="col-md-5">
                <Image
                  className="card-img-top "
                  src={img3}
                  alt="Card cap"
                  width={140}
                  height={100}
                />
              </div>
            </div>

            <div className="row card-body">
              <div className="col-md-12" style={{ padding: ' 5px 23px' }}>
                <h5 className="card-title">
                  Movers and Packers <ExpandCircleDownOutlinedIcon />
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontSize: '14px',
                    color: '#212429',
                    fontWeight: '500',
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
