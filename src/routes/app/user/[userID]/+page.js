export const load = (({ params }) => {
  return {
    post: {
      title: `Title for ${params.userID} goes here`,
      content: `Content for ${params.slug} goes here`
    }
  };
});