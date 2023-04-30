/**
 * Get the name of the targeted location
 *
 * @param {Node} node - HTML node
 * @returns {string} Name of the location
 */
export function getLocationName(node) {
  return node && node.attributes.name.value
}

/**
 * Get the name of the selected location
 *
 * @param {Object} map - Map of component
 * @param {string} locationId - Id of selected location
 * @returns {string} Name of the selected location
 */
export function getSelectedLocationName(map, locationId) {
  return locationId && map.locations.find(location => location.id === locationId).name
}

/**
 * Set localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  return window.localStorage.setItem(name, content)
}

/**
 * Get localStorage
 */
export const getStore = (name) => {
  if (!name) return
  return localStorage.getItem(name)
}

/**
 * Clear localStorage
 */
export const removeItem = (name) => {
  if (!name) return
  return window.localStorage.removeItem(name)
}

/**
 * Clearr All Storage
 */
export const clearAllItem = () => {
  return window.localStorage.clear();
}

/**
 * The function converts a number into a formatted Indonesian Rupiah currency string.
 * @param number - The number that needs to be formatted as Indonesian Rupiah currency.
 * @returns a formatted string of the input number as Indonesian Rupiah currency. If the input is falsy
 * (e.g. undefined, null, 0), it returns the input number as is.
 */
export const rupiah = (number) => {
  if (number) {
    var rupiah = "";
    var numberrev = number.toString().split("").reverse().join("");
    for (var i = 0; i < numberrev.length; i++)
      if (i % 3 === 0) rupiah += numberrev.substr(i, 3) + ".";
    return (
      "Rp. " + rupiah.split("", rupiah.length - 1).reverse().join("")
    );
  } else {
    return number;
  }
}

export const terbilang = (angka) => {

  var bilne = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];

  if (angka < 12) {

    return bilne[angka];

  } else if (angka < 20) {

    return terbilang(angka - 10) + " belas";

  } else if (angka < 100) {

    return terbilang(Math.floor(parseInt(angka) / 10)) + " puluh " + terbilang(parseInt(angka) % 10);

  } else if (angka < 200) {

    return "seratus " + terbilang(parseInt(angka) - 100);

  } else if (angka < 1000) {

    return terbilang(Math.floor(parseInt(angka) / 100)) + " ratus " + terbilang(parseInt(angka) % 100);

  } else if (angka < 2000) {

    return "seribu " + terbilang(parseInt(angka) - 1000);

  } else if (angka < 1000000) {

    return terbilang(Math.floor(parseInt(angka) / 1000)) + " ribu " + terbilang(parseInt(angka) % 1000);

  } else if (angka < 1000000000) {

    return terbilang(Math.floor(parseInt(angka) / 1000000)) + " juta " + terbilang(parseInt(angka) % 1000000);

  } else if (angka < 1000000000000) {

    return terbilang(Math.floor(parseInt(angka) / 1000000000)) + " milyar " + terbilang(parseInt(angka) % 1000000000);

  } else if (angka < 1000000000000000) {

    return terbilang(Math.floor(parseInt(angka) / 1000000000000)) + " trilyun " + terbilang(parseInt(angka) % 1000000000000);

  }

}