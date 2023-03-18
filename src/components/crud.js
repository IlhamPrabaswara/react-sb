import React, { useState } from "react"

var daftarBuah = [
    { nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    { nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
    { nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
    { nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
    { nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 }
]

export default function CRUD() {
    const [listBuah, setListBuah] = useState(daftarBuah);
    const [inputNamaBuah, setInputNamaBuah] = useState("");
    const [inputHargaBuah, setInputHargaBuah] = useState(0);
    const [inputBeratBuah, setInputBeratBuah] = useState(2000);
    const handleNama = (e) => {
        setInputNamaBuah(e.target.value)
    }
    const handleHarga = (e) => {
        setInputHargaBuah(e.target.value)
    }
    const handleBerat = (e) => {
        setInputBeratBuah(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setListBuah([...listBuah, { nama: inputNamaBuah, hargaTotal: inputHargaBuah, beratTotal: inputBeratBuah }])
    }
    return (
        <>
            <h1>Daftar Harga Buah</h1>
            <table className="fruitTable">
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
                        listBuah.map((item, index) => {
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
            <h1>Form Daftar Harga Buah</h1>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <div className="formField">
                        <label for="nama">Nama:</label>
                        <input required type="text" name="nama" value={inputNamaBuah} onChange={handleNama} />
                    </div>
                    <div className="formField">
                        <label for="hargaTotal">Harga Total:</label>
                        <input required type="number" name="hargaTotal" value={inputHargaBuah} onChange={handleHarga} />
                    </div>
                    <div className="formField">
                        <label for="beratTotal">Berat Total (dalam gram):</label>
                        <input required min="2000" type="number" name="beratTotal" value={inputBeratBuah} onChange={handleBerat} />
                    </div>
                    <div className="formField">
                        <label></label>
                        <button>Submit</button>
                    </div>
                </form>
            </fieldset>
        </>
    )
}