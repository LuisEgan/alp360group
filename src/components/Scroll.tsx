import smoothscroll from "smoothscroll-polyfill";
import React, { useEffect, ReactElement } from "react";

export interface IComponentWithChildren {
  children: ReactElement;
}

interface IScroll extends IComponentWithChildren {
  type: string;
  element: string;
  offset: number;
  timeout: number;
}

const Element = (props: IComponentWithChildren) => props.children;

const Scroll: React.FC<IScroll> = (props) => {
  const { children } = props;

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleClick = (e: any) => {
    e.preventDefault();
    let elem: Element = document.createElement("div");
    let scroll = true;
    const { type, element, offset, timeout } = props;

    if (type && element) {
      switch (type) {
        case "class":
          (elem = document.getElementsByClassName(element)[0]),
            (scroll = !!elem);
          scrollTo(elem, offset, timeout);
          break;
        case "id":
          elem = document.getElementById(element) as Element;
          scroll = !!elem;
          break;
        default:
      }
    }

    if (!scroll) {
      console.error(`Element not found: ${element}`);
      return;
    }

    scrollTo(elem, offset, timeout);
  };

  const scrollTo = (
    element: Element,
    offSet = 0,
    timeout: null | number = null,
  ) => {
    const elemPos = element
      ? element.getBoundingClientRect().top + window.pageYOffset
      : 0;

    if (timeout) {
      setTimeout(() => {
        window.scroll({ top: elemPos + offSet, left: 0, behavior: "smooth" });
      }, timeout);
    } else {
      window.scroll({ top: elemPos + offSet, left: 0, behavior: "smooth" });
    }
  };

  return (
    <Element>
      {typeof props.children === "object" ? (
        React.cloneElement(children, { onClick: handleClick })
      ) : (
        <span onClick={handleClick}>{props.children}</span>
      )}
    </Element>
  );
};

export default Scroll;
