"use client";

import clsx from "clsx";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import CaretDownFillIcon from "@/public/icons/caret_down_fill.svg";

type Menu = {
  title: string;
};

// TODO: 从 natigation 表获取菜单
const menus: Menu[] = [
  { title: "Our Service" },
  { title: "How We Work" },
  { title: "Tech Stack" },
  { title: "Contact Us" },
  { title: "Our Product" },
  { title: "Frequently Questions" },
];

type FinalMenu = Menu & { href: string };

const getHref = (menu: Menu) =>
  `#${menu.title.toLowerCase().replace(/\s/g, "-")}`;

const Menu = () => {
  const menuListRef = useRef<HTMLUListElement>(null);
  const moreBtnRef = useRef<HTMLButtonElement>(null);
  const [visibleCount, setVisibleCount] = useState(menus.length);

  const itemSizes = useRef<number[]>([]);

  const [moreBtnWidth, setMoreBtnWidth] = useState(53);

  const handleResize = useCallback(() => {
    const menu = menuListRef.current;
    if (!menu) {
      return;
    }

    if (itemSizes.current.length === 0) {
      menu.querySelectorAll("li").forEach((child, i) => {
        if (i + 1 > menus.length) {
          return;
        }
        itemSizes.current[i] = child.offsetWidth + 50;
      });
    }

    const maxWidth = menu.offsetWidth;
    let totalWidth =
      itemSizes.current.reduce((acc, cur) => acc + cur, 0) > maxWidth
        ? moreBtnRef.current!.offsetWidth
        : 0;
    let count = 0;

    // 计算可以显示的菜单项数量
    itemSizes.current.forEach((width, index) => {
      totalWidth += width;
      if (totalWidth <= maxWidth) {
        count = index + 1;
      }
    });

    setVisibleCount(count);
    setMoreOpen(false);
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    // 当点击空白处时关闭“更多”菜单
    if (!moreBtnRef.current!.contains(e.target as Node)) {
      setMoreOpen(false);
    }
  }, []);

  useLayoutEffect(() => {
    setMoreBtnWidth(moreBtnRef.current!.offsetWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick, handleResize]);

  const [moreOpen, setMoreOpen] = useState(false);
  const handleClickMore = () => setMoreOpen((prev) => !prev);

  const moreVisible = useMemo(
    () => visibleCount !== menus.length,
    [visibleCount]
  );

  const finalMenus = useMemo(
    () =>
      menus.map((menu) => ({
        ...menu,
        href: getHref(menu),
      })),
    []
  );

  const [active, setActive] = useState<string>(finalMenus[0].href);

  useEffect(() => {
    setActive(window.location.hash.replace(/^#/, ""));
  }, []);

  const handleMenuClick = (menu: FinalMenu) => {
    setActive(menu.href);
  };

  return (
    <>
      <div className="flex-grow overflow-hidden ml-10">
        <nav>
          <ul
            className="flex justify-end"
            style={moreVisible ? {} : { marginRight: -moreBtnWidth }}
            ref={menuListRef}
          >
            {finalMenus.map((menu, index) => (
              <li
                key={menu.title}
                className={clsx("py-[19px] mr-[50px]", {
                  hidden: visibleCount <= index,
                })}
              >
                <a
                  className="py-2 whitespace-nowrap"
                  href={menu.href}
                  onClick={() => handleMenuClick(menu)}
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <li>
              <button
                ref={moreBtnRef}
                className={clsx("py-[19px] flex items-center", {
                  "opacity-0": !moreVisible,
                })}
                onClick={handleClickMore}
              >
                More <CaretDownFillIcon className="ml-1.5" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={clsx(
          "absolute top-[70px] right-0 bg-white z-10 w-[264px] rounded-lg border border-[rgba(55,62,77,0.13)] shadow-[0px_15px_44px_-1px_rgba(55,62,77,0.13)] transition-[opacity,transform] p-2.5",
          moreOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none translate-y-2"
        )}
      >
        <ul>
          {finalMenus.slice(visibleCount).map((menu) => (
            <li key={menu.title}>
              <a
                className={clsx(
                  "p-[20px] block hover:bg-[#F0F4ED] rounded hover:text-[#1F9D55]",
                  {
                    "bg-[#F0F4ED] text-[#1F9D55]": active === menu.href,
                  }
                )}
                href={menu.href}
                onClick={() => handleMenuClick(menu)}
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
