import React from 'react';

const Badges: React.FC<AlphaElements.BadgesProps> = ({ properties, actions }) => {
  const { renderer: Renderer, ...rest } = properties;

  return (
    <div className="badge-container">
      <Renderer properties={rest} actions={actions} />
    </div>
  );
};

export default Badges;
