import { v4 as uuid } from "uuid";

const myLinks = [
  {
    id: uuid(),
    links: "https://github.com/Ilmakhan7",
    icons: "fa-brands fa-github class-purple",
    label: "connect with me on github ",
  },
  {
    id: uuid(),
    links: "https://www.linkedin.com/in/ilmakhan7/",
    icons: "fa-brands fa-linkedin class-purple",
    label: "connect with me on linkedin ",
  },
  {
    id: uuid(),
    links: "https://twitter.com/Ilmakha7",
    icons: "fa-brands fa-twitter class-purple",
    label: "connect with me on twitter ",
  },
  {
    id: uuid(),
    links: "mailto:ilmakhan42280@gmail.com",
    icons: "fa-solid fa-envelope class-purple",
    label: "Send me an email ",
  },
  {
    id: uuid(),
    links: "tel:9759001794",
    icons: "fa-solid fa-phone class-purple",
    label: "Call me on my cellphone number ",
  },
 
];

export default myLinks;