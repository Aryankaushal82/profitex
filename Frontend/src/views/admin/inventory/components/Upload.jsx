import React, { useState } from "react";
import { MdFileUpload } from "react-icons/md";
import Card from "components/card";
import ManualForm from "./ManualForm"; // Import the ManualForm component
import Popup from "./Popup"; // Import the Popup component

const Upload = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isManualFormOpen, setIsManualFormOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => {
    setIsPopupOpen(false);
    setIsManualFormOpen(false);
  };

  const handleAddManually = () => {
    setIsManualFormOpen(true);
    setIsPopupOpen(false);
  };

  const handleAddByExcel = () => {
    // Handle Excel upload logic here
    closePopup();
  };

  return (
    <>
      <Card className="grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
        <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
          <button
            onClick={openPopup}
            className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0"
          >
            <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
            <h4 className="text-xl font-bold text-brand-500 dark:text-white">
              Upload Product
            </h4>
            <p className="mt-2 text-sm font-medium text-gray-600">
              PNG, JPG and GIF files are allowed
            </p>
          </button>
        </div>

        <div className="col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 dark:!bg-navy-800">
          <h5 className="text-left text-xl font-bold leading-9 text-navy-700 dark:text-white">
            Add your Product here
          </h5>
          <p className="leading-1 mt-2 text-base font-normal text-gray-600">
            Stay on the pulse of distributed projects with an online whiteboard to
            plan, coordinate and discuss
          </p>
          <button
            onClick={openPopup}
            className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Add Now
          </button>
        </div>
      </Card>

      {/* Popup Component */}
      {isPopupOpen && (
        <Popup
          closePopup={closePopup}
          handleAddManually={handleAddManually}
          handleAddByExcel={handleAddByExcel}
        />
      )}

      {/* Manual Form Component */}
      {isManualFormOpen && <ManualForm closeForm={() => setIsManualFormOpen(false)} />}
    </>
  );
};

export default Upload;
