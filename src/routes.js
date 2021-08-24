import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

export const routes = [
    { path : '', component: Home },
    { path : '/contact-us', component: ContactUs },
    { path : '/about-us', component: AboutUs }
];