import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, []);

  return (
    <div>
      <p>Redirecting to home page, please wait...</p>
    </div>
  );
}
