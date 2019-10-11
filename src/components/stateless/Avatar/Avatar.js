import React from 'react';
import PropTypes from 'prop-types';

import styles from './avatar.module.scss';

const Avatar = (props) => (
  <div className={styles.avatarWrapper}>
    <img alt="avatar" src={props.img} />
  </div>
);

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
}

export default Avatar;
