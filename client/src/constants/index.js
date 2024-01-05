import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'Your Funding Details',
    imgUrl: payment,
    link: '/funding-stats',
  },
  {
    name: 'Your Campaigns',
    imgUrl: withdraw,
    link: '/profile',
  }
];
