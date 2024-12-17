import { FC, PropsWithChildren } from 'react';

const Badges: FC<PropsWithChildren<AlphaElements.BadgesProps>> = ({ properties, actions }) => {
  const { Renderer, ...rest } = properties;

  return (
    <div className="badge-container">
      <Renderer properties={rest} actions={actions} />
    </div>
  );
};

export default Badges;
