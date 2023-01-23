import { useState } from "react";
import "./ContactForm.css"

const ContactForm = ({ toogleVisibility, setContact }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [comment, setComment] = useState("")

    const handleContactForm = (e) => {
        e.preventDefault()
        toogleVisibility.current.toogleVisibility()

        const objContact = {
            name, 
            phone, 
            address,
            comment
        }

        setContact(objContact)
        setName("")
        setPhone("")
        setAddress("")
        setComment("")
    }

    return (
        <div className="contact-container">
            <div>Contactos</div>
            <form className="label-contact" onSubmit={handleContactForm}>
                <label className="label-contact">Nombre:
                    <input
                        className="input-contact"
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className="label-contact">Teléfono:
                    <input
                        className="input-contact"
                        type="text"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className="label-contact">Dirección:
                    <input
                        className="input-contact"
                        type="text"
                        value={address}
                        onChange={({ target }) => setAddress(target.value)}
                    />
                </label>
                <label className="label-contact">Comentario:
                    <input
                        className="input-contact"
                        type="text"
                        value={comment}
                        onChange={({ target }) => setComment(target.value)}
                    />
                </label>
                <button className="button-contact" type="submit">Confirmar</button>
            </form>
        </div>
    )
}

export default ContactForm


