import React from 'react';
import PropTypes from 'prop-types';

export default function useDetectFonts() {

  return (<React.Fragment></React.Fragment>);
};

useDetectFonts.propTypes = {
  /** Font object passed in */
  fonts: PropTypes.shape({
    /** name of font to display */
    name: PropTypes.string.isRequired,
  }),
  /** String for use in font detection (default is 'abcdefghijklmnopqrstuvwxyz0123456789') */
  testString: PropTypes.string,
  /** Baseline font (default is 'monospace') */
  baselineFont: PropTypes.string,
  /** Return message if no fonts detected (default is 'none detected') */
  noneDetectedMsg: PropTypes.string,
};

useDetectFonts.propDefaults = {
  testString: 'abcdefghijklmnopqrstuvwxyz0123456789',
  baselineFont: 'monospace',
  noneDetectedMsg: 'none detected',
};