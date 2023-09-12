import Link from 'next/link';
import Image from 'next/image';
import notfound from '../../public/images/404 Error-bro.png';
export default function Custom404() {
  return (
    <div
      className="d-flex flex-1 flex-column justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <h1 style={{ fontSize: '50px', fontWeight: 200, textAlign: 'center' }}>
        Page Not Found!
      </h1>

      <Link href="/">
        <a>Go back to Home</a>
      </Link>

      <Image src={notfound} width={350} height={350} alt="error-img" />
    </div>
  );
}
