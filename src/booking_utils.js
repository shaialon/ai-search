export function convertStructuredFiltersToUrl(filters) {
  const baseURL = `https://www.booking.com/searchresults.html`;

  const urlParams = new URLSearchParams();

  const { location, brand = "" } = filters;
  // urlParams.append("ss", `${brand} ${location}`.trim());
  urlParams.append("ss", location);
  urlParams.append("ssne", location);
  urlParams.append("ssne_untouched", location);

  urlParams.append("lang", filters.language_IETF || "en-us");
  urlParams.append("checkin", filters.check_in_date);
  urlParams.append("checkout", filters.check_out_date);

  const { guests } = filters;
  if (guests) {
    urlParams.append("group_adults", guests.adults);
    if (guests.kids) {
      urlParams.append("group_children", guests.kids);
    }
    const kidsAges = guests.kids_ages || [];
    kidsAges.forEach((age) => {
      urlParams.append("age", age);
    });
    // urlParams.append("group_children", guests.infants);
    // no_rooms
  }
  if (filters.rooms) {
    urlParams.append("no_rooms", filters.rooms);
  }
  const nflt = [];
  if (filters.price_per_night) {
    const { lte, gte, currency } = filters.price_per_night;
    // Example for USD up to 230 per night: `USD-min-230-1;hotelfacility=4`
    const price = `price=${currency || "USD"}-${gte || "min"}-${
      lte || "max"
    }-1;`;
    nflt.push(price);
  }
  urlParams.append("nflt", nflt.join(";"));

  //   sb_travel_purpose=leisure

  return `${baseURL}?${urlParams.toString()}`;
}
