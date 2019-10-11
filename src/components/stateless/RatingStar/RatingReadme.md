```javascript
import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';

const RatingStar = (props) => (
  <Rating icon='star' rating={props.rating} maxRating={props.maxRating} disabled />
);

RatingStar.prototype = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number.isRequired,
};

export default RatingStar;

```
