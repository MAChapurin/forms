import ListItem from "./ListItem";

export default function List({ list, deleteItem, modifyItem}) {
  return (
    <>
      <div className="list_title_wrap">
        <h4 className="h4">Дата(ДД.ММ.ГГ)</h4>
        <h4 className="h4">Пройдено км</h4>
        <h4 className="h4">Действия</h4>
      </div>
      <ul className="ul">
        {list.map((el) => {
          return (
            <ListItem key={el.id} el={el} deleteItem={deleteItem} modifyItem ={modifyItem}/>
          );
        })}
      </ul>
    </>
  );
}
