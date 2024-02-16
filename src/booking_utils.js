export function convertStructuredFiltersToUrl(filters) {
  const baseURL = `https://www.booking.com/searchresults.html`;

  const urlParams = new URLSearchParams();

  urlParams.append("ss", filters.location);
  urlParams.append("ssne", filters.location);
  urlParams.append("ssne_untouched", filters.location);

  urlParams.append("lang", "en-us"); // TODO - support other languages
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
    // const price = `USD-min-230-1;hotelfacility=4`
    const price = `price=${currency || "USD"}-${gte || "min"}-${
      lte || "max"
    }-1;`;
    nflt.push(price);
  }
  if (nflt.length > 0) {
    urlParams.append("nflt", nflt.join(";"));
  }

  //   sb_travel_purpose=leisure

  return `${baseURL}?${urlParams.toString()}`;
}
