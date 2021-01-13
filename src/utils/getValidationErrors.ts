import { ValidationError } from 'yup';

interface ValidationErrors {
  // mais ou menos campos dos q o descritos
  // campos dinâmicos
  [key: string]: string;
}

// Erro padrão do JS? Error!
export default function getValidationErrors(
  err: ValidationError,
): ValidationErrors {
  // inner
  const validationErrors: ValidationErrors = {};

  err.inner.forEach(error => {
    validationErrors[error.path as string] = error.message;
  });

  return validationErrors;
}
