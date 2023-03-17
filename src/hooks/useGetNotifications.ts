import { useEffect, useState } from 'react';

import { Notification, recentNotification } from '../apis/User';

const useGetNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await recentNotification();
      setNotifications(data);
      setIsLoading(false);
    };

    fetchNotifications();
  }, []);

  return { notifications, isLoading };
};

export default useGetNotifications;
