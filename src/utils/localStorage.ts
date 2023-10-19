// // export const setLocalStorage = (key: string, token: string) => {
// //   if (!key || typeof window === "undefined") return "";
// //   return localStorage?.setItem(key, token);
// // };

// // export const getFromLocalStorage = (key: string) => {
// //   if (!key || typeof window === "undefined") return "";
// //   return localStorage?.getItem(key);
// // };
// export const setLocalStorage = (key: string, token: string) => {

//   if (!key || typeof window === "undefined") return "";
//   return localStorage?.setItem(key, token);
// };

// export const getFromLocalStorage = (key: string) => {
//   if (!key || typeof window === "undefined") return "";
//   return localStorage?.getItem(key);
// };

// if (typeof window !== 'undefined') {
//   // Access localStorage here
// }
export const setLocalStorage = (key: string, token: string) => {
  if (!key) {
    console.error("Invalid key provided for setLocalStorage.");
    return "";
  }

  if (typeof window === "undefined") {
    console.error("Accessing localStorage in a server-side context.");
    return "";
  }

  try {
    localStorage.setItem(key, token);
  } catch (error) {
    console.error("Error setting item in localStorage:", error);
    return "";
  }
};

export const getFromLocalStorage = (key: string) => {
  if (!key) {
    console.error("Invalid key provided for getFromLocalStorage.");
    return "";
  }

  if (typeof window === "undefined") {
    console.error("Accessing localStorage in a server-side context.");
    return "";
  }

  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error("Error getting item from localStorage:", error);
    return "";
  }
};
