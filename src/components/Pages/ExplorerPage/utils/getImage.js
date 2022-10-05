import { LATEST_DATE } from '../../../../constants';

const getImage = ({ date, apartmentName, apartments }) => {
  if (!apartments || !date || !apartmentName) {
    return null;
  }
  const requestedApartment = apartments.find((_apartment) => _apartment.name === apartmentName);

  if (!requestedApartment) {
    return null;
  }

  let requestedDate = date;
  // find the latest date
  if (date === LATEST_DATE) {
    requestedDate = requestedApartment.images.reduce((latest, { date: curr }) => {
      if (!latest) {
        return curr;
      }
      return latest > curr ? latest : curr; // TODO format dates and compare
    }, null);
  }
  const requestedImage = requestedApartment.images.find((image) => image.date === requestedDate);
  return requestedImage;
};

export { getImage };
