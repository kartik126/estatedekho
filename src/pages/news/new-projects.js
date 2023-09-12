import Header from 'components/header/Header';
import { SEO } from 'components/seo';
import { useRouter } from 'next/router';
import React from 'react';
import apiClient from 'utils/apiClient';
import { DOMAIN } from 'utils/constant';
import { isProdEnv } from 'utils/helpers';
import ReactPaginate from 'react-paginate';
import Menu from './Menu';
import NewsCard from './NewsCard';
import { SiteLinksSearchBoxJsonLd } from 'next-seo';
import Schema, { makeOrganizationalSchema } from 'components/schema';

function Projects({ projects, currentPage, totalPages }) {
  const router = useRouter();

  const [projectsData, setprojects] = React.useState(projects);
  const [currentPageNo, setcurrentPageNo] = React.useState(0);

  const getProjectsData = () => {
    let response = apiClient.get(
      `${apiClient.Urls.projectNews}?page=${currentPageNo}&records=15`
    );
    response.then((result) => {
      console.log(result.projects.data);
      if (result) {
        setprojects(result.projects.data);
      } else {
        setprojects([]);
      }
    });
  };

  // Function to handle page change when the user clicks on a page number in the pagination component
  const handlePageChange = ({ selected }) => {
    const nextPage = selected + 1;
    setcurrentPageNo(nextPage);
  };

  React.useEffect(() => {
    getProjectsData();

    window.scroll(0, 0);
  }, [currentPageNo]);

  return (
    <>
      <SEO
        title={'Real Estate Property Blog | Estatedekho'}
        description={
          'Find Latest Real Estate Property News and Market Insights at Property Pulse - Estatedekho.com'
        }
        keywords={
          'real estate insights, real estate industry news, real estate news, real estate market insights, About Real estate.'
        }
        canonical={DOMAIN}
        // image={iypDefaultIcon}
      />
      {isProdEnv() && (
        <>
          <SiteLinksSearchBoxJsonLd
            url={DOMAIN}
            potentialActions={[
              {
                target: `${DOMAIN}/search?searchTerm`,
                queryInput: 'search_term_string',
              },
            ]}
          />
          <Schema
            structuredData={makeOrganizationalSchema({
              name: 'EstateDekho',
              url: DOMAIN,
              logo: `${DOMAIN}/images/new/logo/dark.svg`,
              email: 'info@estatedekho.com',
              telephone: '8247269476',
              description: 'Real Estate in Hyderabad',
              contactPoint: [
                {
                  telephone: '8247269476',
                  contactType: 'technical support',
                },
              ],
            })}
          />
        </>
      )}

      <div>
        <div className="d-flex justify-content-center">
          <Header HorizontalSpace={true} />
        </div>
        <Menu />
        <div className="news-container">
          <div className="row d-flex flex-row justify-content-between">
            {projectsData?.map((newsItem, index) => {
              return <NewsCard key={index} newsItem={newsItem}/>
            })}
          </div>
          {/* Pagination */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

export async function getServerSideProps(context) {
  const { pageNum = 1 } = context.query;

  try {
    const response = await apiClient.get(
      `${apiClient.Urls.projectNews}?page=${pageNum}&records=10`
    );

    const totalPages = response.projects.last_page || 1;

    if (response.blogs) {
      const projects = response.projects.data.map((b) => b);
      return {
        props: {
          projects,
          currentPage: parseInt(pageNum, 10),
          totalPages,
        },
      };
    } else {
      return {
        props: {
          projects: [],
          currentPage: parseInt(pageNum, 10),
          totalPages: 1,
        },
      };
    }
  } catch (error) {
    console.error('Error fetching news list:', error);
    return {
      props: {
        projects: [],
        currentPage: parseInt(pageNum, 10),
        totalPages: 1,
      },
    };
  }
}
