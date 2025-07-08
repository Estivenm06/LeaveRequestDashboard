import React from 'react';

import { Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-icons/dist/decline";
import "@ui5/webcomponents-icons/dist/pending";
import "@ui5/webcomponents-icons/dist/verified";

const IconBtn = ({ status }: { status: string }) => {
  switch (status) {
    case "APPROVED":
      return (
        <Icon
          name="verified"
          className="text-white mx-auto align-middle mr-0.5"
        />
      );
    case "REJECTED":
      return (
        <Icon
          name="decline"
          className="text-white mx-auto align-middle mr-0.5"
        />
      );
    case "PENDING":
      return (
        <Icon
          name="pending"
          className="text-white mx-auto align-middle mr-0.5"
        />
      );
    default:
      break;
  }
};

export { IconBtn };
