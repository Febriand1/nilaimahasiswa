import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
  results.forEach(isiRow);
}
function isiRow(value) {
  let content = isiTabel
    .replace("#NPM#", value.absensi.biodata.npm)
    .replace("#NAMA#", value.absensi.biodata.nama)
    .replace("#MATAKULIAH#", value.kategori.nama_mk)
    .replace("#DOSEN#", value.kategori.pengampu.namadosen)
    .replace("#HADIR#", value.absensi.jumlahkehadiran)
    .replace("#TUGAS1#", value.alltugas.tugas1)
    .replace("#TUGAS2#", value.alltugas.tugas2)
    .replace("#TUGAS3#", value.alltugas.tugas3)
    .replace("#TUGAS4#", value.alltugas.tugas4)
    .replace("#TUGAS5#", value.alltugas.tugas5)
    .replace("#UTS#", value.uts)
    .replace("#UAS#", value.uts)
    .replace("#GRADE#", value.grade.namagrade)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}
