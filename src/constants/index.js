export const SEARCH_CONTACT_PLACEHOLDER__TEXT__ = "Search contacts";

export const TAB_FAVOURITE__KEY__ = "favourite_tab";
export const TAB_RECCENT__KEY__ = "recent_tab";
export const TAB_CONTACTS__KEY__ = "contacts_tab";

export const tabData = [
  { id: 1, name: "Favourites", key: "favourites" },
  { id: 2, name: "Recent", key: "recent" },
  { id: 3, name: "Contacts", key: "contacts" }
];


export const OUTGOING_LOG__KEY__ = "outgoing";
export const INCOMMING_LOG__KEY__ = "incoming";
export const MISSED_LOG__KEY__ = "missed";
export const COULDNT_CONNECT_LOG__KEY__ = "couldnt_connect";

export const WIFI_CALLING__KEY__ = "wifi_calling";
export const HD_CALLING__KEY__ = "hd_calling";
export const DEFAULT__KEY__ = "default";

export const NAME__KEY__ = "name";
export const CALL_ON__KEY__ = "call_on";
export const TYPE__KEY__ = "type";
export const TIME__KEY__ = "time";
export const DURATION__KEY__ = "duration";

// export const


export const contactListData = [
  { id: 1, [NAME__KEY__]: "Vikas chauhan" },
  { id: 2, [NAME__KEY__]: "Yogesh chauhan" },
];

export const recentItemList = [
  { id: 1, [NAME__KEY__]: "Vikas chauhan", [CALL_ON__KEY__]: WIFI_CALLING__KEY__, [TYPE__KEY__]: OUTGOING_LOG__KEY__, [TIME__KEY__]: "8:00pm", [DURATION__KEY__]: "4m 10s" },
  { id: 2, [NAME__KEY__]: "Yoges chauhan", [CALL_ON__KEY__]: DEFAULT__KEY__, [TYPE__KEY__]: INCOMMING_LOG__KEY__, [TIME__KEY__]: "8:00pm", [DURATION__KEY__]: "4m 10s" },
  { id: 3, [NAME__KEY__]: "Yaten chauhan", [CALL_ON__KEY__]: WIFI_CALLING__KEY__, [TYPE__KEY__]: MISSED_LOG__KEY__, [TIME__KEY__]: "8:00pm", [DURATION__KEY__]: "4m 10s" },
  { id: 4, [NAME__KEY__]: "sachin tendulkar", [CALL_ON__KEY__]: HD_CALLING__KEY__, [TYPE__KEY__]: COULDNT_CONNECT_LOG__KEY__, [TIME__KEY__]: "8:00pm", [DURATION__KEY__]: "4m 10s" },
  { id: 5, [NAME__KEY__]: "Sourav ganguli", [CALL_ON__KEY__]: HD_CALLING__KEY__, [TYPE__KEY__]: COULDNT_CONNECT_LOG__KEY__, [TIME__KEY__]: "8:00pm", [DURATION__KEY__]: "4m 10s" },
];