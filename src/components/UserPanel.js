import React from 'react';

const UserPanel = () => {
  return (
    <div className="user-panel">
      <div className="user-panel__avatar">
        <img src="/images/user_avatar.jpg" alt="Profile" className="user-panel__avatar-img" />
      </div>
      <div className="user-panel__menu">
        <img src="/images/menu_home.svg" alt="Home" className="user-panel__home" />
        <img src="/images/menu_library.svg" alt="My library" className="user-panel__library" />
        <img src="/images/menu_browse.svg" alt="Browse" className="user-panel__browse" />
      </div>
      <div className="user-panel__bottom">
        <img src="/images/menu_search.svg" alt="Search" className="user-panel__search" />
        <img src="/images/menu_settings.svg" alt="Settings" className="user-panel__setting" />
      </div>
    </div>
  );
};

export default UserPanel;
