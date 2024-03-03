import { Counter } from "./components/Counter";
import { DumpQuotes } from "./components/DumpQuotesPage/DumpQuotes";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/HomePage/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        path: '/dump-quotes',
        element: <DumpQuotes />
    }
];

export default AppRoutes;
