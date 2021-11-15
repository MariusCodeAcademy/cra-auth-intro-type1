const backUrl = 'http://localhost:5000';

export async function login(email, password) {
  const resp = await fetch(`${backUrl}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await resp.json();
  console.log(data);
  return data;
}
