import React from 'react';
import classNames from 'classnames';

const Card = ({ title, value, icon, bgColor }) => {
  return (
    <div className={classNames('p-4 rounded-lg shadow-md text-white', bgColor)}>
      <div className="flex items-center">
        <div className="mr-4 text-4xl">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
