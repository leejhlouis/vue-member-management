export default {
  provinces({ regions }) {
    return regions.filter((region) => region.type === 'PROVINCE');
  },
  cities:
    ({ regions }) =>
    (code = null) =>
      regions.filter((region) =>
        !code ? region.type === 'CITY' : region.type === 'CITY' && region.parentCode === code,
      ),
};
