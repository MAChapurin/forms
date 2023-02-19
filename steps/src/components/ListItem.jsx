export default function ListItem({ el, deleteItem, modifyItem }) {
  return (
    <li className="li">
      <div>{el.date}</div>
      <div>{el.km}</div>
      <div className="button_wrap">
        <button
          onClick={() => {
            modifyItem(el.id);
          }}
        >
          <i className="material-icons">create</i>
        </button>
        <button
          onClick={() => {
            deleteItem(el.id);
          }}
        >
          <i className="material-icons">close</i>
        </button>
      </div>
    </li>
  );
}
