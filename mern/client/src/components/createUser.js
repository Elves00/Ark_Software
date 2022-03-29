import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function CreateUser() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };

        await fetch("http://localhost:5000/record/addUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ name: "", email: "", password: "" });
        navigate("/");
    }

    // This following section will display the form that takes the input from the user.
    return (
        <div>
            {/*Label*/}
            <h3>Create Account</h3>
            
            {/*form are a class for make entry forms etc*/}
            <form onSubmit={onSubmit}>
                {/*A unique div for each text field this one handles name */}
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    {/*A text box with a class and id */}
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                    />
                </div>
                {/*A unique div for each text field this one handles email */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={form.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
                    />
                </div>

                {/*A unique div for each text field this one handles password */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    {/*A text box with a class and id */}
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        value={form.password}
                        onChange={(e) => updateForm({ password: e.target.value })}
                    />
                </div>

                {/*handles person creation */}
                <div className="form-group">
                    {/*Input type is submit which handles form submision type events*/}
                    <input
                        type="submit"
                        value="Create Account"
                        className="btn btn-primary"
                    />
                </div>

            </form>
            

        </div>
    );
}
