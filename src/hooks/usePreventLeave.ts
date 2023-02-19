import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

// 새로고침 방지 훅
const usePreventLeave = () => {
  const listener = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = '';
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener);

  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
