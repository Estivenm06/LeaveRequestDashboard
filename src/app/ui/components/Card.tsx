import { Icon } from "@ui5/webcomponents-react";
import '@ui5/webcomponents-icons/AllIcons.js'
import '@ui5/webcomponents-icons/document-text.js'
import '@ui5/webcomponents-icons/away.js'
import '@ui5/webcomponents-icons/accept.js'
import '@ui5/webcomponents-icons/group.js'

type Card = {
  title: string;
  icon: string;
  number: string | number;
  content: string;
  borderColor: string;
};

const Card = ({ title, icon, number, content, borderColor }: Card) => {
  return (
    <div
      className={`border-1 border-gray-300 border-l-4 bg-white px-5 py-10 rounded-lg shadow-md ${borderColor}`}
    >
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <p className="text-sm font-medium">{title}</p>
          <Icon className="h-4 w-4 text-muted-foreground" name={icon} />
        </div>
        <div className="h-full flex flex-col">
          <div className="text-2xl font-bold">{number}</div>
          <p className="text-xs text-muted-foreground">{content}</p>
        </div>
    </div>
  );
};

export { Card };
