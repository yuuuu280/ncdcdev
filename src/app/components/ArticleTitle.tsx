"use client";

import Image from "next/image";
import { useState } from "react";

type ArticleTitleProps = {
  title: string;
  body: string;
  changeCallBack: (newTitle: string, body: string) => void;
};

const articleTitle = ({ title, body, changeCallBack }: ArticleTitleProps) => {
  const [newTitle, setNewTitle] = useState(title);
  const [isTitleEdit, setIsTitleEdit] = useState(false);

  return (
    <>
      {isTitleEdit ? (
        <div className="flex justify-between">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="pl-7 text-2xl font-bold rounded-lg border-2 border-blue-500 outline-blue-800"
          />
          <div>
            <button
              onClick={() => {
                changeCallBack(newTitle, body);
                setIsTitleEdit(false);
              }}
              className="w-10 h-10 rounded text-xs bg-blue-500"
            >
              <Image
                className="mx-auto"
                src="/save.svg"
                width={20}
                height={20}
                alt="save"
              />
              <p className="text-white">Save</p>
            </button>
            <button
              onClick={() => setIsTitleEdit(false)}
              className="w-10 h-10 ml-4 rounded text-xs bg-gray-500"
            >
              <Image
                className="mx-auto"
                src="/cancel.svg"
                width={20}
                height={20}
                alt="cancel"
              />
              <p className="text-white">Cancel</p>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <p className="ml-7 text-2xl font-bold">{title}</p>
          <button
            onClick={() => setIsTitleEdit(true)}
            className="w-24 h-10 ml-12 rounded text-xs bg-blue-500"
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
export default articleTitle;
