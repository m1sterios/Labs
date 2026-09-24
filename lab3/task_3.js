"use strict";

const ipToInt = (ip = "127.0.0.1") => {
  let ip_array = ip.split(".");

  for (let i = 0; i < ip_array.length; i++) {
    ip_array[i] = parseInt(ip_array[i]);
  }

  return (
    (((ip_array[0] << 8) << 8) << 8) +
    ((ip_array[1] << 8) << 8) +
    (ip_array[2] << 8) +
    ip_array[3]
  );
};

console.log(ipToInt());
console.log(ipToInt("10.0.0.1"));
console.log(ipToInt("192.168.1.10"));
console.log(ipToInt("165.225.133.150"));
console.log(ipToInt("0.0.0.0"));
console.log(ipToInt("8.8.8.8"));
