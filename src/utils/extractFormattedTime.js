const extractFormattedTime = (isoDateString) => {
  const date = new Date(isoDateString);

  // Get hours and minutes from the Date object
  const hours = padZero(date.getHours()); // Ensure 2-digit format for hours
  const minutes = String(date.getUTCMinutes()).padStart(2, "0"); // Ensure 2-digit format for minutes

  // Formatted time string in hours and minutes (e.g., "03:14")
  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
};

const padZero = (number) => {
  return number.toString().padStart(2, "0");
};

export default extractFormattedTime;
