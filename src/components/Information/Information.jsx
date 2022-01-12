import { useSelector } from "react-redux";
import styles from "./Information.module.scss";

export default function Information() {
  const countries = useSelector((store) => {
    return store.allCountriesReducer;
  });

  let counter = 0;
  return (
    <div className="container">
      <div className={styles.table__title}>
        <p className={styles.table__title_text_numbers}>№</p>
        <span className={styles.title__separator}></span>
        <p className={styles.table__title__text_countries}>Country</p>
        <span className={styles.title__separator}></span>
        <p className={styles.table__title__text_cases}>Total Confirmed</p>
      </div>

      <ul>
        {countries.map((country) => {
          const { ID, Country, TotalConfirmed } = country;
          counter++;
          return (
            <li className={styles.main_table__item} key={ID}>
              <p className={styles.main_table__text_numbers}>{counter}</p>
              <span className={styles.main_table__separator}></span>
              <p className={styles.main_table__text_countries}>{Country}</p>
              <span className={styles.main_table__separator}></span>
              <p className={styles.main_table__text_cases}>{TotalConfirmed}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
