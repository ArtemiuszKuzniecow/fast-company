import PropTypes from "prop-types";
import React from "react";

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem
}) => {
  const renderList = (items) => {
    if (Array.isArray(items)) {
      return items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            "list-group-item" + (item === selectedItem ? " active" : "")
          }
          onClick={() => onItemSelect(item)}
          role="button">
          {item[contentProperty]}
        </li>
      ));
    } else {
      return Object.keys(items).map((item) => (
        <li
          key={items[item][valueProperty]}
          className={
            "list-group-item" + (items[item] === selectedItem ? " active" : "")
          }
          onClick={() => onItemSelect(items[item])}
          role="button">
          {items[item][contentProperty]}
        </li>
      ));
    }
  };
  return <ul className="list-group">{renderList(items)}</ul>;
};

GroupList.defaultProps = { valueProperty: "_id", contentProperty: "name" };
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object
};
export default GroupList;

/* : Array.isArray?  */
