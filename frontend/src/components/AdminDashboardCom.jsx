import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  // const router = useRouter();
  // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  // const logout = () => {
  //   localStorage.removeItem('token');
  //   router.push('/login');
  // };

  return (
    <div className="flex">
      <div className="w-64 h-screen bg-gray-800 text-white p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
          <nav>
            {/* <Link href="/adminpage" className="block py-2.5 px-4 rounded hover:bg-gray-700">
              Adminpage
            </Link> */}
            <Link href="/products" className="block py-2.5 px-4 rounded hover:bg-gray-700">
              AdminProducts
            </Link>
            <Link href="/categories" className="block py-2.5 px-4 rounded hover:bg-gray-700">
              AdminCategories
            </Link>
            <Link href="/" className="block py-2.5 px-4 rounded hover:bg-gray-700">
              Public Site
            </Link>
          </nav>
        </div>
        {/* <div>
          {token ? (
            <button onClick={logout} className="w-full py-2.5 px-4 bg-red-600 rounded hover:bg-red-500">
              Logout
            </button>
          ) : (
            <Link href="/login" className="block py-2.5 px-4 bg-green-600 rounded hover:bg-green-500 text-center">
              Login
            </Link>
          )}
        </div> */}
      </div>

      <div className="flex-1 p-10 bg-black">
        <h2 className="text-3xl font-bold mb-4">Admin Page</h2>
        <p>This page is only used for Admin of the Site.</p>
      </div>
    </div>
  );
};

export default Sidebar;
