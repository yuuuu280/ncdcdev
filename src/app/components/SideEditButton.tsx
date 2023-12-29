"use client";

import Image from "next/image";
import { useState } from "react";

type sideEditButtonProps = {
  newPageCallBack: () => void;
};

const sideEditButton = ({ newPageCallBack }: sideEditButtonProps) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit ? (
        <div className="flex">
          <button
            onClick={() => {
              newPageCallBack();
            }}
            className="w-24 h-10 rounded text-xs border border-blue-500 bg-white"
          >
            <Image
              className="mx-auto"
              src="/+.svg"
              width={20}
              height={20}
              alt="plus"
            ></Image>
            <p className="text-blue-500">New Page</p>
          </button>
          <button
            onClick={() => setIsEdit(false)}
            className="w-24 h-10 ml-11 rounded text-xs bg-blue-500"
          >
            <Image
              className="mx-auto"
              src="/done.svg"
              width={20}
              height={20}
              alt="done"
            ></Image>
            <p className="text-white">Done</p>
          </button>
        </div>
      ) : (
        <div className="mr-3 text-right">
          <button
            onClick={() => setIsEdit(true)}
            className="w-24 h-10 rounded text-xs bg-blue-500"
          >
            <Image
              className="mx-auto"
              src="/edit.svg"
              width={20}
              height={20}
              alt="edit"
            />
            <p className="text-white">Edit</p>
          </button>
        </div>
      )}
    </>
  );
};
export default sideEditButton;
