import { FormDataStructure } from '../../models/FormDataStructure';
import './Registration.scss';
import { Formik, Field, Form, ErrorMessage, FormikProps } from 'formik';

type FormDataErrorStructure = Partial<FormDataStructure>;

export const Registration = () => {
  const validate = (values: FormDataStructure) => {
    const errors: FormDataErrorStructure = {};

    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (!values.email) {
      errors.email = 'required';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Neplatný formát emailu.';
    } else if (values.email.length > 30) {
      errors.email = 'Max. 30 znaků';
    }

    if (!values.password) {
      errors.password = 'required';
    } else if (values.password.length > 50) {
      errors.password = 'Max. 50 znaků';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'required';
    } else if (values.confirmPassword.length > 50) {
      errors.confirmPassword = 'Max. 50 znaků';
    }

    if (
      values.password !== values.confirmPassword &&
      values.confirmPassword.length > 0
    ) {
      errors.confirmPassword = 'Hesla se neshodují!';
    }

    if (!values.phone) {
      errors.phone = 'required';
    } else if (!/^\d{9}$/.test(values.phone)) {
      errors.phone = 'Neplatný formát čísla';
    }

    if (!values.fullName) {
      errors.fullName = 'required';
    } else if (values.fullName.length > 40) {
      errors.fullName = 'Max. 40 znaků';
    }

    if (values.street.length > 30) {
      errors.street = 'Max. 30 znaků';
    }

    if (values.city.length > 20) {
      errors.city = 'Max. 20 znaků';
    }

    if (values.postalCode.length > 6) {
      errors.postalCode = 'Max. 6 znaků';
    }

    if (values.comments.length > 100) {
      errors.comments = 'Max. 100 znaků';
    }

    if (!values.consent) {
      errors.consent =
        'Pro dokončení registrace, je nutné zaškrtnout toto pole.';
    }

    return errors;
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        fullName: '',
        company: '',
        street: '',
        city: '',
        postalCode: '',
        pickupLocation: '',
        newsletter: 'no',
        comments: '',
        consent: '',
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        setSubmitting(false);
        resetForm();
      }}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {(props: FormikProps<FormDataStructure>) => (
        <Form className="form">
          <p className="form__note">* Údaje s hvězdičkou jsou povinné</p>
          <div className="form__row">
            <legend className="legend">Registrační údaje</legend>
            <label className="label" htmlFor="email">
              Email <span className="error">*</span>{' '}
              {props.errors.email !== 'required' && (
                <ErrorMessage name="email" component="span" className="error" />
              )}
              <Field
                className={`${props.touched.email && props.errors.email ? 'input-error' : ''} input`}
                type="email"
                name="email"
              />
            </label>
            <div className="flex">
              <label className="label" htmlFor="password">
                Heslo <span className="error">*</span>{' '}
                {props.errors.password !== 'required' && (
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="error"
                  />
                )}
                <Field
                  className={`${props.touched.password && props.errors.password ? 'input-error' : ''} input`}
                  type="password"
                  name="password"
                />
              </label>
              <label className="label" htmlFor="confirmPassword">
                Potvrzení hesla <span className="error">*</span>{' '}
                {props.errors.confirmPassword !== 'required' && (
                  <ErrorMessage
                    name="confirmPassword"
                    component="span"
                    className="error"
                  />
                )}
                <Field
                  className={`${props.touched.confirmPassword && props.errors.confirmPassword ? 'input-error' : ''} input`}
                  type="password"
                  name="confirmPassword"
                />
              </label>
            </div>

            <label className="label" htmlFor="phone">
              Telefon <span className="error">*</span>{' '}
              {props.errors.phone !== 'required' && (
                <ErrorMessage name="phone" component="span" className="error" />
              )}
              <Field
                className={`${props.touched.phone && props.errors.phone ? 'input-error' : ''} input`}
                type="tel"
                name="phone"
              />
            </label>
          </div>
          <div className="form__row">
            <legend className="legend">Fakturační údaje</legend>

            <label className="label" htmlFor="fullName">
              Jméno a příjmení <span className="error">*</span>{' '}
              {props.errors.fullName !== 'required' && (
                <ErrorMessage
                  name="fullName"
                  component="span"
                  className="error"
                />
              )}
              <Field
                className={`${props.touched.fullName && props.errors.fullName ? 'input-error' : ''} input`}
                type="text"
                name="fullName"
              />
            </label>

            <label className="label" htmlFor="company">
              Název firmy
              <Field className="input" type="text" name="company" />
            </label>

            <label className="label" htmlFor="street">
              Ulice{' '}
              <ErrorMessage name="street" component="span" className="error" />
              <Field className="input" type="text" name="street" />
            </label>
            <div className="flex">
              <label className="label" htmlFor="city">
                Město{' '}
                <ErrorMessage name="city" component="span" className="error" />
                <Field className="input" type="text" name="city" />
              </label>

              <label className="label" htmlFor="postalCode">
                PSČ{' '}
                <ErrorMessage
                  name="postalCode"
                  component="span"
                  className="error"
                />
                <Field className="input" type="text" name="postalCode" />
              </label>
            </div>
          </div>
          <div className="form__row">
            <legend className="legend">Ostatní</legend>
            <label className="label" htmlFor="pickupLocation">
              Preferované odběrné místo
              <Field as="select" className="select" name="pickupLocation">
                <option value="">- vyberte -</option>
                <option value="praha">Praha</option>
                <option value="brno">Brno</option>
                <option value="ostrava">Ostrava</option>
                <option value="plzen">Plzeň</option>
                <option value="liberec">Liberec</option>
              </Field>
            </label>

            <label className="label newsletter-flex">
              Odběr newsletteru:{' '}
              <label htmlFor="newsletterYes">
                <Field type="radio" name="newsletter" value="yes" /> Ano
              </label>
              <label htmlFor="newsletterNo">
                <Field type="radio" name="newsletter" value="no" /> Ne
              </label>
            </label>

            <label className="label" htmlFor="comments">
              Poznámka{' '}
              <ErrorMessage
                name="comments"
                component="span"
                className="error"
              />
              <Field
                as="textarea"
                className="textarea"
                name="comments"
                rows={5}
              ></Field>
            </label>
          </div>
          <div className="form__row">
            <legend className="legend">Souhlas</legend>

            <label className="label" htmlFor="consent">
              <Field type="checkbox" name="consent" /> Souhlasím se zpracováním
              osobních údajů
              <p>
                <ErrorMessage
                  name="consent"
                  component="span"
                  className="error"
                />
              </p>
            </label>
          </div>
          <button className="button" type="submit">
            Registrovat
          </button>
        </Form>
      )}
    </Formik>
  );
};
