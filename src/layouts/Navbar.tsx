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
            <Link className="text-red-950	font-bold" to="/">
              BOOK EATER
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
                        src="data:image/jpeg;base64,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"
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
