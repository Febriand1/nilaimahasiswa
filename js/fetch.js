// data array
// import { get } from "https://bukulapak.github.io/api/process.js";
// let urlAPI = "https://ws-nilai.herokuapp.com/presensinew";
// get(urlAPI, isiTablePresensi);
// function isiTablePresensi(results) {
//   console.log(results);
// }

// data row
// import { get } from "https://bukulapak.github.io/api/process.js";
// import { setInner } from "https://bukulapak.github.io/element/process.js";
// let urlAPI = "https://ws-nilai.herokuapp.com/presensinew";
// get(urlAPI, isiTablePresensi);
// function isiTablePresensi(results) {
//   console.log(results);
//   results.forEach(isiRow);
// }
// function isiRow(value) {
//   console.log(value);
// }

//menampilkan data di if
// import { get } from "https://bukulapak.github.io/api/process.js";
// import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
// import { isiTabel } from "./temp/table.js";
// let urlAPI = "https://ws-nilai.herokuapp.com/presensinew";
// get(urlAPI, isiTablePresensi);
// function isiTablePresensi(results) {
//   results.forEach(isiRow);
// }
// function isiRow(value) {
//   let content = isiTabel
//     .replace("#NAMA#", value.biodata.nama)
//     .replace("#NOHP#", value.biodata.phone_number)
//     .replace("#JABATAN#", value.biodata.jabatan)
//     .replace("#LOKASI#", value.location)
//     .replace("#STATUS#", value.checkin)
//     .replace("#HARIKERJA#", value.biodata.hari_kerja)
//     .replace("#WARNA#", getRandomColor())
//     .replace(/#WARNALOGO#/g, getRandomColorName());
//   addInner("iniTabel", content);
// }

import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePresensi } from "./controller/get.js";
import { urlAPI } from "./config/url.js";
get(urlAPI, isiTablePresensi);
