import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  // Function to determine if a link is active
  const isActive = (pathname) => router.pathname === pathname;

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/Login')
  };

  return (
    <div className="flex">
      <div className="w-55 h-screen bg-gray-800 text-white p-4 flex flex-col justify-between fixed top-0 left-0">
        <div>
          <h2 className="text-2xl mb-6">Admin Panel</h2>
          <nav>
            <Link href="/admindashboard">
              <div className={`block py-2.5 px-4 rounded ${isActive('/admindashboard') ? 'bg-gray-700' : 'hover:text-red-500 px-3 py-2'}`}>
                Adminpage
              </div>
            </Link>
            <Link href="/employeepage">
              <div className={`block py-2.5 px-4 rounded ${isActive('/employeepage') ? 'bg-gray-700' : 'hover:text-red-500 px-3 py-2'}`}>
                Employee Record
              </div>
            </Link>
            <Link href="/products">
              <div className={`block py-2.5 px-4 rounded ${isActive('/products') ? 'bg-gray-700' : 'hover:text-red-500 px-3 py-2'}`}>
                AdminProducts
              </div>
            </Link>
            <Link href="/categories">
              <div className={`block py-2.5 px-4 rounded ${isActive('/categories') ? 'bg-gray-700' : 'hover:text-red-500 px-3 py-2'}`}>
                AdminCategories
              </div>
            </Link>
            <Link href="/">
              <div className={`block py-2.5 px-4 rounded ${isActive('/') ? 'bg-gray-700' : 'hover:text-red-500 px-3 py-2'}`}>
                Public Site
              </div>
            </Link>
          </nav>
        </div>
        <div>
          {token ? (
            <button onClick={logout} className="w-full py-2 px-4 bg-red-600 rounded hover:bg-red-500">
              Logout
            </button>
          ) : (
            <Link href="/Login">
              <div className="block py-2 px-4 bg-green-600 rounded hover:bg-green-500 text-center cursor-pointer">
                Login
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
