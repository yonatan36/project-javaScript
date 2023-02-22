class User {
  name;
  lastName;
  state;
  city;
  country;
  email;
  phone;
  houseNumber;
  password;
  zipCode;
  street;
  id;
  constructor(
    name,
    lastName,
    state,
    city,
    country,
    email,
    phone,
    houseNumber,
    password,
    zipCode,
    street,
    id
  ) {
    this.name = name;
    this.lastName = lastName;
    this.state = state;
    this.city = city;
    this.country = country;
    this.email = email;
    this.phone = phone;
    this.houseNumber = houseNumber;
    this.password = password;
    this.zipCode = zipCode;
    this.street = street;
    this.isAdmin = false;
    this.id = id;
  }
}
export default User;
