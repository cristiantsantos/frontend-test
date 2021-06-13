import * as Yup from 'yup';

export default async function NewCommentForm(comment) {
  try {

    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é obrigatório'),
      body: Yup.string().required('A Descrição é obrigatória'),
    });
    await schema.validate(comment, {
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
