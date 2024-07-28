import React, { useState } from 'react';
import Image from 'next/image';
import profileImage from '../../../assets/thumnail.png';
import '../../../css/css-admin/adminSidebar.css';
import { MdDashboard } from 'react-icons/md';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
interface MenuItem {
    menuTitle: string;
    menuIcon: JSX.Element;
    link: string;
    subMenu: SubMenuItem[];
    active: boolean;
    open: boolean;
    dropDownIcon: JSX.Element;
}

interface SubMenuItem {
    subMenuTitle: string;
    subMenuIcon: JSX.Element;
    subMenuLink: string;
    subMenuActive: boolean;
}

const menuItems: MenuItem[] = [
  {
    menuTitle: 'Main',
    menuIcon: <MdDashboard />,
    link: '#',
    subMenu: [],
    active: true,
    open: false,
    dropDownIcon: <IoIosArrowDown />,
  },
  {
    menuTitle: 'Audience',
    menuIcon: <MdDashboard />,
    link: '#',
    subMenu: [
      {
        subMenuTitle: 'Users',
        subMenuIcon: <MdDashboard />,
        subMenuLink: '#',
        subMenuActive: false,
      },
      {
        subMenuTitle: 'Subscribers',
        subMenuIcon: <MdDashboard />,
        subMenuLink: '#',
        subMenuActive: false,
      },
    ],
    active: false,
    open: false,
    dropDownIcon: <IoIosArrowDown />,
  },
];

const AdminSidebar: React.FC = () => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menuItems);

  const handleToggle = (index: number) => {
    setMenuState((prevState) =>
      prevState.map((item, idx) =>
        idx === index ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <div className="ascontainer">
      <div className="assidebar">
        <div className="ashead">
          <div className="asuser-image">
            <Image width={30} src={profileImage} alt="No" />
          </div>
          <div className="asuser-details">
            <p className="astitle">Web Developer</p>
            <p className="asname">Rahul Rai</p>
          </div>
        </div>
        <div className="asnav">
          {menuState.map((menuItem, index) => (
            <div className="asmenu" key={index}>
              <p className="astitle">{menuItem.menuTitle}</p>
              <ul>
                <li className={menuItem.active ? 'active' : ''}>
                  <a href={menuItem.link}>
                    {menuItem.menuIcon}
                    <span className="as-span-text">{menuItem.menuTitle}</span>
                    {menuItem.subMenu.length > 0 && (
                      <span onClick={() => handleToggle(index)}>
                        {menuItem.open ? (
                          <IoIosArrowUp className="arrow" />
                        ) : (
                          <IoIosArrowDown className="arrow" />
                        )}
                      </span>
                    )}
                  </a>
                  {menuItem.subMenu.length > 0 && (
                    <ul className={menuItem.open ? 'assub-menu' : 'disabled'}>
                      {menuItem.subMenu.map((subMenuItem, subIndex) => (
                        <li key={subIndex}>
                          <a href={subMenuItem.subMenuLink}>
                            {subMenuItem.subMenuIcon}
                            <span className="as-span-text">
                              {subMenuItem.subMenuTitle}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
