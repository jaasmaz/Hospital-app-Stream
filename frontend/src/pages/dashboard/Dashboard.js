import React from "react";
import { Grid } from "@material-ui/core";

import { Typography } from "../../components/Wrappers/Wrappers";
import BigStat from "./components/BigStat/BigStat";
import docBanner from "../../images/doctor-banner.png";
import coronaCrd from "../../images/corona.png";
import recoverCrd from "../../images/recover-case.png";
import activeCrd from "../../images/active-case.png";
import deathCrd from "../../images/deths-case.png";
import testCrd from "../../images/testing-case.png";
import bedsCrd from "../../images/beds-avail.png";
import graphImg01 from "../../images/graph-img01.png";
import graphImg02 from "../../images/graph-img02.png";

export default function Dashboard () {
  return (
    <>
      <div className='dash-wrap'>
        <div className='analytic-overview'>
          <Typography size='xl' weight='medium' component='h2'>
            Analytics Overview
          </Typography>
          <Grid container spacing={4}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className='details'>
                <div className='info'>
                  <Typography size='md' weight='bold' component='h4'>
                    Northwestern Memorial Hospital
                  </Typography>
                  <Typography size='lg' weight='400'>
                    251 Huron St, Chicago, IL 60611, United State
                  </Typography>
                  <div className='hospital-staff'>
                    <div className='staff'>
                      <i className='icn'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='user'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                          class='svg-inline--fa fa-user fa-w-14 fa-2x'
                        >
                          <path
                            fill='#fff'
                            d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'
                            class=''
                          ></path>
                        </svg>
                      </i>
                      <div className='txt'>
                        <span>Total doctors</span>
                        <strong>3.8k</strong>
                      </div>
                    </div>
                    <div className='staff'>
                      <i className='icn'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='city'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 640 512'
                          class='svg-inline--fa fa-city fa-w-20 fa-2x'
                        >
                          <path
                            fill='#fff'
                            d='M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z'
                            class=''
                          ></path>
                        </svg>
                      </i>
                      <div className='txt'>
                        <span>Number of cities</span>
                        <strong>21</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <figure>
                  <img src={docBanner} alt='banner' />
                </figure>
              </div>
            </Grid>
          </Grid>
        </div>
        <Typography size='xl' weight='medium' component='h2'>
          Hospital Status
        </Typography>
        <Grid container spacing={4}>
          <Grid item md={3} sm={4} xs={12} className='xxxxx'>
            <div className='card-item-wrp'>
              <BigStat
                icnImg={coronaCrd}
                countNum='289.2k'
                countTxt='Corona Cases'
              />
            </div>
            <div className='card-item-wrp recored-crd'>
              <BigStat
                icnImg={recoverCrd}
                countNum='98.7k'
                countTxt='Recovered'
              />
            </div>
          </Grid>
          <Grid item md={3} sm={4} xs={12} className='xxxxx'>
            <div className='card-item-wrp add-graph'>
              <BigStat
                icnImg={activeCrd}
                countNum='96.3k'
                countTxt='Active Cases'
                graphImg={graphImg01}
              />
            </div>
          </Grid>
          <Grid item md={3} sm={4} xs={12} className='xxxxx'>
            <div className='card-item-wrp pink-card'>
              <BigStat icnImg={deathCrd} countNum='23.6k' countTxt='Deaths' />
            </div>
            <div className='card-item-wrp'>
              <BigStat
                icnImg={testCrd}
                countNum='321.4k'
                countTxt='Testing Done'
              />
            </div>
          </Grid>
          <Grid item md={3} sm={4} xs={12} className='xxxxx'>
            <div className='card-item-wrp add-graph'>
              <BigStat
                icnImg={bedsCrd}
                countNum='2.8k'
                countTxt='Beds Available'
                graphImg={graphImg02}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
