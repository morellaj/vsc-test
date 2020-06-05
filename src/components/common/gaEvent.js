import ReactGA from 'react-ga';

export default (category, action) => ReactGA.event({ category, action });
