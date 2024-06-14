import './Form.scss';

export const Form = () => {
  return (
    <form className="form">
      <div className="form__row">
        <legend className="legend">Registrační údaje</legend>
        <label className="label" htmlFor="email">
          Email:
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            required
            maxLength={30}
          />
        </label>
        <div className="flex">
          <label className="label" htmlFor="password">
            Heslo:
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              required
              maxLength={50}
            />
          </label>
          <label className="label" htmlFor="confirm_password">
            Potvrzení hesla:
            <input
              className="input"
              type="password"
              id="confirm_password"
              name="confirm_password"
              required
              maxLength={50}
            />
          </label>
        </div>

        <label className="label" htmlFor="phone">
          Telefon:
          <input
            className="input"
            type="tel"
            id="phone"
            name="phone"
            required
            maxLength={20}
          />
        </label>
      </div>

      <div className="form__row">
        <legend className="legend">Fakturační údaje</legend>

        <label className="label" htmlFor="fullName">
          Jméno a příjmení:
          <input
            className="input"
            type="text"
            id="fullName"
            name="fullName"
            maxLength={40}
          />
        </label>

        <label className="label" htmlFor="company">
          Název firmy
          <input
            className="input"
            type="text"
            id="company"
            name="company"
            maxLength={40}
          />
        </label>

        <label className="label" htmlFor="street">
          Ulice:
          <input
            className="input"
            type="text"
            id="street"
            name="street"
            maxLength={30}
          />
        </label>
        <div className="flex">
          <label className="label" htmlFor="city">
            Město:
            <input
              className="input"
              type="text"
              id="city"
              name="city"
              maxLength={20}
            />
          </label>

          <label className="label" htmlFor="postal_code">
            PSČ:
            <input
              className="input"
              type="text"
              id="postal_code"
              name="postal_code"
              maxLength={6}
            />
          </label>
        </div>
      </div>

      <div className="form__row">
        <legend className="legend">Ostatní</legend>
        <label className="label" htmlFor="pickup_location">
          Preferované odběrné místo:
          <select
            className="select"
            id="pickup_location"
            name="pickup_location"
          >
            <option value="praha">Praha</option>
            <option value="brno">Brno</option>
            <option value="ostrava">Ostrava</option>
            <option value="plzen">Plzeň</option>
            <option value="liberec">Liberec</option>
          </select>
        </label>

        <label className="label newsletter-flex">
          Odběr newsletteru:{' '}
          <label htmlFor="newsletter_yes">
            <input
              type="radio"
              id="newsletter_yes"
              name="newsletter"
              value="yes"
            />{' '}
            Ano
          </label>
          <label htmlFor="newsletter_no">
            <input
              type="radio"
              id="newsletter_no"
              name="newsletter"
              value="no"
            />{' '}
            Ne
          </label>
        </label>

        <label className="label" htmlFor="comments">
          Poznámka:
          <textarea
            className="textarea"
            id="comments"
            name="comments"
            maxLength={100}
            rows={5}
          ></textarea>
        </label>
      </div>
      <div className="form__row">
        <legend className="legend">Souhlas</legend>

        <label className="label" htmlFor="consent">
          <input type="checkbox" id="consent" name="consent" required />{' '}
          Souhlasím se zpracováním osobních údajů
        </label>
      </div>
      <button className="button" type="submit">
        Registrovat
      </button>
    </form>
  );
};
