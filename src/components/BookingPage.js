import { useState } from "react"

const BookingForm = () => {
    const [date , setDate] = useState("Date")
    const [time , setTime] = useState("Time")
    const [guests , setGuests] = useState(0)
    const [occasion , setOccasion] = useState("--------")

    const [availableTimes] = useState(['17:00' , '18:00' , '19:00' , '20:00' , '21:00' , '22:00'])

    const getIsFormValid = () => {
        return (
            date !== "Date" &&
            time !== "Time" &&
            guests !== 0 &&
            occasion !== "--------"
        )
    }

    const clearForm = () => {
    setDate("")
    setTime("")
    setGuests("0")
    setOccasion("--------")
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (getIsFormValid()) {
        try {
            await fetch("https://localhost:5000/api/reservations", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({date , time , guests , occasion})
            })
        alert("Your reservation has been submitted.")
        clearForm()
        } catch (err) {
            alert("Faild to submit your reservation.")
        }
    }
    else {
        alert("Please fill all needed data.")
    }
    }
    return (
        <>
        <form className="form grid grid-cols-[0.3fr_0.3fr] p-8 h-[600px] bg-gray-500 justify-center gap-5" onSubmit={handleSubmit}>

            <label htmlFor="res-date" className="text-white text-3xl p-4">Choose Date <sup className="text-red-600">*</sup></label>
            <input type="date" id="res-date" className="w-96 text-center text-2xl rounded-3xl" required={true} value={date} onChange={(e) => setDate(e.target.value)}/>

            <label htmlFor="res-time" className="text-white text-3xl p-4">Choose Time <sup className="text-red-600">*</sup></label>
            <select id="res-time" className="w-96 text-center text-2xl rounded-3xl" required value={time} onChange={(e) => setTime(e.target.value)}>
                <option>Time</option>
                {availableTimes.map((t) =>(
                <option value={t} key={t}>{t}</option>
                ))}
            </select>

            <label htmlFor="guests" className="text-white text-4xl p-4">Number of Guests <sup className="text-red-600">*</sup></label>
            <input type="number" className="w-96 text-center text-2xl rounded-3xl" required placeholder="0" min={1} max={10} value={guests} onChange={(e) => setGuests(e.target.value)} id="guests"/>

            <label htmlFor="occasion" className="text-white text-4xl p-4">Occasion <sup className="text-red-600">*</sup></label>
            <select id="occasion" className="w-96 text-center text-2xl rounded-3xl" required value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>--------</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your Reservation" onSubmit={handleSubmit} className="subbtn bg-[#a7b01c] w-80 rounded-full text-2xl hover:bg-[#c9d311] hover:cursor-pointer"/>
        </form>
        </>
    )
}

export default BookingForm