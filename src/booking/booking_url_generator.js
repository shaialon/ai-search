import { getBookingFacilityByName } from "./booking_facilities.js";
import { logRed, logGreen } from "../utils/logger.js";

export function convertStructuredFiltersToUrl(filters) {
  const baseURL = `https://www.booking.com/searchresults.html`;

  const urlParams = new URLSearchParams();

  const { location, brand = "" } = filters;
  // urlParams.append("ss", `${brand} ${location}`.trim());
  urlParams.append("ss", location);
  urlParams.append("ssne", location);
  urlParams.append("ssne_untouched", location);

  urlParams.append("lang", filters.language_IETF?.toLowerCase() || "en");
  urlParams.append("checkin", filters.check_in_date);
  urlParams.append("checkout", filters.check_out_date);

  const { guests } = filters;
  if (guests) {
    urlParams.append("group_adults", guests.adults);
    if (guests.kids) {
      urlParams.append("group_children", guests.kids);
    }
    const kidsAges = guests.kids_ages || [];
    kidsAges.forEach(age => {
      urlParams.append("age", age);
    });
    // urlParams.append("group_children", guests.infants);
    // no_rooms
  }
  if (filters?.seprate_rooms > 1) {
    urlParams.append("no_rooms", filters.seprate_rooms);
  }
  const nflt = [];
  if (filters.price_per_night) {
    const { lte, gte, currency } = filters.price_per_night;
    // Example for USD up to 230 per night: `USD-min-230-1;hotelfacility=4`
    const price = `price=${currency || "USD"}-${gte || "min"}-${lte || "max"}-1;`;
    nflt.push(price);
    if (currency) {
      urlParams.append("selected_currency", currency);
    }
  }

  if (filters.facilities) {
    for (const facility of filters.facilities) {
      const facilityKey = getBookingFacilityByName(facility);
      if (facilityKey) {
        logGreen(facility + " : " + facilityKey + " INJECTED!");
        nflt.push(facilityKey);
      } else {
        logRed(facility + " NO MATCH!");
      }
    }
  }
  if (filters.pet_friendly) {
    nflt.push(getBookingFacilityByName("Pet friendly"));
    logGreen("Pet friendly INJECTED!");
  }
  if (filters.free_cancellation) {
    nflt.push(getBookingFacilityByName("Free cancellation"));
    logGreen("Free cancellation INJECTED!");
  }
  if (filters.bedrooms_min) {
    nflt.push(`entire_place_bedroom_count=${filters.bedrooms_min}`);
    logGreen(`Bedrooms limitation ${filters.bedrooms_min} INJECTED!`);
  }
  if (filters.bathrooms_min) {
    nflt.push(`min_bathrooms=${filters.bathrooms_min}`);
    logGreen(`Bathrooms limitation ${filters.bathrooms_min} INJECTED!`);
  }
  if (nflt.length) {
    urlParams.append("nflt", nflt.join(";"));
  }

  //   sb_travel_purpose=leisure

  return `${baseURL}?${urlParams.toString()}`;
}
