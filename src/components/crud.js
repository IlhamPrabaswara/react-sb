import React from "react"

var daftarBuah = [
    { nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    { nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
    { nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
    { nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
    { nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 }
]

export default function CRUD() {
    return (
        <>
            <h1>Daftar Harga Buah</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga Total</th>
                        <th>Berat Total</th>
                        <th>Harga per kg</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        daftarBuah.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.hargaTotal}</td>
                                    <td>{item.beratTotal / 1000} kg</td>
                                    <td>{item.hargaTotal / (item.beratTotal / 1000)}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}