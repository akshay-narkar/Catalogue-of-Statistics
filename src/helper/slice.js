export default function slice(playerinfo) {
  const { dateOfBirth } = playerinfo;
  let dob = null;
  if (typeof (dateOfBirth) === 'string') {
    dob = dateOfBirth.substring(0, 10);
  }
  return dob;
}
