const sizeMap = {
  sm: { width: 90, height: 30 },
  md: { width: 110, height: 30 },
  lg: { width: 130, height: 30 },
  xl: { width: 150, height: 30 },
};

const OptionalSkin = ({ properties, actions }: AlphaElements.BadgesProps) => {
  const { id, disabled, size, count, label, checked, imageSrc, testId } = properties;
  const { onClose } = actions;
  const dimension = sizeMap[size as AlphaElements.Size] || sizeMap['md'];

  return (
    <div
      className={`relative flex items-center justify-between overflow-hidden rounded-full shadow-md ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      style={{
        width: dimension.width,
        height: dimension.height,
        background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
        padding: '0 10px',
      }}
      data-testid={testId}
    >
      <foreignObject x="4" y="4" width="18" height="18" fill="#d9d9d9">
        <input
          type="checkbox"
          checked={checked}
          style={{
            transform: 'scale(1.3)',
            marginTop: '-2px',
            pointerEvents: 'none',
            borderRadius: 10,
            backgroundColor: '#d9d9d9',
            marginRight: '3px',
          }}
        />
      </foreignObject>

      {imageSrc && (
        <div
          className="flex items-center justify-center"
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            overflow: 'hidden',
            marginRight: 10,
          }}
        >
          <img src={imageSrc} alt="Badge Icon" style={{ width: '100%', height: '100%' }} />
        </div>
      )}

      <div
        className="flex-grow text-white text-center font-medium"
        style={{
          fontSize: 12,
          marginRight: 10,
        }}
      >
        {label}
      </div>

      <div
        className="text-white text-center font-medium"
        style={{
          fontSize: 10,
          fontWeight: 600,
          backgroundColor: '#00000055',
          padding: '2px 8px',
          borderRadius: 12,
          marginRight: 10,
        }}
      >
        {count}
      </div>

      {onClose && (
        <button
          className="text-white hover:text-gray-300"
          style={{
            fontSize: 12,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => onClose(id!)}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default OptionalSkin;
