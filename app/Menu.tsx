"use client";

import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import CaretDownFillIcon from "@/public/icons/caret_down_fill.svg";

// TODO: 从 natigation 表获取菜单
const menus = [
  { title: "Our Service" },
  { title: "How We Work" },
  { title: "Tech Stack" },
  { title: "Contact Us" },
  { title: "Contact Us2" },
  { title: "Contact Us2s" },
  { title: "Contact Us2ss" },
];

const Menu = () => {
  const menuListRef = useRef<HTMLUListElement>(null);
  const moreBtnRef = useRef<HTMLButtonElement>(null);
  const [moreContainerWidth, setMoreContainerWidth] = useState<number>();

  // 第一次显示时需要等待计算“更多”按钮的宽度，防止闪烁
  const [visible, setVisible] = useState(false);

  const [moreBtnWidth, setMoreBtnWidth] = useState<number>(0);

  useEffect(() => {
    const moreBtnWidth = moreBtnRef.current!.clientWidth;
    setMoreBtnWidth(moreBtnWidth);

    // 如果菜单项显示不下时显示“更多”按钮
    const handleResize = () => {
      const menuListWidth = menuListRef.current!.clientWidth;

      // 如果可滚动的宽度小于等于可显示的宽度则表示没有溢出的菜单
      if (menuListRef.current!.scrollWidth <= menuListWidth) {
        setVisible(true);
        setMoreContainerWidth(undefined);
        return;
      }

      const menus = menuListRef.current!.querySelectorAll("li");

      let i = 0;
      let totalWidth = 0;
      let prevMenuWidth = 0;
      while (i < menus.length) {
        const menu = menus[i];

        const width = menu.clientWidth + (i === menus.length - 1 ? 0 : 50); // 加上间距

        const nextTotalWidth = totalWidth + width;

        // 如果需要的宽度大于了可显示的宽度则显示“更多”按钮
        if (nextTotalWidth > menuListWidth) {
          const moreWidthResult = menuListWidth - totalWidth;
          // 当剩余的宽度不足以显示“更多”按钮时就将上一个按钮也遮住
          setMoreContainerWidth(
            moreWidthResult < moreBtnWidth
              ? moreWidthResult + prevMenuWidth
              : moreWidthResult
          );
          setVisible(true);
          return;
        }

        totalWidth = nextTotalWidth;
        prevMenuWidth = width;
        i++;
      }
      setVisible(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleClick = (e: MouseEvent) => {
      // 当点击空白处时关闭“更多”菜单
      if (!moreBtnRef.current!.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const [moreOpen, setMoreOpen] = useState(false);
  const handleClickMore = () => setMoreOpen((prev) => !prev);

  return (
    <div className="relative grid text-sm">
      <div className="overflow-hidden">
        <nav>
          <ul
            className={clsx("flex gap-[50px] relative", {
              "opacity-0": !visible,
            })}
            ref={menuListRef}
          >
            {menus.map((menu) => (
              <li key={menu.title} className="py-[19px]">
                <a
                  className="py-2 whitespace-nowrap"
                  href={`#${menu.title.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={clsx(
          "absolute right-0 bg-white",
          moreContainerWidth ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        style={{ width: moreContainerWidth }}
      >
        <button
          ref={moreBtnRef}
          className="py-[19px] flex items-center"
          onClick={handleClickMore}
        >
          More <CaretDownFillIcon className="ml-1.5" />
        </button>
        <div
          className={clsx(
            "absolute top-[58px] bg-white z-10 w-[264px] rounded-lg border border-[rgba(55,62,77,0.13)] shadow-[0px_15px_44px_-1px_rgba(55,62,77,0.13)] transition-[opacity,transform] p-2.5",
            moreOpen ? "opacity-100" : "opacity-0 pointer-events-none translate-y-2"
          )}
          style={{
            right: moreContainerWidth
              ? moreContainerWidth - moreBtnWidth - 30
              : 0,
          }}
        >
          <ul>
            <li>
              <a className="p-[20px] block hover:bg-[#F0F4ED] rounded hover:text-[#1F9D55]">111</a>
            </li>
            <li>
              <a className="p-[20px] block hover:bg-[#F0F4ED] rounded hover:text-[#1F9D55]">111</a>
            </li>
            <li>
              <a className="p-[20px] block hover:bg-[#F0F4ED] rounded hover:text-[#1F9D55]">111</a>
            </li>
            <li>
              <a className="p-[20px] block hover:bg-[#F0F4ED] rounded hover:text-[#1F9D55]">111</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
