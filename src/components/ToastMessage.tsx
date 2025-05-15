import { FC } from 'react';
import { ToastContentProps } from 'react-toastify';

export const ToastMessage: FC<ToastContentProps> = ({ closeToast }) => (
  <div className="flex flex-col gap-4 justify-between text-black">
    <p>
      This page does not collect or use any personal data for tracking purposes.
    </p>
    <div className="flex justify-around">
      <button
        className="border-2 border-black w-40 hover:bg-green hover:text-white p-1 hover:cursor-pointer"
        onClick={closeToast}
      >
        Acknowledged
      </button>
    </div>
  </div>
);
