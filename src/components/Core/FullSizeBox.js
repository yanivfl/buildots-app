const FullSizeBox = ({ children, className, ...styledProps }) => (
  <div
    className={className}
    style={{
      overflow: 'hidden', display: 'flex', width: '100%', height: '100%', ...styledProps,
    }}
  >
    {children}
  </div>
);

export { FullSizeBox };
