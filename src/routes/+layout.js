import userStore from '/src/lib/stores/users.js'

export const ssr = false;
export const prerender = false;

export const load = async () => {
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then(({ data }) => {
        let users = data;
        console.log(data);
        userStore.set({
          users,
        });
      })
      .catch((error) => {
        console.log(error);
        return;
      });
};