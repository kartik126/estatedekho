import moment from 'moment';
import React, { useState } from 'react';

function Faq({ data, basePriceConvert }) {
  const [index, setindex] = useState(0);
  return (
    <>
      <div
        className="d-flex justify-content-center row faq-main "
        style={{ margin: '80px 0' }}
      >
        <div
          className="col-sm-11 faq-contain"
          style={{ border: ' 2px solid rgb(228 228 228)' }}
        >
          <h1>Frequent Asked Questions</h1>
          <div className="d-flex justify-content-center pb-5">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Where is {data?.society?.prop_title} located?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    The {data?.society?.prop_title} is located in{' '}
                    <strong>
                      {' '}
                      {data?.society?.address_locality},{' '}
                      {data?.society?.address_city}
                    </strong>
                  </div>
                </div>
              </div>
              {data?.properties?.map((key, ind) => {
                return (
                  <>
                    <div className="accordion-item">
                      <h2 className="accordion-header " id="headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#b${ind}`}
                          aria-expanded="true"
                          aria-controls={`b${ind}`}
                        >
                          What is the price of{' '}
                          {key.bedrooms && key.bedrooms + ' BHK in'}{' '}
                          {data?.society?.prop_title} ?
                        </button>
                      </h2>
                      <div
                        id={`b${ind}`}
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          The price of{' '}
                          {key.bedrooms && key.bedrooms + ' BHK in'}{' '}
                          {data?.society?.prop_title} is starting from{' '}
                          <strong>
                            {data?.properties[ind]?.prop_cost ? (
                              <>
                                {basePriceConvert(
                                  data?.properties[ind]?.prop_cost
                                )}
                              </>
                            ) : (
                              <>
                                {basePriceConvert(
                                  data?.pricing?.price_per_unit *
                                    (data?.properties[ind].built_up_area ||
                                      data?.properties[index].carpet_area ||
                                      data?.properties[index]
                                        .super_builtup_area)
                                )}
                              </>
                            )}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What are the possession status and possession date of{' '}
                    {data?.society?.prop_title}?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    The possession status of {data?.society?.prop_title}{' '}
                    {data?.uc_date ? (
                      <>
                        {moment(data?.uc_date, 'DD/MM/YYYY').isBefore(moment())
                          ? 'is Ready to Move'
                          : 'is Under Construction and is available for possession in/from ' +
                            moment(data?.uc_date, 'DD/MM/YYYY').format(
                              'MMM YYYY'
                            )}
                      </>
                    ) : (
                      'Ready to Move'
                    )}
                  </div>
                </div>
              </div>
              {data?.properties?.map((key, ind) => {
                return (
                  <>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#a${ind}`}
                          aria-expanded="false"
                          aria-controls={`a${ind}`}
                        >
                          How much is the total area of{' '}
                          {key.bedrooms && key.bedrooms + ' BHK in '}
                          {data?.society?.prop_title}?
                        </button>
                      </h2>
                      <div
                        id={`a${ind}`}
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          The total{' '}
                          {(data?.properties?.[ind]?.built_up_area &&
                            'builtup area') ||
                            (data?.properties?.[ind]?.carpet_area &&
                              'carpet area') ||
                            (data?.properties?.[ind]?.super_builtup_area &&
                              'super builtup') ||
                            (data?.properties?.[ind]?.plot_area &&
                              'plot area')}{' '}
                          of {key.bedrooms && key.bedrooms + ' BHK in '}
                          {data?.society?.prop_title} is{' '}
                          <strong>
                            {data?.properties?.[ind]?.built_up_area ||
                              data?.properties?.[ind]?.carpet_area ||
                              data?.properties?.[ind]?.super_builtup_area ||
                              data?.properties?.[ind].plot_area}{' '}
                            {
                              data?.properties?.[ind]?.pricing
                                .price_per_unit_type
                            }
                          </strong>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
