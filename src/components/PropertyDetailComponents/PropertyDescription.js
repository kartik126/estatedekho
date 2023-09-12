import React from 'react';

function PropertyDescription({ data }) {
  return (
    <>
      <div className="row every-details">
        <div className="col">
          {data?.society?.prop_type != 'Plot' ? (
            <h1 className="property-details-heading">
              Property <span style={{ fontWeight: '600' }}>Details</span>{' '}
            </h1>
          ) : (
            <h1 className="property-details-heading">
              Plot <span style={{ fontWeight: '600' }}>Details</span>{' '}
            </h1>
          )}
        </div>
        <div>
          <div className="col ">
            {/* {data?.society?.prop_type != 'Plot' ? (
              data?.society?.prop_type == 'Farm Land' ? (
                <p>
                  The magnificent {data?.society.prop_title} farmland that is
                  smartly located in {data?.society.address_locality}{' '}
                  {data?.society.address_city} is a well-maintained land, where
                  the entire life is around greenery and near to the nature.
                  Purchasing the farmlands from {data?.client.client_name} is
                  one of the best investment for your better future returns. It
                  has huge potential of development with rich natural resources
                  and industries surrounding it. The farmland is reasonably
                  priced within the range of
                  {data?.pricing ? (
                    <>
                      {' '}
                      {data?.pricing?.base_cost >= 10000000 ? (
                        <>
                          <span
                            style={{
                              fontFamily: "'Noto Sans', sans-serif",
                              fontWeight: '600',
                            }}
                          >
                            {' '}
                            ₹
                          </span>{' '}
                          {Math.abs(
                            data?.pricing?.base_cost / 10000000
                          ).toFixed(2)}{' '}
                          Cr
                        </>
                      ) : (
                        <>
                          <span style={{ fontFamily: 'none' }}> ₹</span>{' '}
                          {Math.abs(data?.pricing.base_cost / 100000).toFixed(
                            2
                          )}{' '}
                          Lac
                        </>
                      )}
                    </>
                  ) : (
                    <></>
                  )}{' '}
                  .The base size of farmland starting from {data?.plot_area}{' '}
                  {data?.pricing.price_per_unit_type}. This Project is fully
                  farmland. Get a glimpse of the life of greenery through
                  integrated nature experiences.
                </p>
              ) : data?.society?.prop_type == 'Villa' ? (
                <p>
                  Welcome to this lovely {data?.bedrooms}
                  -bedroom, {data?.bathrooms} bathroom villa. A total lot size
                  of{' '}
                  {(data?.built_up_area && 'Builtup area') ||
                    (data?.carpet_area && 'Carpet area') ||
                    (data?.super_builtup_area && 'Super Builtup area')}{' '}
                  of{' '}
                  {data?.built_up_area ||
                    data?.carpet_area ||
                    data?.super_builtup_area}{' '}
                  {data?.pricing.price_per_unit_type} and excellent features
                  packed into a total area – there’s plenty to love here. The
                  property enjoys a cozy back courtyard area, large living space
                  that’s built under the same roof as the main home. The home is
                  currently vacant and presented fantastically – with an
                  affordable price of {data?.pricing?.price_per_unit}/
                  {data?.pricing?.price_per_unit_type} in{' '}
                  {data?.society.address_locality} {data?.society.address_city}.
                  <br /> <br />
                  Property features: <br />•{' '}
                  {(data?.built_up_area && 'Builtup area') ||
                    (data?.carpet_area && 'Carpet area') ||
                    (data?.super_builtup_area && 'Super Builtup area')}{' '}
                  of{' '}
                  {data?.properties?.map((key, ind) => {
                    return (
                      <>
                        {key.built_up_area ||
                          key.carpet_area ||
                          key.super_builtup_area ||
                          key.plot_area}
                        {ind == data?.properties.length - 1 || ','}
                      </>
                    );
                  })}
                  {data?.pricing.price_per_unit_type}.
                  <br />• Average price :{' '}
                  <span
                    style={{
                      fontFamily: 'Noto Sans, sans-serif',
                    }}
                  >
                    {' '}
                    ₹
                  </span>{' '}
                  {data?.pricing?.price_per_unit}/
                  {data?.pricing?.price_per_unit_type}
                  <br />• {data?.bathrooms} Bathrooms
                  <br />• {data?.bedrooms} Bedrooms.
                  <br />
                </p>
              ) : (
                <p>
                  {data?.society?.prop_title} in{' '}
                  {data?.society?.address_locality}{' '}
                  {data?.society?.address_city} is the contemporary living space
                  and the {data?.bedrooms} bedrooms seamlessly integrated with a
                  spacious balcony. After a day of productivity, relax on the
                  balcony and enjoy the panoramic views of the beautiful
                  courtyard. Fulfil your culinary dreams in the open-plan,
                  modern kitchen. <br />
                  The bathrooms are well designed with concealed toilet cistern,
                  mirrored wall cabinet and ambient lighting.
                  <br /> <br />
                  Property features: <br />•{' '}
                  {(data?.built_up_area && 'Builtup area') ||
                    (data?.carpet_area && 'Carpet area') ||
                    (data?.super_builtup_area && 'Super Builtup area')}{' '}
                  of{' '}
                  {data?.properties?.map((key, ind) => {
                    return (
                      <>
                        {key.built_up_area ||
                          key.carpet_area ||
                          key.super_builtup_area ||
                          key.plot_area}
                        {ind == data?.properties.length - 1 || ','}
                      </>
                    );
                  })}{' '}
                  {data?.pricing?.price_per_unit_type}.
                  <br />• Average price : {data?.pricing?.price_per_unit}/
                  {data?.pricing?.price_per_unit_type}
                  <br />• {data?.bathrooms} Bathrooms
                  <br />• {data?.bedrooms} Bedrooms.
                  <br />
                </p>
              )
            ) : (
              <p>
                {data?.society.prop_title} is a {data?.society.prop_subtype} by{' '}
                {data?.client.client_name} which is located in{' '}
                {data?.society.address_locality}, {data?.society.address_city}.
                The land is located in a very resourceful and well established
                locality and this project offer provisions include access to
                landscaping & tree planting, storm water drains, 24*7 hours
                Security, Water Connection in every plot. It has an affordable
                price at{' '}
                {data?.pricing ? (
                  <>
                    {' '}
                    {data?.pricing.base_cost >= 10000000 ? (
                      <>
                        <span
                          style={{
                            fontFamily: "'Noto Sans', sans-serif",
                            fontWeight: '600',
                          }}
                        >
                          {' '}
                          ₹
                        </span>{' '}
                        {Math.abs(data?.pricing.base_cost / 10000000).toFixed(
                          2
                        )}{' '}
                        Cr
                      </>
                    ) : (
                      <>
                        <span style={{ fontFamily: 'none' }}> ₹</span>{' '}
                        {Math.abs(data?.pricing.base_cost / 100000).toFixed(2)}{' '}
                        Lac
                      </>
                    )}
                  </>
                ) : (
                  <></>
                )}{' '}
                with {data?.society.prop_type != 'Plot' ? <>sqft</> : <>sqyd</>}{' '}
                rate of{' '}
                <span
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: '600',
                  }}
                >
                  {' '}
                  ₹
                </span>{' '}
                {data?.pricing.price_per_unit}.
              </p>
            )} */}
            {data?.society.prop_type === 'Farm Land' && (
              <p>
                The magnificent {data?.society.prop_title} farmland that is
                smartly located in {data?.society.address_locality}{' '}
                {data?.society.address_city} is a well-maintained land, where
                the entire life is around greenery and near to the nature.
                Purchasing the farmlands from {data?.client.client_name} is one
                of the best investment for your better future returns. It has
                huge potential of development with rich natural resources and
                industries surrounding it. The farmland is reasonably priced
                within the range of
                {data?.pricing ? (
                  <>
                    {' '}
                    {data?.pricing?.base_cost >= 10000000 ? (
                      <>
                        <span
                          style={{
                            fontFamily: "'Noto Sans', sans-serif",
                            fontWeight: '600',
                          }}
                        >
                          {' '}
                          ₹
                        </span>{' '}
                        {Math.abs(data?.pricing?.base_cost / 10000000).toFixed(
                          2
                        )}{' '}
                        Cr
                      </>
                    ) : (
                      <>
                        <span style={{ fontFamily: 'none' }}> ₹</span>{' '}
                        {Math.abs(data?.pricing.base_cost / 100000).toFixed(2)}{' '}
                        Lac
                      </>
                    )}
                  </>
                ) : (
                  <></>
                )}{' '}
                .The base size of farmland starting from {data?.plot_area}{' '}
                {data?.pricing.price_per_unit_type}. This Project is fully
                farmland. Get a glimpse of the life of greenery through
                integrated nature experiences.
              </p>
            )}
            {data?.society?.prop_type === 'Plot' && (
              <p>
                {data?.society.prop_title} is a {data?.society.prop_subtype} by{' '}
                {data?.client.client_name} which is located in{' '}
                {data?.society.address_locality}, {data?.society.address_city}.
                The land is located in a very resourceful and well established
                locality and this project offer provisions include access to
                landscaping & tree planting, storm water drains, 24*7 hours
                Security, Water Connection in every plot. It has an affordable
                price at{' '}
                {data?.pricing ? (
                  <>
                    {' '}
                    {data?.pricing.base_cost >= 10000000 ? (
                      <>
                        <span
                          style={{
                            fontFamily: "'Noto Sans', sans-serif",
                            fontWeight: '600',
                          }}
                        >
                          {' '}
                          ₹
                        </span>{' '}
                        {Math.abs(data?.pricing.base_cost / 10000000).toFixed(
                          2
                        )}{' '}
                        Cr
                      </>
                    ) : (
                      <>
                        <span style={{ fontFamily: 'none' }}> ₹</span>{' '}
                        {Math.abs(data?.pricing.base_cost / 100000).toFixed(2)}{' '}
                        Lac
                      </>
                    )}
                  </>
                ) : (
                  <></>
                )}{' '}
                with {data?.society.prop_type != 'Plot' ? <>sqft</> : <>sqyd</>}{' '}
                rate of{' '}
                <span
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: '600',
                  }}
                >
                  {' '}
                  ₹
                </span>{' '}
                {data?.pricing.price_per_unit}.
              </p>
            )}
            {data?.society?.prop_type === 'Villa' && (
              <p>
                Welcome to this lovely {data?.bedrooms} bedroom,{' '}
                {data?.bathrooms} bathroom villa. A total lot size of{' '}
                {(data?.built_up_area && 'Builtup area') ||
                  (data?.carpet_area && 'Carpet area') ||
                  (data?.super_builtup_area && 'Super Builtup area')}{' '}
                of{' '}
                {data?.built_up_area ||
                  data?.carpet_area ||
                  data?.super_builtup_area}{' '}
                {data?.pricing.price_per_unit_type} and excellent features
                packed into a total area – there’s plenty to love here. The
                property enjoys a cozy back courtyard area, large living space
                that’s built under the same roof as the main home. The home is
                currently vacant and presented fantastically – with an
                affordable price of {data?.pricing?.price_per_unit}/
                {data?.pricing?.price_per_unit_type} in{' '}
                {data?.society.address_locality} {data?.society.address_city}.
                <br /> <br />
                Property features: <br />•{' '}
                {(data?.built_up_area && 'Builtup area') ||
                  (data?.carpet_area && 'Carpet area') ||
                  (data?.super_builtup_area && 'Super Builtup area')}{' '}
                of{' '}
                {data?.properties?.map((key, ind) => {
                  return (
                    <>
                      {key.built_up_area ||
                        key.carpet_area ||
                        key.super_builtup_area ||
                        key.plot_area}
                      {ind == data?.properties.length - 1 || ','}
                    </>
                  );
                })}
                {data?.pricing.price_per_unit_type}.
                <br />• Average price :{' '}
                <span
                  style={{
                    fontFamily: 'Noto Sans, sans-serif',
                  }}
                >
                  {' '}
                  ₹
                </span>{' '}
                {data?.pricing?.price_per_unit}/
                {data?.pricing?.price_per_unit_type}
                <br />• {data?.bathrooms} Bathrooms
                <br />• {data?.bedrooms} Bedrooms.
                <br />
              </p>
            )}
            {(data?.society?.prop_type === 'Apartment' ||
              data?.society?.prop_type === 'Independent House') && (
              <p>
                {data?.society?.prop_title} in {data?.society?.address_locality}{' '}
                {data?.society?.address_city} is the contemporary living space
                and the {data?.bedrooms} bedrooms seamlessly integrated with a
                spacious balcony. After a day of productivity, relax on the
                balcony and enjoy the panoramic views of the beautiful
                courtyard. Fulfil your culinary dreams in the open-plan, modern
                kitchen. <br />
                The bathrooms are well designed with concealed toilet cistern,
                mirrored wall cabinet and ambient lighting.
                <br /> <br />
                Property features: <br />•{' '}
                {(data?.built_up_area && 'Builtup area') ||
                  (data?.carpet_area && 'Carpet area') ||
                  (data?.super_builtup_area && 'Super Builtup area')}{' '}
                of{' '}
                {data?.properties?.map((key, ind) => {
                  return (
                    <>
                      {key.built_up_area ||
                        key.carpet_area ||
                        key.super_builtup_area ||
                        key.plot_area}
                      {ind == data?.properties.length - 1 || ','}
                    </>
                  );
                })}{' '}
                {data?.pricing?.price_per_unit_type}.
                <br />• Average price : {data?.pricing?.price_per_unit}/
                {data?.pricing?.price_per_unit_type}
                <br />• {data?.bathrooms} Bathrooms
                <br />• {data?.bedrooms} Bedrooms.
                <br />
              </p>
            )}
            {data?.society?.prop_kind === 'Commercial' && (
              <p>
                Welcome to {data?.society.prop_title}, a world-class, sprawling
                commercial Space located in {data?.society?.address_locality}{' '}
                {data?.society?.address_city}. The locality has smooth
                connectivity to other parts of areas in
                {data?.society?.address_city}. It offers office space at
                affordable prices. The project is well equipped with all the
                amenities to facilitate all business needs. Start earning a
                steady second income by investing in the commercial space at{' '}
                {data?.society.prop_title} and fulfill your dreams and goals!
                <br /> <br />
                Property features: <br />•{' '}
                {(data?.built_up_area && 'Builtup area') ||
                  (data?.carpet_area && 'Carpet area') ||
                  (data?.super_builtup_area && 'Super Builtup area')}{' '}
                of{' '}
                {data?.properties?.map((key, ind) => {
                  return (
                    <>
                      {key.built_up_area ||
                        key.carpet_area ||
                        key.super_builtup_area ||
                        key.plot_area}
                      {ind == data?.properties.length - 1 || ','}
                    </>
                  );
                })}{' '}
                {data?.pricing?.price_per_unit_type}.
                <br />• Average price : {data?.pricing?.price_per_unit}/
                {data?.pricing?.price_per_unit_type}
                <br />
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDescription;
