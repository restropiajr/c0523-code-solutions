import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { MouseEvent } from 'react';

type AppDrawerProps = {
  menuItems: { uuid: string; item: string }[];
  onClickMenu: (menuItem: string) => void;
};

export default function AppDrawer({ menuItems, onClickMenu }: AppDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnClick(event: MouseEvent<HTMLDivElement>) {
    if (event.currentTarget.id === 'toggler') {
      setIsOpen((prevIsOpen) => {
        return true;
      });
    } else if (event.currentTarget.id === 'menuOverlay') {
      setIsOpen((prevIsOpen) => {
        return false;
      });
    }
  }

  function handleOnClickMenu(menuItem: string) {
    setIsOpen((prevIsOpen) => {
      return false;
    });
    onClickMenu(menuItem);
  }

  return (
    <>
      <div
        id="toggler"
        className="toggler m-4 cursor-pointer w-10 flex justify-center transition rounded-lg duration-200 ease-in-out hover:bg-red-500"
        onClick={handleOnClick}>
        <GiHamburgerMenu size={32} color="white" />
      </div>

      <div
        id="menuOverlay"
        className={`menu-overlay bg-gray-500 bg-opacity-50 absolute inset-0 z-0 transition-transform duration-200 ease-in-out ${
          isOpen
            ? 'translate-x-0 pointer-events-all'
            : '-translate-x-full pointer-events-none'
        }`}
        onClick={handleOnClick}></div>

      {isOpen && (
        <div className="menu-content p-4 w-1/4 absolute inset-0 z-10 bg-white ring-4 ring-gray-600">
          <h2 className="menu-header mb-4 text-2xl font-bold text-black">
            Menu
          </h2>
          <ul className="menu-items">
            {menuItems.map(({ uuid, item }) => (
              <li
                onClick={() => handleOnClickMenu(item)}
                key={uuid}
                className="menu-item mb-4 text-black cursor-pointer rounded-lg p-3 transition duration-200 ease-in-out hover:bg-red-500">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
