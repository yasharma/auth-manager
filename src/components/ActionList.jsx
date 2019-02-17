import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const ActionList = () => {
  const [dropdownOpen, setToggle] = useState(false);
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={() => setToggle(!dropdownOpen)}>
      <DropdownToggle caret>
        Manage
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>View </DropdownItem>
        <DropdownItem>Status</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Delete</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}