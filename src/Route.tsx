import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ListedItems from "./pages/ListedItems";
import DetailedItem from "./pages/DetailedItem";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
import Payment from "./pages/Payment";
import FindUserPassword from "./pages/FindUserPassword";
import FindUserId from "./pages/FindUserId";
import FAQ from "./pages/FAQ";
import FAQDetail from "./pages/FAQDetail";
import CenterLayout from "./components/CenterLayout";
import WriteFAQ from "./pages/WriteFAQ";
import PaymentSuccess from "./pages/PaymentSuccess";
import Join from "./pages/Join";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/items",
    element: <ListedItems />,
  },
  {
    path: "/items/:id",
    element: <DetailedItem />,
  },
  // main page

  {
    path: "/users",
    element: <CenterLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "find/id",
        element: <FindUserId />,
      },
      {
        path: "find/password",
        element: <FindUserPassword />,
      },
      {
        path: "join",
        element: <Join />,
      },
    ],
  },
  // auth, login, find page

  {
    path: "/cart",
    element: <CenterLayout />,
    children: [
      {
        path: "",
        element: <ShoppingCart />,
      },
    ],
  },
  {
    path: "/payment",
    element: <CenterLayout />,
    children: [
      {
        path: "",
        element: <Payment />,
      },
      {
        path: "success",
        element: <PaymentSuccess />,
      },
    ],
  },
  {
    path: "/faq",
    element: <CenterLayout />,
    children: [
      {
        path: "",
        element: <FAQ />,
      },
      {
        path: "write",
        element: <WriteFAQ />,
      },
      {
        path: ":id",
        element: <FAQDetail />,
      },
    ],
  },
  //faq page
]);

export default router;
