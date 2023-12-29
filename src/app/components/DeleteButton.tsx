"use client";

import Image from "next/image";

type deteleButtonProps = {
  articleId: string;
  deleteCallBack: (id: string) => void;
};

const deleteButton = ({ articleId, deleteCallBack }: deteleButtonProps) => {
  return (
    <button
      onClick={() => {
        deleteCallBack(articleId);
      }}
    >
      <Image src="/delete.svg" width={20} height={20} alt="delete"></Image>
    </button>
  );
};
export default deleteButton;
