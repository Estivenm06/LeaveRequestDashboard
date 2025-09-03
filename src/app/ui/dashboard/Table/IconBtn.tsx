import React from 'react';

import { Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-icons/dist/message-error";
import "@ui5/webcomponents-icons/dist/in-progress";
import "@ui5/webcomponents-icons/dist/sys-enter";

export default function IconBtn ({ status }: { status: string }) {
  let styleIcon = "";
  let name = "";
  if(status === 'APPROVED'){
    name = "sys-enter"
    styleIcon = "text-green-800";
  }else if(status === 'REJECTED'){
    name = "message-error"
    styleIcon = "text-red-800";
  }else if(status === 'PENDING'){
    name = "in-progress"
    styleIcon = "text-yellow-800";
  }else {
    styleIcon = "text-white";
  }
  return <Icon name={name} className={`${styleIcon} w-3 h-3`} />
};
