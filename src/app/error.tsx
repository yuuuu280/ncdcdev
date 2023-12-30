"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div>
      <h2>エラーが発生しました！</h2>
      <Link href="/">トップに戻る</Link>
    </div>
  );
}
