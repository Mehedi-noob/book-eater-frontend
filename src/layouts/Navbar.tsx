/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { DropdownMenuSeparator } from '../components/ui/dropdown-menu';
import { DropdownMenuLabel } from '../components/ui/dropdown-menu';
import logo from '@/assets/images/logo.png';
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../components/ui/dropdown-menu';
import { BsBookmarkStar } from 'react-icons/bs';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from '@/utils/localstorage';

export default function Navbar() {
  const user = JSON.parse(getFromLocalStorage('user-info')!);
  const handleLogOut = () => {
    removeFromLocalStorage('user-info');
    removeFromLocalStorage('access-token');
    window.location.reload();
  };
  return (
    <nav className="w-full h-24 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            <Link to="/">
              <img className="h-20 rounded-full" src={logo} alt="log" />
            </Link>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/books">Books</Link>
                </Button>
              </li>
              {user?.email && (
                <>
                  <li>
                    <Button variant="link" asChild>
                      <Link to="/add-new-book">Add New Book</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link">
                      <Link to="/wishlist">Wishlist</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link">
                      <Link to="/read-soon">Read soon</Link>
                    </Button>
                  </li>
                </>
              )}

              <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar>
                      <AvatarImage
                        className="object-contain bg-slate-800"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS946FhBVYtF2hSHPH4hy4LmvJ2JRsmWe8_EA&usqp=CAU"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {user?.name && (
                      <DropdownMenuItem className="cursor-pointer">
                        {user?.name}
                      </DropdownMenuItem>
                    )}

                    {user?.email && (
                      <DropdownMenuItem className="cursor-pointer">
                        {user?.email}
                      </DropdownMenuItem>
                    )}

                    {!user?.email && (
                      <>
                        <Link to="/login">
                          <DropdownMenuItem className="cursor-pointer">
                            Login
                          </DropdownMenuItem>
                        </Link>

                        <Link to="/signup">
                          <DropdownMenuItem className="cursor-pointer">
                            Sign Up
                          </DropdownMenuItem>
                        </Link>
                      </>
                    )}

                    {user?.email && (
                      <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => handleLogOut()}
                      >
                        Log out
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
