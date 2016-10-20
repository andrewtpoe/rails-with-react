import 'whatwg-fetch';

const token = document.getElementsByName('csrf-token')[0].content;

export async function getRequest(url) {
  let fullResponse;
  const body = await fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: 'GET',
    mode: 'cors',
  }).then((response) => {
    fullResponse = response;
    return response.json();
  }).then((b) => {
    return b;
  }).catch((err) => {
    console.error('Error in getRequest');
    console.error(err);
  });
  fullResponse = fullResponse || {};
  return {
    body: body,
    ok: fullResponse.ok,
    status: fullResponse.status,
    statusText: fullResponse.statusText,
    type: fullResponse.type,
    url: fullResponse.url
  };
};

export async function postRequest(url, data) {
  let fullResponse;
  const body = await fetch(url, {
    body: JSON.stringify(data),
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: 'POST',
    mode: 'cors',
  }).then((response) => {
    fullResponse = response;
    return response.json();
  }).then((b) => {
    return b;
  }).catch((err) => {
    console.error('Error in postRequest');
    console.error(err);
  });
  fullResponse = fullResponse || {};
  return {
    body: body,
    ok: fullResponse.ok,
    status: fullResponse.status,
    statusText: fullResponse.statusText,
    type: fullResponse.type,
    url: fullResponse.url
  };
};

export async function patchRequest(url, data) {
  let fullResponse;
  const body = await fetch(url, {
    body: JSON.stringify(data),
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: 'PATCH',
    mode: 'cors',
  }).then((response) => {
    fullResponse = response;
    return response.json();
  }).then((b) => {
    return b;
  }).catch((err) => {
    console.error('Error in patchRequest');
    console.error(err);
  });
  fullResponse = fullResponse || {};
  return {
    body: body,
    ok: fullResponse.ok,
    status: fullResponse.status,
    statusText: fullResponse.statusText,
    type: fullResponse.type,
    url: fullResponse.url
  };
};

export async function deleteRequest(url) {
  let fullResponse;
  const body = await fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: 'DELETE',
    mode: 'cors',
  }).then((response) => {
    fullResponse = response;
  }).catch((err) => {
    console.error('Error in deleteRequest');
    console.error(err);
  });
  fullResponse = fullResponse || {};
  return {
    ok: fullResponse.ok,
    status: fullResponse.status,
    statusText: fullResponse.statusText,
    type: fullResponse.type,
    url: fullResponse.url
  };
};
