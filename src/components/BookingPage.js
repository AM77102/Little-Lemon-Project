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
    const handleSubmit = (e) => {
        e.preventDefault()
        if (getIsFormValid()) {
        console.log(`Date : ${date} , Time : ${time} , Guests : ${guests} , Occasion : ${occasion}`)
        alert("Your reservation has been submitted.")
        clearForm()
    }
    else {
        alert("Please enter valid data.")
    }
    }
    return (
        <>
        <form className="form" onSubmit={handleSubmit}>

            <label htmlFor="res-date">Choose Date <sup>*</sup></label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)}/>

            <label htmlFor="res-time">Choose Time <sup>*</sup></label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                <option>Time</option>
                {availableTimes.map((t) =>(
                <option value={t} key={t}>{t}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of Guests <sup>*</sup></label>
            <input type="number" placeholder="0" min={1} max={10} value={guests} onChange={(e) => setGuests(e.target.value)} id="guests"/>

            <label htmlFor="occasion">Occasion <sup>*</sup></label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>--------</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation" className="subbtn"/>
        </form>
        </>
    )
}

export default BookingForm
