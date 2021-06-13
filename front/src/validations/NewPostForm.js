import * as Yup from 'yup';

export default async function NewPostForm(post) {
  try {

    const schema = Yup.object().shape({
      username: Yup.string().required('O usuário é obrigatório'),
      title: Yup.string().required('O Título é obrigatório'),
      body: Yup.string().required('A Descrição é obrigatória'),
    });
    await schema.validate(post, {
      abortEarly: false,
    });

    return true;

  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      const errorMessages = {};
      err.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });
      return errorMessages;
    }
  }
}
