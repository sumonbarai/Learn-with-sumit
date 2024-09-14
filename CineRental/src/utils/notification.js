import { toast } from "react-toastify";

export const successNotification = (message) => {
  return toast.success(message, {
    position: "bottom-right",
    autoClose: 2000,
  });
};
export const errorNotification = (message) => {
  return toast.error(message, {
    position: "bottom-right",
    autoClose: 2000,
  });
};
