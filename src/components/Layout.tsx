import React, { useState, FC, useEffect } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Footer from "./Footer";
import SideBar from "./Sidebar";

import "../sass/main.scss";

const siteMetaDataQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

interface ILayout {
  fullMenu?: boolean;
  hasFooter?: boolean;
}

const Layout: FC<ILayout> = (props) => {
  const { children, fullMenu, hasFooter = true } = props;

  const [isPreloaded, setIsPreloaded] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPreloaded(false);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <StaticQuery
      query={siteMetaDataQuery}
      render={(data) => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: "description", content: "Solid State" },
              { name: "keywords", content: "site, web" },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <div
            className={isPreloaded ? " main-body  is-preload" : " main-body"}
          >
            <div id="page-wrapper">
              <SideBar fullMenu={fullMenu} />
              {children}

              {hasFooter && <Footer />}
            </div>
          </div>
        </>
      )}
    />
  );
};

export default Layout;
