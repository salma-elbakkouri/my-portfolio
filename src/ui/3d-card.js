import React from 'react';
import PropTypes from 'prop-types';

// CardContainer component
export const CardContainer = ({ children, className }) => {
  return <div className={`card-container ${className}`}>{children}</div>;
};

// CardBody component
export const CardBody = ({ children, className }) => {
  return <div className={`card-body ${className}`}>{children}</div>;
};

// CardItem component
export const CardItem = ({ children, className, translateZ, rotateX, rotateZ, as: Component = 'div', ...props }) => {
  const style = {
    transform: `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`,
  };
  return (
    <Component className={`card-item ${className}`} style={style} {...props}>
      {children}
    </Component>
  );
};

// Default props and PropTypes for CardItem
CardItem.defaultProps = {
  translateZ: 0,
  rotateX: 0,
  rotateZ: 0,
};

CardItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  translateZ: PropTypes.number,
  rotateX: PropTypes.number,
  rotateZ: PropTypes.number,
  as: PropTypes.elementType,
};