import React, { useState } from "react";
import { ListItem } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";

const DropDown = ({ data }) => {
    
  const hasChildren = (item) => {
    const { child } = item;

    if (child === undefined) {
      return false;
    }

    if (typeof child === "object" && child.length === 0) {
      return false;
    }

    if (child.length === 0) {
      return false;
    }

    return true;
  };

  const SingleLevel = (item) => {
    return (
      <>
        <ListItem
          key={item.name}
          // component={Link}
          // classes={{
          //   root:
          //     classes.listItemRoot +
          //     (item.upgradeToPro ? " " + classes.listItemRootUpgradeToPro : ""),
          //   selected: classes.listItemSelected,
          // }}
          // selected={
          //   location.pathname === item.layout + item.path ||
          //   item.upgradeToPro === true
          // }
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>{item.name}</span>
            </div>
          </div>
        </ListItem>
      </>
    );
  };

  const MultiLevel = (item) => {
    const [opens, setOpens] = useState(false);
    const handleMyClick = (e) => {
      e.preventDefault();
      setOpens((prev) => !prev);
    };
    return (
      <>
        <ListItem onClick={(e) => handleMyClick(e)}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>{item.name}</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "10px",
            }}
          >
            <div>{opens ? <ExpandLessIcon /> : <ExpandMoreIcon />}</div>
          </div>
        </ListItem>
        <Collapse in={opens} timeout="auto" style={{ paddingLeft: "20px" }}>
          <List component="div" disablePadding>
            {item.child.map((child, index) => menuItem(child, index))}
          </List>
        </Collapse>
      </>
    );
  };

  const menuItem = (item) => {
    const Component = hasChildren(item) ? MultiLevel(item) : SingleLevel(item);
    return Component;
  };

  const createLinks = (menu) => {
    return menu.map((prop) => {
      return menuItem(prop);
    });
  };
  return <List>{createLinks(data.child)}</List>;
};

export default DropDown;
