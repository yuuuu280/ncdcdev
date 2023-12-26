import Image from 'next/image';
import Link from 'next/link';

const articleNavigation = () => {
  return (
    <div className="h-screen pt-30 -mt-7 mx-40 w-80 border-r">
      <div className="flex pt-7">
        <Image src={'/logo.svg'} width={32} height={32} alt="logo"></Image>
        <h1 className="ml-1 text-2xl font-bold">ServiceName</h1>
      </div>
      <nav className="mt-5">
        <ul className="text-base">
          <li className="flex justify-between p-2.5 rounded font-bold bg-gray-100 text-blue-500">
            <Link href="">こころ</Link>
            <Image src="/delete.svg" width={20} height={20} alt="delete"></Image>
          </li>
          <li className="flex justify-between p-2.5">
            <Link href="">坊っちゃん</Link>
            <Image src="/delete.svg" width={20} height={20} alt="delete"></Image>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-0 py-2.5 px-10 bg-gray-100">
        <div className="flex">
          <button className="w-24 h-10 rounded text-xs border border-blue-500 bg-white">
            <Image className="mx-auto" src="/+.svg" width={20} height={20} alt="plus"></Image>
            <p className="text-blue-500">New Page</p>
          </button>
          <button className="w-24 h-10 ml-12 rounded text-xs bg-blue-500">
            <Image className="mx-auto" src="/done.svg" width={20} height={20} alt="done"></Image>
            <p className="text-white">Done</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default articleNavigation;
