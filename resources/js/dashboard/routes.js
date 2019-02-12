import React from 'react';
import DefaultLayout from './containers/DefaultLayout';
import HomeLayout from './containers/HomeLayout';
// Pages
// Home
const Home = React.lazy(() => import('./views/Home/Home'));
// Post
const Post = React.lazy(() => import('./views/Post/Post'));
// Blog
const Blog = React.lazy(() => import('./views/Blog/Blog'));
// Privacy
const Privacy = React.lazy(() => import('./views/Privacy/Privacy'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: HomeLayout },
  { path: '/admin', exact: true, name: 'Admin', component: DefaultLayout },
  { path: '/home', name: 'Home', component: Home },
  // Home
  { path: '/home', name: 'Home', component: Home },
  // Post
  { path: '/post/:id', name: 'Post', component: Post },
  // Blog
  { path: '/blog', name: 'Blog', component: Blog },
  // Privacy
  { path: '/privacy', name: 'Privacy', component: Privacy },
];

export default routes;
