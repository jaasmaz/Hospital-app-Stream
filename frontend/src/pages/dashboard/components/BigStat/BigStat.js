import React from "react";
import { Grid } from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";

// components
import { Typography } from "../../../../components/Wrappers/Wrappers";

export default function BigStat (props) {
  return (
    <div className='card-widget'>
      <div className='wid-head'>
        <i className='icns'>
          <img src={props.icnImg} alt='icn' />
        </i>
        <div className='txt-wrp'>
          <Typography
            className='count-num'
            size='xl'
            color='text'
            colorBrightness='secondary'
          >
            {props.countNum}
          </Typography>
          <Typography>{props.countTxt}</Typography>
        </div>
        <div className='card-arrw'>
          <Grid container alignItems='center'>
            <ArrowForwardIcon />
          </Grid>
        </div>
      </div>
      <div className='graph-blk'>
        <img src={props.graphImg} alt='graph' />
      </div>
    </div>
  );
}
