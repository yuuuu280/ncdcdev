"use client";

import Image from "next/image";
import { useState } from "react";

type articleBodyProps = {
  title: string;
  body: string;
  changeCallBack: (title: string, newBody: string) => void;
};

const articleBody = ({ title, body, changeCallBack }: articleBodyProps) => {
  const [newBody, setNewBody] = useState(body);
  const [isBodyEdit, setIsBodyEdit] = useState(false);

  return (
    <>
      {isBodyEdit ? (
        <div className="flex justify-between mt-5">
          <textarea
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
            className="w-96 h-96 p-5 overflow-y-auto rounded border-2 border-blue-500 bg-white outline-blue-00"
          />
          <div className="ml-12">
            <button
              onClick={() => {
                changeCallBack(title, newBody);
                setIsBodyEdit(false);
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
              onClick={() => setIsBodyEdit(false)}
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
        <div className="flex justify-between mt-5">
          <p className="w-96 h-96 p-5 overflow-y-auto rounded bg-white">
            {body}
          </p>
          <button
            onClick={() => setIsBodyEdit(true)}
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
export default articleBody;
