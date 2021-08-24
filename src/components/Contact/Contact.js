import React, {useState} from 'react';


export default function Contact() {

    return (
        <section className="form_contact">
            <div className="form_contact">
                <h1 className="form_contact">Kontakt</h1>
                <h2 className="form_contact">Napisz do nas</h2>
                <FormExample/>
            </div>
        </section>
    )
}

const FormExample = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textarea, setTextarea] = useState("");

    return (
        <form className="form_contact">
            <input className="form_contact" type="text" value={name} onChange={e => setName(e.target.value)}
                   placeholder="podaj imie i nazwisko"/>
            <input className="form_contact" type="text" value={email} onChange={e => setEmail(e.target.value)}
                   placeholder="podaj email"/>
            <textarea className="form_contact" type="textarea" rows="4" value={textarea}
                      onChange={e => setTextarea(e.target.value)}/>
            <button className="form_contact" type="submit">Wyślij</button>
        </form>

    );
}
