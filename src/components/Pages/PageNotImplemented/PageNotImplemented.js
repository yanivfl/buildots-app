import { FullSizeBox } from '../../Core';

const PageNotImplemented = ({ page }) => {
  const pageName = page.label;
  const message = `[${pageName}] not implemented yet`;
  return (
    <FullSizeBox justifyContent="center" alignItems="center" fontWeight="bold">
      {message}
    </FullSizeBox>
  );
};

export { PageNotImplemented };
