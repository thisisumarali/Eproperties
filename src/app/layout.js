import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import 'animate.css';
import 'react-modal-video/css/modal-video.css'
import 'react-toastify/dist/ReactToastify.css'

import '../../public/assets/css/flaticon.css';
import '../../public/assets/css/bootstrap-icons.css';
import '../../public/assets/css/fontawesome.css';

import '../../public/assets/css/theme-default.css';
import '../../public/assets/css/style.css';
import '../../public/assets/css/responsive.css';

import { Rubik } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import Dependency from '../components/utilities/Dependency';
import ScrollUpBtn from '../components/utilities/ScrollUpBtn';

const inter = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Dependency />
        <ToastContainer />
        <ScrollUpBtn />
      </body>
    </html>
  )
}
