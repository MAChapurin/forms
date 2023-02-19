export default function Form({
  handleForm,
  submitForm,
  inputDateRef,
  inputKmRef,
}) {
  return (
    <form className="form">
      <label className="form_label_date" htmlFor="date">Дата(ДД.ММ.ГГ)</label>
      <label className="form_label_km" htmlFor="km">Пройдено км</label>
      <div className="inputGroup">
        <input
          id="date"
          type="text"
          name="date"
          onChange={handleForm}
          ref={inputDateRef}
        />

        <input
          id="km"
          type="number"
          min="0"
          name="km"
          onChange={handleForm}
          ref={inputKmRef}
        />
        <button
          className="form_btn"
          onClick={(e) => {
            submitForm(e);
          }}
        >
          OK
        </button>
      </div>
    </form>
  );
}
