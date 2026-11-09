import Root from '../Root/Root';
import { createBrowserRouter } from "react-router";
import Dataloader from '../Dataloader';
import AppsLoader from '../AppsLoader';
import Details from '../Details/Details';
import Installed from '../Installation/Installed';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Dataloader, loader: () => fetch("/Data.json").then(res => res.json()) },
      {
        path: 'apps',
        Component: AppsLoader,
        loader: () => ({
          promise: fetch('/Data.json').then(res => res.json()),
        }),
      },
      { path: 'details/:id', Component: Details, loader: () => fetch("/Data.json").then(res => res.json()) },
      { path: 'installed', Component: Installed }
    ]
  }
]);
