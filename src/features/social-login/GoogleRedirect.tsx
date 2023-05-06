import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const GoogleRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.search);
    navigate('/member', { replace: true });
  }, []);
  return <></>;
};
