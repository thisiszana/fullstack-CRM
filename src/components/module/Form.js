import FormInput from "./FormInput";
import ItemList from "./ItemList";

function Form({ form, setForm }) {
  const changegeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <FormInput
        name="name"
        label="Name"
        type="text"
        value={form.name}
        onChange={changegeHandler}
      />
      <FormInput
        name="lastName"
        label="Last Name"
        type="text"
        value={form.lastName}
        onChange={changegeHandler}
      />
      <FormInput
        name="email"
        label="Email"
        type="text"
        value={form.email}
        onChange={changegeHandler}
      />
      <FormInput
        name="phone"
        label="Phone"
        type="tel"
        value={form.phone}
        onChange={changegeHandler}
      />
      <FormInput
        name="address"
        label="Address"
        type="text"
        value={form.address}
        onChange={changegeHandler}
      />
      <FormInput
        name="postalCode"
        label="Postal Code"
        type="text"
        value={form.postalCode}
        onChange={changegeHandler}
      />
      <FormInput
        name="date"
        label="Date"
        type="date"
        value={form.date}
        onChange={changegeHandler}
      />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
