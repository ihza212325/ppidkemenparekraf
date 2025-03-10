const serviceGlobal = {
  getSession: ({ params = {}, payload = {} }) => {
    return {
      method: "get",
      url: "/session",
      params,
      payload,
    };
  },
  getMenu: ({ param = {}, payload = {} }) => {
    return {
      method: "get",
      url: `/menu`,
      param,
      payload,
    };
  },
  postNotifSubscribe: ({ param = {}, payload = {} }) => {
    return {
      method: "post",
      url: `/notif/subscribe`,
      param,
      payload,
    };
  },
  postNotifUnSubscribe: ({ param = {}, payload = {} }) => {
    return {
      method: "post",
      url: `/notif/unsubscribe`,
      param,
      payload,
    };
  },
};

export default serviceGlobal;
