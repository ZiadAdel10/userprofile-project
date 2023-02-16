function Address({ address }) {
  const { street, city, state, country, postcode } = address;
  return (
    <p>
      {street.number} {street.name}, {city}, {state}, {country} {postcode}
    </p>
  );
}

export default Address;
