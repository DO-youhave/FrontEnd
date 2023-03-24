import { useEffect, useState } from 'react';

import { recentNotification } from '../apis/User';
import { Notification } from '../interfaces/user';

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
