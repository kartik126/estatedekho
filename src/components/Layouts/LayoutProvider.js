import React, { ReactElement, NamedExoticComponent } from 'react';


function NoLayout({ children, ...restProps }) {
  return <>{children}</>;
}

const NoProps = (state) => ({});

const LayoutProvider = ({ children: Page, state, setPreLoader }) => {
  const PageLayout = Page.type.getLayout || NoLayout;
  const getLayoutProps = Page.type.getLayoutProps || NoProps;
  return (
    <PageLayout {...getLayoutProps(state)} setPreLoader={setPreLoader}>
      {Page}
    </PageLayout>
  );
};

export default LayoutProvider;
