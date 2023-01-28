import userStore from '/src/lib/stores/users.js'

export const load = async ({fetch}) => {
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then(({ data }) => {
        userStore.set({
          users: data,
        });
      })
      .catch((error) => {
        console.log(error);
        return;
      });
};