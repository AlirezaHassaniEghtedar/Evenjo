import { type ReactNode } from "react";

import {
  Bounce,
  ToastContainer,
  type ToastContainerProps,
} from "react-toastify";

type Props = Partial<ToastContainerProps>;

function Toaster(props: Props): ReactNode {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
      aria-label={undefined}
      {...props}
    />
  );
}

export default Toaster;
