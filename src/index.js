import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import './index.css';
import Resume from './Resume';

import data from './data';
import dataExtended from './data-full';

console.log(window.location.href);

const pagePath =
  typeof window !== "undefined" ? window.location.pathname.split("/")[1] : ""

const desiredData = ((pagePath === "full") ? dataExtended : data);

ReactDOM.render(
  <PDFViewer width="100%" height="100%">
    <Resume {...desiredData} />
  </PDFViewer>,
  document.getElementById('root')
);
